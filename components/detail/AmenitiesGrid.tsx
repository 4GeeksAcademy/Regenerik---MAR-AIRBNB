type AmenitiesGridProps = {
  amenities: string[];
  amenityIcons: Record<string, string>;
};

const AmenitiesGrid = ({ amenities, amenityIcons }: AmenitiesGridProps) => {
  return (
    <div className="mt-5">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-[#708094]">Amenidades</h3>
      <ul className="mt-2 grid grid-cols-1 gap-2 text-sm text-[#2d3440] md:grid-cols-2">
        {amenities.map((item) => (
          <li key={item} className="flex items-center gap-2 rounded-xl bg-[#f6f8fb] px-3 py-2">
            <span className="text-xs">{amenityIcons[item] ?? "◍"}</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AmenitiesGrid;
