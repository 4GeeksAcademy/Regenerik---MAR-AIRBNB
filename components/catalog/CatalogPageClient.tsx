"use client";

import { useMemo, useState } from "react";
import MainHeader from "@/components/layout/MainHeader";
import MobileTabBar from "@/components/layout/MobileTabBar";
import ListingGrid from "@/components/listing/ListingGrid";
import CatalogHeaderSection from "@/components/catalog/CatalogHeaderSection";
import CatalogInteractiveMap from "@/components/catalog/CatalogInteractiveMap";
import { listings } from "@/lib/listings";

type SortDirection = "asc" | "desc";

const CatalogPageClient = () => {
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [activeFilter, setActiveFilter] = useState("Precio");

  const filteredListings = useMemo(() => {
    return listings.filter((listing) => {
      if (activeFilter === "Tipo de lugar") {
        return listing.hostType.includes("entero");
      }

      if (activeFilter === "Habitaciones") {
        return listing.bedrooms >= 2;
      }

      if (activeFilter === "Servicios") {
        return listing.amenities.includes("WiFi") || listing.amenities.includes("Piscina");
      }

      if (activeFilter === "Reserva inmediata") {
        return listing.rating >= 4.85;
      }

      return true;
    });
  }, [activeFilter]);

  const sortedListings = useMemo(() => {
    return [...filteredListings].sort((a, b) => {
      return sortDirection === "asc"
        ? a.pricePerNight - b.pricePerNight
        : b.pricePerNight - a.pricePerNight;
    });
  }, [filteredListings, sortDirection]);

  return (
    <div className="min-h-screen pb-20 md:pb-8">
      <MainHeader compact />

      <main className="mx-auto w-full max-w-6xl px-4 py-5 md:px-8 md:py-8">
        <CatalogHeaderSection
          resultCount={sortedListings.length}
          sortDirection={sortDirection}
          onSortChange={setSortDirection}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <section className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <ListingGrid items={sortedListings} />
          <CatalogInteractiveMap items={sortedListings} />
        </section>
      </main>

      <MobileTabBar />
    </div>
  );
};

export default CatalogPageClient;
