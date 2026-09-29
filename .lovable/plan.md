# AxcMotora Full-Stack Website and Service Log

## Overview
Build a premium dark automotive website in Bahasa Indonesia for AxcMotora, paired with a secure Google-only staff area for customer and service records. Public booking details will be validated in the browser and handed directly to WhatsApp; no pricing or quote calculations will appear.

## Public Experience
- Create a shared branded header and footer showing AxcMotora, the exact Tangerang address, operating hours, both WhatsApp contacts, and Instagram only.
- Add floating quick actions for the primary WhatsApp contact and booking page.
- Build separate public pages for Home, Services, About & Location, Booking, and Contact, each with unique search and social metadata.
- Home will feature the supplied headline, strong booking and WhatsApp actions, specialist positioning for Volkswagen, Audi, and Mini Cooper, service highlights, location details, and an Instagram showcase linking to `@AxcMotora`.
- Services will cover maintenance/tune-ups, diagnostics, transmission/mechatronic repair, AC/electrical troubleshooting, and performance upgrades without prices.
- Use generated high-end automotive workshop imagery with a cohesive matte-charcoal, metallic-silver, and restrained performance-accent art direction.

## Booking and WhatsApp Handover
- Build a mobile-friendly form for owner name, WhatsApp number, brand, model/year, plate number, mileage, and issue/service details.
- Validate required fields, formats, and length limits before composing the message.
- On confirmation, open WhatsApp to `+6281399020252` with a clearly formatted Bahasa Indonesia booking summary.
- Do not calculate, display, store, or imply pricing; WhatsApp remains the handover point for workshop follow-up.

## Secure Admin and Service Log
- Enable Google-only staff sign-in and protect the admin area from public access.
- Store authorization in a dedicated role table; only assigned admins can read or change customer and service-log data.
- Create customer, vehicle, and service-entry records with contact details, vehicle information, visit date, mileage, and service-history notes.
- Build a simple searchable CRM table and customer/vehicle detail view, plus forms to add or edit records and append service notes.
- Keep staff identity data with Google; store no editable staff profile beyond the required admin role.

## Data and Security
- Add database tables with explicit access grants, row-level security, admin-role checks, useful indexes, timestamps, and sensible field constraints.
- Keep the public WhatsApp booking flow separate from the private database; it will not silently create customer records.
- Validate all private writes both in the interface and on the server.
- Include empty, loading, error, unauthorized, and confirmation states.

## Visual and Interaction Quality
- Establish semantic design tokens, metallic surface treatments, clean typography, compact radii, subtle borders, and controlled motion with reduced-motion support.
- Ensure the layout works cleanly on phones and desktop without overlapping controls or text.
- Use accessible labels, keyboard navigation, visible focus states, and sufficient contrast.

## Verification
- Verify public navigation, all contact links, both WhatsApp links, Instagram link, booking message formatting, and form validation.
- Verify Google sign-in, non-admin denial, admin CRUD access, service-history updates, and sign-out behavior.
- Check database security policies and test desktop and mobile layouts in the running preview.
