"use client";

import Image from "next/image";
import { useState } from "react";

type RoomGalleryProps = {
  images: string[];
  title: string;
};

const RoomGallery = ({ images, title }: RoomGalleryProps) => {
  const photos = images.length > 0 ? images : ["/next.svg"];
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const previousPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  return (
    <section className="rounded-3xl border border-black/10 bg-white p-3 md:p-4">
      <div className="relative h-56 w-full overflow-hidden rounded-2xl md:h-96">
        <Image
          src={photos[currentPhotoIndex]}
          alt={`${title} - foto ${currentPhotoIndex + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 66vw"
          className="object-cover"
        />
      </div>

      <div className="mt-3 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#708094]">
          Foto {currentPhotoIndex + 1} de {photos.length}
        </p>
        <div className="flex gap-2">
          <button
            onClick={previousPhoto}
            className="rounded-full border border-black/10 px-3 py-1 text-sm font-semibold text-[#2d3440]"
          >
            Anterior
          </button>
          <button
            onClick={nextPhoto}
            className="rounded-full border border-black/10 px-3 py-1 text-sm font-semibold text-[#2d3440]"
          >
            Siguiente
          </button>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-5 gap-2">
        {photos.map((photo, index) => (
          <button
            key={`${photo.slice(0, 40)}-${index}`}
            onClick={() => setCurrentPhotoIndex(index)}
            className={`rounded-xl border p-1 ${
              index === currentPhotoIndex ? "border-[#e31c5f]" : "border-black/10"
            }`}
          >
            <div className="relative h-12 w-full overflow-hidden rounded-lg">
              <Image
                src={photo}
                alt={`${title} miniatura ${index + 1}`}
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default RoomGallery;
