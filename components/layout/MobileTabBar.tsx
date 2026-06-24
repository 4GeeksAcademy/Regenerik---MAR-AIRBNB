import Link from "next/link";

const items = [
  { href: "/", label: "Inicio", icon: "⌂" },
  { href: "/catalog", label: "Explorar", icon: "◉" },
  { href: "/catalog", label: "Guardados", icon: "♡" },
  { href: "/catalog", label: "Perfil", icon: "◌" },
];

const MobileTabBar = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-black/10 bg-white/95 px-2 py-2 backdrop-blur md:hidden">
      <nav className="mx-auto grid max-w-xl grid-cols-4 gap-2">
        {items.map((item) => (
          <Link
            key={`${item.label}-${item.href}`}
            href={item.href}
            className="flex flex-col items-center justify-center rounded-xl py-2 text-[11px] font-medium text-[#5b6472]"
          >
            <span className="text-base leading-none">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MobileTabBar;
