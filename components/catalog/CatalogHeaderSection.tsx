type SortDirection = "asc" | "desc";

type CatalogHeaderSectionProps = {
  resultCount: number;
  sortDirection: SortDirection;
  onSortChange: (nextSort: SortDirection) => void;
  activeFilter: string;
  onFilterChange: (nextFilter: string) => void;
};

const filters = ["Precio", "Tipo de lugar", "Habitaciones", "Servicios", "Reserva inmediata"];

const CatalogHeaderSection = ({
  resultCount,
  sortDirection,
  onSortChange,
  activeFilter,
  onFilterChange,
}: CatalogHeaderSectionProps) => {
  return (
    <section className="rounded-3xl border border-black/5 bg-white/85 p-4 md:p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-[#708094]">Resultados de busqueda</p>
      <h1 className="mt-2 text-3xl font-black text-[#1f2630]">{resultCount} estancias en Uruguay</h1>
      <p className="mt-2 text-sm text-[#637083]">Fechas flexibles, 2 huespedes, filtros editables.</p>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-black/10 bg-white p-3">
        <p className="text-sm font-semibold text-[#2d3440]">Ordenar por precio</p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onSortChange("asc")}
            className={`rounded-full px-3 py-2 text-sm font-medium ${
              sortDirection === "asc"
                ? "bg-[#e31c5f] text-white"
                : "border border-black/10 bg-white text-[#2d3440]"
            }`}
          >
            Ascendente
          </button>
          <button
            onClick={() => onSortChange("desc")}
            className={`rounded-full px-3 py-2 text-sm font-medium ${
              sortDirection === "desc"
                ? "bg-[#e31c5f] text-white"
                : "border border-black/10 bg-white text-[#2d3440]"
            }`}
          >
            Descendente
          </button>
        </div>
      </div>

      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium ${
              activeFilter === filter
                ? "border-[#e31c5f] bg-[#ffe9f1] text-[#b01248]"
                : "border-black/10 bg-white text-[#2d3440]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </section>
  );
};

export default CatalogHeaderSection;
