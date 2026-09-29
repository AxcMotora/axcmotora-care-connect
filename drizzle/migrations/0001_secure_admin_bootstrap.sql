REVOKE EXECUTE ON FUNCTION public.claim_first_admin() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
COMMENT ON FUNCTION public.claim_first_admin() IS 'DISABLED: admin roles must be assigned explicitly after staff authentication.';