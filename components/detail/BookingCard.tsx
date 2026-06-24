"use client";

import { useState } from "react";
import { formatPrice } from "@/lib/listings";

type BookingCardProps = {
  pricePerNight: number;
  rating: number;
  reviews: number;
  maxGuests: number;
};

const BookingCard = ({
  pricePerNight,
  rating,
  reviews,
  maxGuests,
}: BookingCardProps) => {
  const minGuests = 1;
  const [guestCount, setGuestCount] = useState(minGuests);
  const [isReserved, setIsReserved] = useState(false);

  const decreaseGuests = () => {
    setGuestCount((prev) => Math.max(minGuests, prev - 1));
  };

  const increaseGuests = () => {
    setGuestCount((prev) => Math.min(maxGuests, prev + 1));
  };

  const handleReserve = () => {
    setIsReserved(true);
  };

  return (
    <aside className="rounded-3xl border border-black/10 bg-white p-5 shadow-sm md:sticky md:top-24">
      <p className="text-xl font-bold text-[#1f2630]">
        {formatPrice(pricePerNight)}
        <span className="text-sm font-medium text-[#5f6b7b]"> por noche</span>
      </p>

      <p className="mt-1 text-sm text-[#5f6b7b]">
        ★ {rating.toFixed(2)} ({reviews} resenas)
      </p>

      <div className="mt-4 rounded-2xl border border-black/10 p-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#708094]">Huespedes</p>
        <div className="mt-2 flex items-center justify-between">
          <button
            onClick={decreaseGuests}
            disabled={guestCount <= minGuests}
            className="h-8 w-8 rounded-full border border-black/10 text-sm disabled:opacity-40"
          >
            -
          </button>
          <p className="text-sm font-semibold text-[#1f2630]">{guestCount}</p>
          <button
            onClick={increaseGuests}
            disabled={guestCount >= maxGuests}
            className="h-8 w-8 rounded-full border border-black/10 text-sm disabled:opacity-40"
          >
            +
          </button>
        </div>
        <p className="mt-2 text-xs text-[#5f6b7b]">Maximo permitido: {maxGuests}</p>
      </div>

      <button
        onClick={handleReserve}
        className="mt-5 w-full rounded-xl bg-[#e31c5f] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-95"
      >
        {isReserved ? "Reserva confirmada" : "Reservar ahora"}
      </button>

      <p className="mt-3 text-center text-xs text-[#6a7586]">
        {isReserved ? "Te enviamos los detalles de tu reserva." : "No se cobrara nada todavia"}
      </p>
    </aside>
  );
};

export default BookingCard;
