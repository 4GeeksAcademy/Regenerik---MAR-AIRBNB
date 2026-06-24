import Link from "next/link";

type MainHeaderProps = {
  compact?: boolean;
};

const MainHeader = ({ compact = false }: MainHeaderProps) => {
  return (
    <header className="sticky top-0 z-20 border-b border-black/5 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-8 md:py-4">
        <Link href="/" className="text-xl font-extrabold tracking-tight text-[#e31c5f]">
          MARBNB
        </Link>

        {!compact && (
          <nav className="hidden items-center gap-4 text-sm font-medium text-[#28313d] md:flex">
            <Link href="/" className="rounded-full px-3 py-2 hover:bg-[#f7f8fa]">
              Inicio
            </Link>
            <Link href="/catalog" className="rounded-full px-3 py-2 hover:bg-[#f7f8fa]">
              Explorar
            </Link>
            <Link href="/catalog" className="rounded-full border border-black/10 px-3 py-2">
              Anfitrion
            </Link>
          </nav>
        )}

        <Link
          href="/catalog"
          className="rounded-full border border-black/10 bg-white px-3 py-2 text-xs font-semibold text-[#28313d] shadow-sm hover:shadow md:text-sm"
        >
          Buscar
        </Link>
      </div>
    </header>
  );
};

export default MainHeader;
