"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import MainHeader from "@/components/layout/MainHeader";
import BookingCard from "@/components/detail/BookingCard";
import RoomGallery from "@/components/detail/RoomGallery";
import AmenitiesGrid from "@/components/detail/AmenitiesGrid";
import HostInfoCard from "@/components/detail/HostInfoCard";
import DetailLoadingState from "@/components/detail/DetailLoadingState";
import DetailNotFoundState from "@/components/detail/DetailNotFoundState";
import { getListingById } from "@/lib/listings";
import type { Listing } from "@/types/listing";
import { amenityIcons, hostMap } from "@/components/detail/detailConstants";

const RoomDetailPageClient = () => {
  const params = useParams<{ id: string }>();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const [loading, setLoading] = useState(true);
  const [listing, setListing] = useState<Listing | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setListing(id ? getListingById(id) ?? null : null);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  const host = useMemo(() => {
    return listing ? hostMap[listing.id] ?? { name: "Anfitrion", years: 2 } : null;
  }, [listing]);

  if (loading) return <DetailLoadingState />;
  if (!listing || !host) return <DetailNotFoundState />;

  return (
    <div className="min-h-screen pb-8">
      <MainHeader compact />
      <main className="mx-auto w-full max-w-6xl px-4 py-5 md:px-8 md:py-8">
        <Link href="/catalog" className="text-sm font-semibold text-[#5f6b7b] hover:text-[#e31c5f]">
          ← Volver a resultados
        </Link>
        <h1 className="mt-3 text-3xl font-black text-[#1f2630] md:text-4xl">{listing.title}</h1>
        <p className="mt-2 text-sm text-[#5f6b7b]">
          ★ {listing.rating.toFixed(2)} · {listing.reviews} resenas · {listing.location}
        </p>
        <div className="mt-5">
          <RoomGallery images={listing.images} title={listing.title} />
        </div>
        <section className="mt-6 grid gap-6 md:grid-cols-[1.5fr_1fr]">
          <div className="rounded-3xl border border-black/10 bg-white p-5 md:p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#708094]">{listing.hostType}</p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#1f2630]">
              {listing.guests} huespedes · {listing.bedrooms} habitaciones · {listing.baths} banos
            </h2>
            <HostInfoCard hostName={host.name} hostYears={host.years} />
            <p className="mt-4 text-sm leading-relaxed text-[#556173]">{listing.description}</p>
            <AmenitiesGrid amenities={listing.amenities} amenityIcons={amenityIcons} />
          </div>
          <BookingCard
            pricePerNight={listing.pricePerNight}
            rating={listing.rating}
            reviews={listing.reviews}
            maxGuests={listing.guests}
          />
        </section>
      </main>
    </div>
  );
};

export default RoomDetailPageClient;
