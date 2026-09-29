import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, BadgeCheck, PackageCheck, ShieldCheck, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { spareparts, TOKOPEDIA_URL, WHATSAPP_PRIMARY } from "@/lib/site-data";

export const Route = createFileRoute("/sparepart")({
  head: () => ({
    meta: [
      { title: "Harga Sparepart Volkswagen — Tokopedia AXCMotora" },
      { name: "description", content: "Lihat pilihan dan harga sparepart Volkswagen dari AXCMotora Tangerang, lalu beli langsung melalui Tokopedia." },
      { property: "og:title", content: "Sparepart Volkswagen — AXCMotora" },
      { property: "og:description", content: "Mechatronic, shifter, dan racksteer Volkswagen pilihan tersedia melalui toko Tokopedia AXCMotora." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SparepartPage,
});

function SparepartPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="AXCMotora Parts"
        title="Sparepart pilihan, tersedia melalui Tokopedia."
        description="Temukan komponen Volkswagen pilihan dengan transaksi langsung melalui toko resmi AXCMotora di Tokopedia."
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-24">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-kicker">Katalog Pilihan</p>
              <h2 className="section-title mt-3">Komponen spesialis Volkswagen.</h2>
            </div>
            <Button variant="outline" asChild>
              <a href={TOKOPEDIA_URL} target="_blank" rel="noreferrer">
                <ShoppingBag /> Lihat Seluruh Toko <ArrowUpRight />
              </a>
            </Button>
          </div>

          <div className="grid gap-px overflow-hidden border border-border bg-border lg:grid-cols-3">
            {spareparts.map((part, index) => (
              <article key={part.name} className="flex min-h-[360px] flex-col bg-card p-7 lg:p-9">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-12 place-items-center border border-border bg-surface-subtle text-primary">
                    <PackageCheck className="size-6" />
                  </span>
                  <span className="font-display text-xs text-muted-foreground">0{index + 1}</span>
                </div>
                <p className="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{part.code}</p>
                <h2 className="mt-3 font-display text-2xl font-semibold leading-tight">{part.name}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">Kompatibel untuk {part.compatibility}.</p>
                <div className="mt-auto pt-8">
                  <p className="text-xs text-muted-foreground">Harga Tokopedia</p>
                  <p className="mt-1 font-display text-2xl font-semibold">{part.price}</p>
                  <Button className="mt-5 w-full" asChild>
                    <a href={part.href} target="_blank" rel="noreferrer">Lihat di Tokopedia <ArrowUpRight /></a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-5 text-xs leading-5 text-muted-foreground">Harga dan ketersediaan dapat berubah. Informasi terbaru mengikuti halaman produk di Tokopedia AXCMotora.</p>
        </div>
      </section>

      <section className="bg-surface-subtle">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 lg:px-6 lg:py-20">
          <div className="flex gap-4"><BadgeCheck className="mt-1 size-6 shrink-0 text-primary" /><div><h2 className="font-display text-xl font-semibold">Pastikan kecocokan komponen.</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">Konfirmasikan model, tahun, dan detail kendaraan sebelum membeli agar sparepart sesuai.</p></div></div>
          <div className="flex gap-4"><ShieldCheck className="mt-1 size-6 shrink-0 text-primary" /><div><h2 className="font-display text-xl font-semibold">Butuh bantuan memilih?</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">Tim AXCMotora siap membantu memeriksa kecocokan sparepart melalui WhatsApp.</p><a href={`https://wa.me/${WHATSAPP_PRIMARY}?text=${encodeURIComponent("Halo AxcMotora, saya ingin konsultasi kecocokan sparepart untuk kendaraan saya.")}`} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-foreground">Konsultasi sparepart <ArrowUpRight className="size-4" /></a></div></div>
        </div>
      </section>
    </SiteShell>
  );
}