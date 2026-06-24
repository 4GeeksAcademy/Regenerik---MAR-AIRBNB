export type ListingTone = "coral" | "ocean" | "forest" | "sun" | "stone" | "berry";

export type Listing = {
  id: string;
  title: string;
  location: string;
  hostType: string;
  pricePerNight: number;
  rating: number;
  reviews: number;
  guests: number;
  bedrooms: number;
  baths: number;
  amenities: string[];
  description: string;
  tone: ListingTone;
  images: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
};
