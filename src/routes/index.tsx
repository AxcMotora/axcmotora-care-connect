import { createFileRoute, Link } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Activity,
  AirVent,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  Droplets,
  FlaskConical,
  Gauge,
  Instagram,
  MapPin,
  MessageCircle,
  Package,
  Quote,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  Truck,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { SiteShell } from "@/components/site-shell";
import { ADDRESS, INSTAGRAM_URL, spareparts, TOKOPEDIA_URL, WHATSAPP_PRIMARY } from "@/lib/site-data";
import heroImage from "@/assets/axcmotora-workshop.jpg";
import diagnosticImage from "@/assets/axcmotora-diagnostics.jpg";

export const Route = createFileRoute("/")({ head: () => ({ meta: [{ title: "AxcMotora — Bengkel Spesialis VW, Audi & Mini Cooper Tangerang" }, { name: "description", content: "Bengkel spesialis Volkswagen, Audi dan Mini Cooper di Tangerang: diagnostik, servis, transmisi & mechatronic, kelistrikan, hingga refurbish mechatronic bergaransi 1 tahun." }, { property: "og:title", content: "AxcMotora — Bengkel Spesialis Eropa Tangerang" }, { property: "og:description", content: "Mobil Eropa-mu layak dipegang ahlinya. Diagnosis dulu sampai ketemu akar masalahnya, baru bertindak." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }), component: HomePage });

const homeServices = [
  { icon: Wrench, title: "Servis Berkala & Tune-up", description: "Biar mesin tetap enak dan awet. Kami cek menyeluruh dan setel sesuai karakter mobilmu." },
  { icon: Activity, title: "Diagnostik Mesin", description: "Lampu check engine menyala? Kami baca sistem elektroniknya dan lacak sumber masalah, bukan cuma menghapus kodenya." },
  { icon: Settings2, title: "Transmisi & Mechatronic", description: "Perpindahan gigi kasar atau menyentak? Kami periksa dan perbaiki DSG/mechatronic dengan prosedur yang terukur." },
  { icon: AirVent, title: "AC & Kelistrikan", description: "AC kurang dingin, sensor ngambek, modul error? Kami telusuri satu per satu sampai tuntas." },
  { icon: Gauge, title: "Peningkatan Performa", description: "Respons lebih galak, handling lebih mantap, tetap aman untuk mesinmu." },
] as const;

const mechatronicPerks = [
  { icon: ShieldCheck, title: "Garansi 1 Tahun", description: "Tenang setelah pemasangan, ada jaminan dari kami." },
  { icon: Truck, title: "Free Towing Jabodetabek", description: "Mobil mogok dan tidak bisa jalan? Kami jemput gratis." },
  { icon: Droplets, title: "Free Oli Mechatronic", description: "Sudah termasuk, tanpa biaya tambahan." },
  { icon: FlaskConical, title: "Free Oli Gearbox Racikan Kami", description: "Diformulasikan khusus agar cocok dengan iklim dan kondisi jalan di Indonesia." },
  { icon: BadgeCheck, title: "Komponen Genuine", description: "Bukan barang imitasi, kualitasnya bisa dipertanggungjawabkan." },
] as const;

const testimonials = [
  { name: "Budi", car: "Golf MK7", quote: "Kasarnya hilang setelah mechatronic di-refurbish. Diagnosisnya jelas, pengerjaannya rapi, dan garansinya jadi nilai plus." },
  { name: "Sari", car: "Mini Cooper", quote: "Check engine sudah lama menyala, di sini akhirnya ketemu sumber masalahnya. Penjelasannya detail, tanpa tebak-tebakan." },
  { name: "Andi", car: "Audi A4", quote: "Komunikasinya enak, estimasi dijelaskan dulu sebelum pengerjaan. Hasil servisnya memuaskan." },
] as const;

const faqs = [
  { question: "Apakah harus booking dulu?", answer: "Disarankan, supaya mobilmu bisa langsung ditangani tanpa antre lama." },
  { question: "Bisa konsultasi dulu sebelum datang?", answer: "Bisa, langsung chat WhatsApp kami." },
  { question: "Mobil apa saja yang ditangani?", answer: "Volkswagen, Audi, dan Mini Cooper." },
  { question: "Ada estimasi biaya sebelum pengerjaan?", answer: "Ada, setelah diagnosis kami jelaskan dulu sebelum lanjut." },
  { question: "Mobil saya tidak bisa jalan sama sekali, bagaimana?", answer: "Kami sediakan free towing untuk wilayah Jabodetabek." },
  { question: "Garansi mechatronic berapa lama?", answer: "1 tahun untuk mechatronic refurbish yang dipasang di AxcMotora." },
  { question: "Oli apa yang dipakai?", answer: "Oli mechatronic dan oli gearbox racikan kami, dirancang untuk iklim Indonesia." },
] as const;

function HomePage() { return <SiteShell>
  {/* HERO */}
  <section className="relative overflow-hidden border-b border-border bg-surface-subtle">
    <img src={heroImage} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-15 lg:hidden" />
    <div className="absolute inset-0 bg-hero-overlay lg:hidden" aria-hidden="true" />
    <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 lg:min-h-[720px] lg:grid-cols-[0.9fr_1.1fr] lg:px-6 lg:py-20">
      <Reveal className="relative z-10">
        <div className="inline-flex items-center gap-3 border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-bold uppercase text-primary"><span className="size-2 animate-status-pulse bg-primary" /> Bengkel Spesialis Eropa • Tangerang</div>
        <h1 className="mt-8 max-w-3xl font-display text-5xl leading-[0.98] md:text-7xl lg:text-[5.25rem]">Mobil Eropa-mu Layak Dipegang <span className="text-primary">Ahlinya.</span></h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">VW, Audi, dan Mini Cooper punya karakter sendiri. Kami diagnosis dulu sampai ketemu akar masalahnya, baru bertindak. Tanpa tebak-tebakan, tanpa biaya kejutan.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button size="lg" asChild><Link to="/booking">Booking Servis Sekarang <ArrowRight /></Link></Button><Button size="lg" variant="outline" asChild><a href={`https://wa.me/${WHATSAPP_PRIMARY}`} target="_blank" rel="noreferrer"><MessageCircle /> Tanya Langsung via WhatsApp</a></Button></div>
        <div className="mt-10 grid grid-cols-3 border-y border-border py-5 text-center sm:text-left"><div><p className="font-display text-xl text-foreground">Paham VW</p><p className="mt-1 text-xs uppercase text-muted-foreground">Volkswagen</p></div><div className="border-x border-border px-4"><p className="font-display text-xl text-foreground">Paham Audi</p><p className="mt-1 text-xs uppercase text-muted-foreground">Audi</p></div><div className="pl-4"><p className="font-display text-xl text-foreground">Paham Mini</p><p className="mt-1 text-xs uppercase text-muted-foreground">Mini Cooper</p></div></div>
        <div className="mt-4 flex flex-wrap gap-3"><span className="inline-flex items-center gap-2 border border-primary/40 bg-primary/10 px-3 py-2 text-xs font-bold uppercase text-primary"><ShieldCheck className="size-3.5" /> Refurbish Mechatronic Bergaransi 1 Tahun</span><span className="inline-flex items-center gap-2 border border-border bg-background px-3 py-2 text-xs font-bold uppercase text-muted-foreground"><Truck className="size-3.5 text-primary" /> Free Towing Jabodetabek</span></div>
      </Reveal>
      <Reveal delay={120} className="relative">
        <div className="absolute -inset-4 border border-primary/20" aria-hidden="true" />
        <div className="group relative border border-border bg-card p-3"><div className="relative overflow-hidden"><img src={heroImage} alt="Workshop spesialis AxcMotora dengan kendaraan Eropa" width={1920} height={1088} className="aspect-[4/3] w-full object-cover opacity-80 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100" /><div className="absolute inset-0 bg-hero-overlay" /><div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 gap-px bg-border"><div className="bg-background/90 p-4 backdrop-blur-md"><ShieldCheck className="size-5 text-primary" /><p className="mt-2 text-xs font-bold uppercase">Diagnosis Akurat</p></div><div className="bg-background/90 p-4 backdrop-blur-md"><Wrench className="size-5 text-primary" /><p className="mt-2 text-xs font-bold uppercase">Ditangani Spesialis</p></div></div></div></div>
      </Reveal>
    </div>
  </section>
  {/* LAYANAN */}
  <section className="border-b border-border"><div className="mx-auto max-w-7xl px-4 py-20 lg:px-6 lg:py-28"><Reveal className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-end"><div><p className="section-kicker">Layanan</p><h2 className="section-title">Dari Cek Rutin<br />Sampai Bedah Transmisi.</h2></div><div className="flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-end"><p className="section-copy mt-0">Apa pun keluhan mobil Eropa-mu, ada tangan yang tahu harus mulai dari mana.</p><Button variant="outline" asChild><Link to="/layanan">Lihat Semua Layanan <ArrowRight /></Link></Button></div></Reveal><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">{homeServices.map((service, index) => <Reveal key={service.title} delay={index * 90} className={index < 2 ? "lg:col-span-3" : "lg:col-span-2"}><article className="group relative h-full min-h-64 overflow-hidden border border-border bg-card p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/70"><span className="absolute right-5 top-4 font-display text-4xl text-foreground/5">0{index + 1}</span><service.icon className="size-7 text-primary" /><h3 className="mt-12 max-w-xs font-display text-xl leading-tight">{service.title}</h3><p className="mt-4 text-sm leading-6 text-muted-foreground">{service.description}</p><div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" /></article></Reveal>)}</div></div></section>
  {/* REFURBISH MECHATRONIC */}
  <section className="border-b border-border bg-surface-subtle"><div className="mx-auto max-w-7xl px-4 py-20 lg:px-6 lg:py-28"><Reveal className="max-w-3xl"><p className="section-kicker">Layanan Unggulan</p><h2 className="section-title">Mechatronic Bermasalah?<br />Hidupkan Lagi, Bukan Ganti Baru.</h2><p className="section-copy">Refurbish mechatronic genuine untuk VW kesayanganmu, dipasang langsung di bengkel AxcMotora dengan garansi 1 tahun.</p><p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-bold uppercase tracking-widest text-foreground">Golf MK5, MK6, MK7 <span className="text-primary">•</span> Touran <span className="text-primary">•</span> Tiguan <span className="text-primary">•</span> Polo 1.2 & 1.4 <span className="text-primary">•</span> Scirocco</p></Reveal><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{mechatronicPerks.map((perk, index) => <Reveal key={perk.title} delay={index * 90} className="h-full"><article className="flex h-full flex-col border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/70"><perk.icon className="size-7 text-primary" /><h3 className="mt-6 font-display text-lg leading-tight">{perk.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{perk.description}</p></article></Reveal>)}</div><Reveal delay={120} className="mt-10 flex flex-col items-start gap-5 border border-primary/30 bg-primary/10 p-6 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm font-bold uppercase">Paket selengkapnya ini, dengan harga yang kami yakini paling bersaing.</p><div className="flex flex-wrap gap-3"><Button asChild><a href={`https://wa.me/${WHATSAPP_PRIMARY}`} target="_blank" rel="noreferrer"><MessageCircle /> Konsultasi Mechatronic via WhatsApp</a></Button><Button variant="outline" asChild><Link to="/booking">Booking Pemasangan <ArrowRight /></Link></Button></div></Reveal></div></section>
  {/* PROSES */}
  <section className="border-b border-border"><div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-6 lg:py-28"><Reveal className="relative"><div className="absolute -bottom-4 -left-4 size-24 border-b-2 border-l-2 border-primary" /><img src={diagnosticImage} alt="Teknisi AxcMotora melakukan diagnostik kendaraan" loading="lazy" width={1408} height={1008} className="relative aspect-[7/5] w-full border border-border object-cover" /></Reveal><Reveal delay={140}><p className="section-kicker">Proses AxcMotora</p><h2 className="section-title">Diagnosis Dulu, Baru Tindakan.</h2><p className="section-copy">Kamu tahu apa yang dikerjakan, kenapa, dan berapa biayanya, sebelum kami mulai.</p><ul className="mt-8 divide-y divide-border border-y border-border">{["Alat diagnostik khusus mobil Eropa", "Teknisi fokus di VW, Audi & Mini Cooper", "Ngobrol langsung dengan tim bengkel, tanpa perantara"].map(item => <li key={item} className="flex items-center gap-3 py-4 text-sm font-semibold uppercase"><CheckCircle2 className="size-4 shrink-0 text-primary" />{item}</li>)}</ul></Reveal></div></section>
  {/* INFO BENGKEL */}
  <section className="border-b border-border"><div className="mx-auto max-w-7xl px-4 py-20 lg:px-6 lg:py-24"><Reveal><p className="section-kicker">Info Bengkel</p><h2 className="section-title">Mampir ke Bengkel Kami.</h2></Reveal><div className="mt-10 grid gap-px border border-border bg-border md:grid-cols-3">{[
    { icon: MapPin, title: "Workshop Tangerang", body: ADDRESS, cta: "Lihat kontak", href: undefined, internal: true },
    { icon: Clock3, title: "Jam Buka", body: "Senin–Sabtu, 08:30–17:00 WIB\nMinggu libur", cta: "Minggu libur", href: undefined, internal: false },
    { icon: Instagram, title: "@AxcMotora", body: "Intip proyek terbaru kami di @AxcMotora.", cta: "Lihat Instagram", href: INSTAGRAM_URL, internal: false },
  ].map((card, index) => <Reveal key={card.title} delay={index * 100} className="h-full">{card.internal ? <Link to="/kontak" className="group flex h-full flex-col bg-card p-8 transition-colors hover:bg-surface-subtle"><card.icon className="size-6 text-primary" /><h3 className="mt-6 font-display text-2xl">{card.title}</h3><p className="mt-4 text-sm leading-6 text-muted-foreground">{card.body}</p><span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-bold uppercase text-primary">{card.cta} <ArrowRight className="transition-transform group-hover:translate-x-1" /></span></Link> : card.href ? <a href={card.href} target="_blank" rel="noreferrer" className="group flex h-full flex-col bg-card p-8 transition-colors hover:bg-surface-subtle"><card.icon className="size-6 text-primary" /><h3 className="mt-6 font-display text-2xl">{card.title}</h3><p className="mt-4 text-sm leading-6 text-muted-foreground">{card.body}</p><span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-bold uppercase text-primary">{card.cta} <ArrowRight className="transition-transform group-hover:translate-x-1" /></span></a> : <div className="flex h-full flex-col bg-card p-8"><card.icon className="size-6 text-primary" /><h3 className="mt-6 font-display text-2xl">{card.title}</h3><p className="mt-4 whitespace-pre-line text-sm leading-6 text-muted-foreground">{card.body}</p><p className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-bold uppercase text-muted-foreground">{card.cta}</p></div>}</Reveal>)}</div></div></section>
  {/* SPAREPART */}
  <section className="border-b border-border bg-surface-subtle"><div className="mx-auto max-w-7xl px-4 py-20 lg:px-6 lg:py-24"><Reveal className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-end"><div><p className="section-kicker">Sparepart AxcMotora</p><h2 className="section-title">Sparepart Pilihan,<br />Langsung dari Bengkel.</h2></div><p className="section-copy">Butuh komponen penting untuk VW-mu? Cek stok di toko resmi kami di Tokopedia.</p></Reveal><div className="mt-10 grid gap-3 md:grid-cols-3">{spareparts.map((part, index) => <Reveal key={part.name} delay={index * 90} className="h-full"><a href={part.href} target="_blank" rel="noreferrer" className="group flex h-full flex-col border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/70"><div className="flex items-center justify-between"><span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">{part.code}</span><Package className="size-5 text-primary" /></div><h3 className="mt-6 font-display text-lg leading-tight">{part.name}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{part.compatibility}</p><div className="mt-auto pt-6"><p className="font-display text-2xl text-primary">{part.price}</p><span className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase text-primary">Cek di Tokopedia <ArrowRight className="transition-transform group-hover:translate-x-1" /></span></div></a></Reveal>)}</div><Reveal delay={120} className="mt-10 flex flex-col items-start gap-5 border border-primary/30 bg-primary/10 p-6 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm font-bold uppercase">Lihat katalog lengkap di profil toko Tokopedia AxcMotora</p><div className="flex flex-wrap gap-3"><Button asChild><a href={TOKOPEDIA_URL} target="_blank" rel="noreferrer"><ShoppingBag /> Tokopedia AxcMotora</a></Button><Button variant="outline" asChild><a href={TOKOPEDIA_URL} target="_blank" rel="noreferrer">Lihat katalog lengkap <ArrowRight /></a></Button></div></Reveal></div></section>
  {/* TESTIMONI */}
  <section className="border-b border-border"><div className="mx-auto max-w-7xl px-4 py-20 lg:px-6 lg:py-24"><Reveal><p className="section-kicker">Testimoni</p><h2 className="section-title">Kata Mereka yang Sudah Percaya.</h2></Reveal><div className="mt-10 grid gap-3 md:grid-cols-3">{testimonials.map((item, index) => <Reveal key={item.name} delay={index * 90} className="h-full"><figure className="flex h-full flex-col border border-border bg-card p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/70"><Quote className="size-6 text-primary" /><blockquote className="mt-6 flex-1 text-sm leading-7 text-muted-foreground">“{item.quote}”</blockquote><figcaption className="mt-6 border-t border-border pt-4"><p className="font-display text-base">{item.name}</p><p className="mt-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">{item.car}</p></figcaption></figure></Reveal>)}</div></div></section>
  {/* FAQ */}
  <section className="border-b border-border bg-surface-subtle"><div className="mx-auto max-w-4xl px-4 py-20 lg:px-6 lg:py-24"><Reveal className="text-center"><p className="section-kicker">FAQ</p><h2 className="section-title">Yang Sering Ditanyakan.</h2></Reveal><Reveal delay={120}><Accordion type="single" collapsible className="mt-10">{faqs.map((faq, index) => <AccordionItem key={faq.question} value={`faq-${index}`} className="border-border"><AccordionTrigger className="text-left font-display text-base hover:text-primary hover:no-underline">{faq.question}</AccordionTrigger><AccordionContent className="text-sm leading-7 text-muted-foreground">{faq.answer}</AccordionContent></AccordionItem>)}</Accordion></Reveal></div></section>
  {/* CTA PENUTUP */}
  <section className="border-b border-border bg-primary"><div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-6 lg:py-20"><Reveal><h2 className="font-display text-4xl leading-tight text-primary-foreground md:text-5xl">Mobilmu Bunyi Aneh? Jangan Ditunda.</h2><p className="mt-5 text-base leading-7 text-primary-foreground/80">Makin cepat dicek, makin kecil biaya perbaikannya.</p><div className="mt-9 flex justify-center"><Button size="lg" variant="secondary" asChild><Link to="/booking">Booking Servis <ArrowRight /></Link></Button></div></Reveal></div></section>
</SiteShell>; }
