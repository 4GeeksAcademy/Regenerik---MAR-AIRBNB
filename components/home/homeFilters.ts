import type { Listing } from "@/types/listing";

const listingCategoryMap: Record<string, string> = {
  "valle-cielo-01": "Tendencias",
  "mar-luz-02": "Playa",
  "bosque-nube-03": "Cabanas",
  "sol-patio-04": "Mansiones",
  "piedra-atelier-05": "Ciudad",
  "berry-garden-06": "Tendencias",
};

export const getCategoryLabel = (listing: Listing) => {
  return listingCategoryMap[listing.id] ?? "Tendencias";
};

export const filterListings = (
  source: Listing[],
  searchText: string,
  activeCategory: string,
) => {
  const normalizedSearch = searchText.trim().toLowerCase();

  return source.filter((listing) => {
    const matchesSearch =
      normalizedSearch.length === 0 ||
      listing.title.toLowerCase().includes(normalizedSearch) ||
      listing.location.toLowerCase().includes(normalizedSearch);

    const matchesCategory =
      activeCategory === "Todas" || getCategoryLabel(listing) === activeCategory;

    return matchesSearch && matchesCategory;
  });
};
