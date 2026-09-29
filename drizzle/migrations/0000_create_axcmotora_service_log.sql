CREATE TYPE public.app_role AS ENUM ('admin');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT, INSERT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated;

CREATE OR REPLACE FUNCTION public.claim_first_admin()
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF auth.uid() IS NULL THEN
    RAISE EXCEPTION 'Authentication required';
  END IF;
  IF EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'admin') THEN
    RETURN public.has_role(auth.uid(), 'admin');
  END IF;
  INSERT INTO public.user_roles (user_id, role) VALUES (auth.uid(), 'admin')
  ON CONFLICT DO NOTHING;
  RETURN public.has_role(auth.uid(), 'admin');
END;
$$;
GRANT EXECUTE ON FUNCTION public.claim_first_admin() TO authenticated;

CREATE POLICY "Admins can read roles"
ON public.user_roles FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE TABLE public.customers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_name text NOT NULL CHECK (char_length(owner_name) BETWEEN 2 AND 100),
  phone text NOT NULL CHECK (char_length(phone) BETWEEN 8 AND 24),
  email text CHECK (email IS NULL OR char_length(email) <= 255),
  address text CHECK (address IS NULL OR char_length(address) <= 500),
  notes text CHECK (notes IS NULL OR char_length(notes) <= 3000),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.customers TO authenticated;
GRANT ALL ON public.customers TO service_role;
ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins manage customers" ON public.customers FOR ALL TO authenticated
USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TABLE public.vehicles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id uuid NOT NULL REFERENCES public.customers(id) ON DELETE CASCADE,
  brand text NOT NULL CHECK (brand IN ('Volkswagen', 'Audi', 'Mini Cooper')),
  model text NOT NULL CHECK (char_length(model) BETWEEN 1 AND 100),
  model_year integer CHECK (model_year BETWEEN 1950 AND 2100),
  license_plate text NOT NULL CHECK (char_length(license_plate) BETWEEN 2 AND 20),
  mileage_km integer CHECK (mileage_km IS NULL OR mileage_km >= 0),
  vin text CHECK (vin IS NULL OR char_length(vin) <= 40),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (license_plate)
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.vehicles TO authenticated;
GRANT ALL ON public.vehicles TO service_role;
ALTER TABLE public.vehicles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins manage vehicles" ON public.vehicles FOR ALL TO authenticated
USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TABLE public.service_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  vehicle_id uuid NOT NULL REFERENCES public.vehicles(id) ON DELETE CASCADE,
  service_date date NOT NULL DEFAULT CURRENT_DATE,
  mileage_km integer CHECK (mileage_km IS NULL OR mileage_km >= 0),
  service_type text NOT NULL CHECK (char_length(service_type) BETWEEN 2 AND 150),
  notes text NOT NULL CHECK (char_length(notes) BETWEEN 2 AND 5000),
  created_by uuid NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.service_entries TO authenticated;
GRANT ALL ON public.service_entries TO service_role;
ALTER TABLE public.service_entries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins manage service entries" ON public.service_entries FOR ALL TO authenticated
USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE INDEX customers_owner_name_idx ON public.customers (owner_name);
CREATE INDEX customers_phone_idx ON public.customers (phone);
CREATE INDEX vehicles_customer_id_idx ON public.vehicles (customer_id);
CREATE INDEX vehicles_license_plate_idx ON public.vehicles (license_plate);
CREATE INDEX service_entries_vehicle_date_idx ON public.service_entries (vehicle_id, service_date DESC);

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$;
CREATE TRIGGER customers_set_updated_at BEFORE UPDATE ON public.customers FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER vehicles_set_updated_at BEFORE UPDATE ON public.vehicles FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER service_entries_set_updated_at BEFORE UPDATE ON public.service_entries FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();