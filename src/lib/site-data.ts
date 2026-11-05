import { Activity, AirVent, BadgeCheck, Droplets, FlaskConical, Gauge, Settings2, ShieldCheck, Truck, Wrench } from "lucide-react";

export const WHATSAPP_PRIMARY = "6281399020252";
export const WHATSAPP_SECONDARY = "6281779860888";
export const ADDRESS = "Perumahan Taman Jaya Blok C4 No. 16, Tangerang, Banten, Indonesia";
export const HOURS = "Senin - Sabtu, 08:30 - 17:00 WIB";
export const INSTAGRAM_URL = "https://www.instagram.com/AxcMotora";
export const TOKOPEDIA_URL = "https://www.tokopedia.com/axcmotora";
export const TOKOPEDIA_CATALOG = "https://tk.tokopedia.com/ZSp8ujvsA/";

export const services = [
  { icon: Wrench, title: "Servis Berkala & Tune-up", description: "Biar mesin tetap enak dan awet. Kami cek menyeluruh dan setel sesuai karakter mobilmu." },
  { icon: Activity, title: "Diagnostik Mesin", description: "Lampu check engine menyala? Kami baca sistem elektroniknya dan lacak sumber masalah, bukan cuma menghapus kodenya." },
  { icon: Settings2, title: "Transmisi & Mechatronic", description: "Perpindahan gigi kasar atau menyentak? Kami periksa dan perbaiki mechatronic dengan prosedur yang terukur." },
  { icon: AirVent, title: "AC & Kelistrikan", description: "AC kurang dingin, sensor ngambek, modul error? Kami telusuri satu per satu sampai tuntas." },
  { icon: Gauge, title: "Peningkatan Performa", description: "Respons lebih galak, handling lebih mantap, tetap aman untuk mesinmu." },
] as const;

export const navItems = [
  { to: "/", label: "Beranda" },
  { to: "/layanan", label: "Layanan" },
  { to: "/sparepart", label: "Sparepart" },
  { to: "/tentang", label: "Tentang" },
  { to: "/booking", label: "Booking" },
  { to: "/kontak", label: "Kontak" },
] as const;

export const mechatronicPerks = [
  { icon: ShieldCheck, title: "Garansi 1 Tahun", description: "Tenang setelah pemasangan, ada jaminan dari kami." },
  { icon: Truck, title: "Free Towing Jabodetabek", description: "Mobil mogok dan tidak bisa jalan? Kami jemput gratis." },
  { icon: Droplets, title: "Free Oli Mechatronic", description: "Sudah termasuk, tanpa biaya tambahan." },
  { icon: FlaskConical, title: "Free Oli Gearbox Racikan Kami", description: "Diformulasikan khusus agar cocok dengan iklim dan kondisi jalan di Indonesia." },
  { icon: BadgeCheck, title: "Komponen Genuine", description: "Bukan barang imitasi, kualitasnya bisa dipertanggungjawabkan." },
] as const;

export const spareparts = [
  {
    label: "MECHATRONIC",
    name: "Mechatronic Volkswagen Polo, Golf MK6, Golf MK7, Scirocco & Tiguan",
    price: "Rp12.000.000",
    href: "https://tk.tokopedia.com/ZSp8uMKSV/",
  },
  {
    label: "SHIFTER",
    name: "Shifter Volkswagen Golf MK5, MK6 & MK7",
    price: "Rp10.000.000",
    href: "https://tk.tokopedia.com/ZSp8uN8pU/",
  },
  {
    label: "RACKSTEER",
    name: "Racksteer Volkswagen Tiguan Allspace",
    price: "Rp18.000.000",
    href: "https://tk.tokopedia.com/ZSp8u8wuQ/",
  },
] as const;
