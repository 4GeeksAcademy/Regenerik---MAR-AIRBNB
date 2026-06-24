import HomeCarouselRow from "@/components/home/HomeCarouselRow";
import type { Listing } from "@/types/listing";

type HomeListingsSectionProps = {
  loading: boolean;
  visibleListings: Listing[];
  filteredCountLabel: string;
};

const HomeListingsSection = ({
  loading,
  visibleListings,
  filteredCountLabel,
}: HomeListingsSectionProps) => {
  const rowA = visibleListings.slice(0, 6);
  const rowB = [...visibleListings].reverse().slice(0, 6);

  return (
    <section className="space-y-8">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-extrabold text-[#1f2630]">Descubre alojamientos en Uruguay</h2>
        <p className="text-xs font-semibold uppercase tracking-wide text-[#708094]">{filteredCountLabel}</p>
      </div>

      {loading ? (
        <div className="rounded-2xl border border-black/10 bg-white p-6 text-sm font-semibold text-[#5e6979]">
          Cargando alojamientos...
        </div>
      ) : null}

      {!loading && visibleListings.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-black/20 bg-white p-6 text-sm text-[#5e6979]">
          No hay resultados con tu busqueda y categoria actual.
        </div>
      ) : null}

      {!loading && visibleListings.length > 0 ? (
        <>
          <HomeCarouselRow title="Alojamientos populares en Montevideo" items={rowA} />
          <HomeCarouselRow
            title="Hoteles increibles para tu proximo viaje"
            subtitle="Ademas, obten creditos Airbnb por tu estadia en alojamientos destacados."
            items={rowB}
          />
        </>
      ) : null}
    </section>
  );
};

export default HomeListingsSection;
