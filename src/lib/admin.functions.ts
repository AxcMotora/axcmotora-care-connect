import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

const customerSchema = z.object({ ownerName: z.string().trim().min(2).max(100), phone: z.string().trim().min(8).max(24), email: z.string().trim().email().max(255).or(z.literal("")), address: z.string().trim().max(500), notes: z.string().trim().max(3000), brand: z.enum(["Volkswagen", "Audi", "Mini Cooper"]), model: z.string().trim().min(1).max(100), modelYear: z.number().int().min(1950).max(2100).nullable(), licensePlate: z.string().trim().min(2).max(20), mileageKm: z.number().int().min(0).nullable(), vin: z.string().trim().max(40) });
const serviceSchema = z.object({ vehicleId: z.string().uuid(), serviceDate: z.string().date(), mileageKm: z.number().int().min(0).nullable(), serviceType: z.string().trim().min(2).max(150), notes: z.string().trim().min(2).max(5000) });

async function requireAdmin(context: { supabase: any; userId: string }) {
  const { data, error } = await context.supabase.rpc("has_role", { _user_id: context.userId, _role: "admin" });
  if (error || !data) throw new Error("Akses admin diperlukan.");
}

export const getAdminData = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(async ({ context }) => {
  await requireAdmin(context);
  const { data, error } = await context.supabase.from("customers").select("*, vehicles(*, service_entries(*))").order("updated_at", { ascending: false });
  if (error) throw new Error("Data pelanggan tidak dapat dimuat.");
  return data ?? [];
});

export const createCustomerVehicle = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => customerSchema.parse(input)).handler(async ({ data, context }) => {
  await requireAdmin(context);
  const { data: customer, error: customerError } = await context.supabase.from("customers").insert({ owner_name: data.ownerName, phone: data.phone, email: data.email || null, address: data.address || null, notes: data.notes || null }).select("id").single();
  if (customerError || !customer) throw new Error("Pelanggan tidak dapat disimpan.");
  const { error: vehicleError } = await context.supabase.from("vehicles").insert({ customer_id: customer.id, brand: data.brand, model: data.model, model_year: data.modelYear, license_plate: data.licensePlate.toUpperCase(), mileage_km: data.mileageKm, vin: data.vin || null });
  if (vehicleError) throw new Error("Kendaraan tidak dapat disimpan.");
  return { ok: true };
});

export const createServiceEntry = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => serviceSchema.parse(input)).handler(async ({ data, context }) => {
  await requireAdmin(context);
  const { error } = await context.supabase.from("service_entries").insert({ vehicle_id: data.vehicleId, service_date: data.serviceDate, mileage_km: data.mileageKm, service_type: data.serviceType, notes: data.notes, created_by: context.userId });
  if (error) throw new Error("Catatan servis tidak dapat disimpan.");
  return { ok: true };
});
