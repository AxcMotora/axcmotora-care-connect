# AxcMotora Roadmap

- [x] Public pages and shared contact details
- [x] WhatsApp booking handover with validation
- [x] Google-only staff authentication
- [x] Secure customer, vehicle, and service-log database
- [x] Admin CRM and service history interface
- [ ] Final preview, security, and mobile verification
- [x] Add a dedicated Sparepart page with selected Tokopedia products, prices, and store links
  - [x] Include Mechatronic Volkswagen Polo/MK6/MK7/Scirocco/Tiguan at Rp12.000.000
  - [x] Include Shifter VW Golf MK5/MK6/MK7 at Rp10.000.000
  - [x] Include Racksteer VW Tiguan Allspace at Rp18.000.000
- [x] Verify the Sparepart page on desktop and mobile

## Verification update — 29 September 2026
- [x] TypeScript compilation passes with `tsgo --noEmit`.
- [x] Desktop homepage and booking page visually checked in Chromium.
- [x] Mobile homepage and navigation trigger checked at 390px width.
- [x] Booking form opens primary WhatsApp number with all submitted details.
- [x] No runtime console or page errors found in public flows.
- [x] Admin bootstrap RPC disabled; role assignment is explicit and RLS remains enforced.
- [ ] Google OAuth and authenticated CRM CRUD require a configured Google provider and an explicitly assigned admin role.
