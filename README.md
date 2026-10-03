# AxcMotora Connect

Create a slick, premium, and professional full-stack web application for an independent specialized automotive workshop called "AxcMotora" specializing in Volkswagen, Audi, and Mini Cooper vehicles. 

The application needs a modern dark-mode luxury aesthetic (deep charcoal/matte black background with metallic silver and clean typography, high-end automotive imagery, and smooth UI cards).

Here are the exact business and contact details that must be prominently displayed across the header, contact page, footer, and floating quick-action buttons:
- Business Name: AxcMotora
- Specialization: Specialist Volkswagen, Audi & Mini Cooper Service, Diagnostics, and Tuning
- Location/Address: Perumahan Taman Jaya Blok C4 No. 16, Tangerang, Banten, Indonesia
- Operating Hours: Monday - Saturday, 08:30 - 17:00 WIB
- WhatsApp Contacts: +62 813-9902-0252 and +62 817-7986-0888 (Include direct click-to-chat WhatsApp buttons)
- Social Media: 
  - Instagram: @AxcMotora (Provide a direct hyperlink/icon card)
  *(Note: Do not include any Facebook links or sections)*

Please build the following core modules:

1. Customer-Facing Landing Page:
- Hero section with a high-end hook ("Precision Specialist Care for Your VW, Audi & Mini Cooper in Tangerang") and prominent CTAs for booking and direct WhatsApp consultation.
- About Us & Location section featuring our exact address in Perumahan Taman Jaya, Tangerang with contact info.
- Services Showcase Grid (Periodic Maintenance & Tune-ups, Advanced Engine Diagnostics, Transmission & Mechatronic Repair, AC & Electrical Troubleshooting, Performance Upgrades) without any pricing information.
- Instagram integration feed showcase or card for @AxcMotora.

2. Interactive Service Booking & WhatsApp Handover Flow:
- A clean booking form where customers input: Owner Name, Phone/WhatsApp, Vehicle Brand (Volkswagen / Audi / Mini Cooper), Model/Year, License Plate Number, Mileage (KM), and issue description or service choice.
- NO pricing, NO live price estimates, and NO cost calculators.
- Instead of an automatic internal quote, when the user clicks "Confirm Booking", the app compiles the details and immediately opens/redirects to WhatsApp targeting the primary number: +6281399020252, with a pre-filled, nicely formatted message containing all their booking details so the workshop can handle it via chat.

3. Simple Admin / Service Log:
- A clean customer CRM database view tracking client contact info, vehicle details, and service history notes (no complex shop Kanban queue or status boards needed).

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://axcmotora-care-connect.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/bbf668fb-f5c4-58e2-8b91-2c95ea8b5c6d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
