"use client";

import dynamic from "next/dynamic";
import type { Listing } from "@/types/listing";

const LeafletMap = dynamic(() => import("@/components/catalog/LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="mt-3 flex h-56 items-center justify-center rounded-2xl border border-dashed border-black/20 bg-[#dfe5ec] text-base font-semibold text-[#536074] lg:h-[calc(100vh-12rem)]">
      Cargando mapa...
    </div>
  ),
});

type CatalogInteractiveMapProps = {
  items: Listing[];
};

const CatalogInteractiveMap = ({ items }: CatalogInteractiveMapProps) => {
  return (
    <aside className="rounded-3xl border border-black/10 bg-[#eef1f5] p-4 lg:sticky lg:top-24">
      <p className="text-xs font-semibold uppercase tracking-wide text-[#5f6b7b]">Mapa interactivo</p>
      <div className="mt-3">
        <LeafletMap items={items} />
      </div>
    </aside>
  );
};

export default CatalogInteractiveMap;
