import { Activity, AirVent, Gauge, Settings2, Wrench } from "lucide-react";

export const WHATSAPP_PRIMARY = "6281399020252";
export const WHATSAPP_SECONDARY = "6281779860888";
export const ADDRESS = "Perumahan Taman Jaya Blok C4 No. 16, Tangerang, Banten, Indonesia";
export const HOURS = "Senin - Sabtu, 08:30 - 17:00 WIB";
export const INSTAGRAM_URL = "https://www.instagram.com/AxcMotora";

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
  { to: "/tentang", label: "Tentang" },
  { to: "/booking", label: "Booking" },
  { to: "/kontak", label: "Kontak" },
] as const;
