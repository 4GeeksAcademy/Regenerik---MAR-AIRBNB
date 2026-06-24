import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/listings";
import type { Listing } from "@/types/listing";

type ListingCardProps = {
  listing: Listing;
};

const ListingCard = ({ listing }: ListingCardProps) => {
  return (
    <article className="group rounded-2xl border border-black/5 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative h-44 w-full overflow-hidden rounded-2xl">
        <Image
          src={listing.images[0]}
          alt={`Foto de ${listing.title}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="mt-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-1 text-sm font-semibold text-[#1f2630] md:text-base">{listing.title}</h3>
          <p className="text-xs font-bold text-[#1f2630]">★ {listing.rating.toFixed(2)}</p>
        </div>

        <p className="mt-1 text-xs text-[#687283] md:text-sm">{listing.location}</p>
        <p className="mt-1 text-xs text-[#687283]">{listing.hostType}</p>

        <p className="mt-2 text-sm font-semibold text-[#1f2630]">
          {formatPrice(listing.pricePerNight)}
          <span className="font-normal text-[#687283]"> por noche</span>
        </p>

        <Link
          href={`/rooms/${listing.id}`}
          className="mt-3 inline-flex rounded-full bg-[#e31c5f] px-3 py-2 text-xs font-semibold text-white"
        >
          Ver detalle
        </Link>
      </div>
    </article>
  );
};

export default ListingCard;
