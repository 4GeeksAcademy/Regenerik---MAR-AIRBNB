"use client";

import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import type { Listing } from "@/types/listing";
import { formatPrice } from "@/lib/listings";

const pinIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

type LeafletMapProps = {
  items: Listing[];
};

const LeafletMap = ({ items }: LeafletMapProps) => {
  if (items.length === 0) {
    return (
      <div className="flex h-56 items-center justify-center rounded-2xl border border-dashed border-black/20 bg-[#dfe5ec] text-base font-semibold text-[#536074] lg:h-[calc(100vh-12rem)]">
        No hay alojamientos para mostrar en el mapa
      </div>
    );
  }

  const center = items[0]?.coordinates ?? { lat: -34.901, lng: -56.164 };

  return (
    <MapContainer
      center={[center.lat, center.lng]}
      zoom={7}
      scrollWheelZoom
      className="h-56 w-full rounded-2xl lg:h-[calc(100vh-12rem)]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {items.map((listing) => (
        <Marker
          key={listing.id}
          position={[listing.coordinates.lat, listing.coordinates.lng]}
          icon={pinIcon}
        >
          <Popup>
            <p className="text-sm font-semibold">{listing.title}</p>
            <p className="text-xs text-[#5f6b7b]">{listing.location}</p>
            <p className="text-xs">{formatPrice(listing.pricePerNight)} por noche</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default LeafletMap;
