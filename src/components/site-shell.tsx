import { Link } from "@tanstack/react-router";
import { Clock3, Instagram, MapPin, Menu, MessageCircle, Phone, Wrench, X } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ADDRESS, HOURS, INSTAGRAM_URL, navItems, WHATSAPP_PRIMARY, WHATSAPP_SECONDARY } from "@/lib/site-data";

const wa = (number: string) => `https://wa.me/${number}`;

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return <Link to="/" className="flex items-center gap-3" aria-label="AxcMotora beranda">
    <span className="grid size-9 place-items-center border border-primary bg-primary text-primary-foreground"><Wrench className="size-4" /></span>
    <span><span className="block font-display text-lg font-semibold leading-none">Axc<span className="text-primary">Motora</span></span>{!compact && <span className="mt-1 hidden text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:block">European Auto Specialist</span>}</span>
  </Link>;
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return <div className="min-h-screen bg-background text-foreground">
    <div className="border-b border-border bg-surface-subtle px-4 py-2 text-xs text-muted-foreground">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2">
        <span className="flex items-center gap-2"><MapPin className="size-3.5 text-primary" /> Tangerang, Banten</span>
        <span className="flex items-center gap-2"><Clock3 className="size-3.5 text-primary" /> {HOURS}</span>
        <a href={wa(WHATSAPP_PRIMARY)} target="_blank" rel="noreferrer" className="hidden items-center gap-2 transition-colors hover:text-foreground md:flex"><Phone className="size-3.5 text-primary" /> +62 813-9902-0252</a>
      </div>
    </div>
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-6">
        <BrandMark />
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Navigasi utama">{navItems.map(item => <Link key={item.to} to={item.to} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-primary" }}>{item.label}</Link>)}</nav>
        <div className="hidden items-center gap-3 lg:flex"><Button variant="ghost" asChild><Link to="/auth">Area Staf</Link></Button><Button asChild><Link to="/booking">Booking Servis</Link></Button></div>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Buka menu" aria-expanded={open} aria-controls="mobile-drawer" onClick={() => setOpen(true)}><Menu /></Button>
      </div>
    </header>
    <div id="mobile-drawer" className={`fixed inset-0 z-[60] lg:hidden ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
      <div
        className={`absolute inset-0 bg-modal-backdrop transition-opacity duration-300 ease-out ${open ? "opacity-100" : "opacity-0"}`}
        onClick={() => setOpen(false)}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi"
        className={`absolute right-0 top-0 flex h-full w-[20rem] max-w-[85vw] flex-col border-l border-border bg-background shadow-2xl transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <BrandMark compact />
          <Button ref={closeRef} variant="ghost" size="icon" aria-label="Tutup menu" onClick={() => setOpen(false)}><X className="size-5" /></Button>
        </div>
        <nav className="flex-1 overflow-y-auto px-5 py-4" aria-label="Navigasi ponsel">
          {navItems.map(item => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block border-b border-border py-4 font-display text-base font-medium transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/auth" onClick={() => setOpen(false)} className="block border-b border-border py-4 text-sm text-muted-foreground transition-colors hover:text-foreground">Area Staf</Link>
        </nav>
        <div className="space-y-3 border-t border-border px-5 py-5">
          <Button asChild className="w-full"><Link to="/booking" onClick={() => setOpen(false)}>Booking Servis</Link></Button>
          <div className="flex items-center justify-between pt-1 text-sm">
            <a href={wa(WHATSAPP_PRIMARY)} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"><MessageCircle className="size-4 text-primary" /> +62 813-9902-0252</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram AxcMotora" className="text-muted-foreground transition-colors hover:text-foreground"><Instagram className="size-4" /></a>
          </div>
          <p className="flex items-center gap-2 text-xs text-muted-foreground"><MapPin className="size-3.5 shrink-0 text-primary" /> {ADDRESS}</p>
        </div>
      </aside>
    </div>
    <main>{children}</main>
    <footer className="border-t border-border bg-surface-subtle">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[1.2fr_1fr_1fr] lg:px-6">
        <div><BrandMark /><p className="mt-5 max-w-md text-sm leading-6 text-muted-foreground">Spesialis servis, diagnostik, dan tuning Volkswagen, Audi & Mini Cooper di Tangerang.</p></div>
        <div><h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Kunjungi Kami</h2><p className="mt-4 text-sm leading-6 text-muted-foreground">{ADDRESS}</p><p className="mt-3 text-sm text-muted-foreground">{HOURS}</p></div>
        <div><h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Hubungi</h2><div className="mt-4 space-y-3 text-sm"><a className="block text-muted-foreground hover:text-foreground" href={wa(WHATSAPP_PRIMARY)} target="_blank" rel="noreferrer">+62 813-9902-0252</a><a className="block text-muted-foreground hover:text-foreground" href={wa(WHATSAPP_SECONDARY)} target="_blank" rel="noreferrer">+62 817-7986-0888</a><a className="flex items-center gap-2 text-muted-foreground hover:text-foreground" href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><Instagram className="size-4" /> @AxcMotora</a></div></div>
      </div>
      <div className="border-t border-border px-4 py-5 text-center text-xs text-muted-foreground">© 2026 AxcMotora. Spesialis kendaraan Eropa di Tangerang.</div>
    </footer>
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-2 sm:right-6"><Button size="icon" className="size-12 rounded-full shadow-xl" asChild><a href={wa(WHATSAPP_PRIMARY)} target="_blank" rel="noreferrer" aria-label="Chat WhatsApp"><MessageCircle className="size-5" /></a></Button><Button size="icon" variant="secondary" className="size-12 rounded-full shadow-xl" asChild><Link to="/booking" aria-label="Booking servis"><Wrench className="size-5" /></Link></Button></div>
  </div>;
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="border-b border-border bg-surface-subtle"><div className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-24"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">{eyebrow}</p><h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-6xl">{title}</h1><p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">{description}</p></div></section>;
}
