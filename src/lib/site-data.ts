import { Activity, AirVent, Gauge, Settings2, Wrench } from "lucide-react";

export const WHATSAPP_PRIMARY = "6281399020252";
export const WHATSAPP_SECONDARY = "6281779860888";
export const ADDRESS = "Perumahan Taman Jaya Blok C4 No. 16, Tangerang, Banten, Indonesia";
export const HOURS = "Senin - Sabtu, 08:30 - 17:00 WIB";
export const INSTAGRAM_URL = "https://www.instagram.com/AxcMotora";
export const TOKOPEDIA_URL = "https://www.tokopedia.com/axcmotora";

export const services = [
  { icon: Wrench, title: "Perawatan Berkala & Tune-up", description: "Perawatan presisi sesuai karakter kendaraan, dari inspeksi menyeluruh hingga penyetelan performa harian." },
  { icon: Activity, title: "Diagnostik Mesin Lanjutan", description: "Pembacaan sistem elektronik dan analisis akar masalah dengan perangkat diagnostik spesialis Eropa." },
  { icon: Settings2, title: "Transmisi & Mechatronic", description: "Pemeriksaan dan perbaikan transmisi serta sistem mechatronic dengan prosedur yang terukur." },
  { icon: AirVent, title: "AC & Kelistrikan", description: "Penelusuran gangguan AC, sensor, modul, dan jaringan kelistrikan secara sistematis." },
  { icon: Gauge, title: "Peningkatan Performa", description: "Optimasi respons, handling, dan performa yang disesuaikan dengan kondisi serta kebutuhan kendaraan." },
] as const;

export const navItems = [
  { to: "/", label: "Beranda" },
  { to: "/layanan", label: "Layanan" },
  { to: "/sparepart", label: "Sparepart" },
  { to: "/tentang", label: "Tentang" },
  { to: "/booking", label: "Booking" },
  { to: "/kontak", label: "Kontak" },
] as const;

export const spareparts = [
  {
    name: "Mechatronic Volkswagen",
    compatibility: "Polo, Golf MK6, Golf MK7, Scirocco & Tiguan",
    price: "Rp12.000.000",
    href: `${TOKOPEDIA_URL}/mechatronic-volkswagen-polo-mk6-mk7-scirocco-tiguan`,
    code: "DSG / MECHA",
  },
  {
    name: "Shifter Volkswagen Golf",
    compatibility: "Golf MK5, Golf MK6 & Golf MK7",
    price: "Rp10.000.000",
    href: `${TOKOPEDIA_URL}/shifter-vw-golf-mk5-mk6-mk7-scirocco`,
    code: "GEAR SELECTOR",
  },
  {
    name: "Racksteer Volkswagen Tiguan",
    compatibility: "Tiguan Allspace",
    price: "Rp18.000.000",
    href: `${TOKOPEDIA_URL}/racksteer-vw-tiguan-all-space`,
    code: "STEERING",
  },
] as const;
