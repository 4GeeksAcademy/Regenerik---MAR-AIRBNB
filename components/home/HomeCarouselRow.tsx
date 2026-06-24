import ListingCard from "@/components/listing/ListingCard";
import type { Listing } from "@/types/listing";

type HomeCarouselRowProps = {
  title: string;
  subtitle?: string;
  items: Listing[];
};

const HomeCarouselRow = ({ title, subtitle, items }: HomeCarouselRowProps) => {
  return (
    <section>
      <div className="mb-3 flex items-center gap-2">
        <h2 className="text-2xl font-extrabold text-[#1f2630]">{title}</h2>
        <span className="rounded-full bg-[#f1f3f7] px-2 py-1 text-sm">→</span>
      </div>

      {subtitle ? <p className="mb-4 text-sm text-[#5f6b7b]">{subtitle}</p> : null}

      <div className="flex gap-4 overflow-x-auto pb-2">
        {items.map((listing) => (
          <div key={listing.id} className="w-[270px] shrink-0">
            <ListingCard listing={listing} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeCarouselRow;
