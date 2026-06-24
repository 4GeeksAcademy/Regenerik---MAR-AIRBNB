import ListingCard from "@/components/listing/ListingCard";
import type { Listing } from "@/types/listing";

type ListingGridProps = {
  items: Listing[];
};

const ListingGrid = ({ items }: ListingGridProps) => {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </section>
  );
};

export default ListingGrid;
