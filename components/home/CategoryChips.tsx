export const HOME_CATEGORIES = [
  { label: "Todas", icon: "◌" },
  { label: "Playa", icon: "◍" },
  { label: "Mansiones", icon: "⌂" },
  { label: "Tendencias", icon: "✦" },
  { label: "Cabanas", icon: "△" },
  { label: "Ciudad", icon: "▦" },
] as const;

type CategoryChipsProps = {
  categories: ReadonlyArray<{ label: string; icon: string }>;
  activeCategory: string;
  onSelectCategory: (category: string) => void;
};

const CategoryChips = ({
  categories,
  activeCategory,
  onSelectCategory,
}: CategoryChipsProps) => {
  return (
    <section>
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#758194]">Categorias</p>
      <div className="flex gap-2 overflow-x-auto pb-1">
        {categories.map((category) => (
          <button
            key={category.label}
            onClick={() => onSelectCategory(category.label)}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition ${
              activeCategory === category.label
                ? "border-[#e31c5f] bg-[#ffe9f1] text-[#b01248]"
                : "border-black/10 bg-white text-[#2d3440] hover:border-[#e31c5f] hover:text-[#e31c5f]"
            }`}
          >
            <span className="mr-2 text-xs">{category.icon}</span>
            {category.label}
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategoryChips;
