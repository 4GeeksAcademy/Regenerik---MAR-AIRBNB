"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type HomeTopNavProps = {
  searchText: string;
  onSearchChange: (value: string) => void;
};

const HomeTopNav = ({ searchText, onSearchChange }: HomeTopNavProps) => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<"alojamientos" | "experiencias" | "servicios">(
    "alojamientos",
  );
  const [language, setLanguage] = useState<"ES" | "EN">("ES");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSectionClick = (section: "alojamientos" | "experiencias" | "servicios") => {
    setActiveSection(section);
    if (section === "alojamientos") {
      router.push("/catalog");
    }
  };

  const handleSearchSubmit = () => {
    router.push("/catalog");
  };

  return (
    <header className="sticky top-0 z-20 border-b border-black/5 bg-[#f5f5f6]">
      <div className="mx-auto w-full max-w-7xl px-4 py-3 md:px-8 md:py-4">
        <div className="flex items-center justify-between">
          <p className="text-4xl font-black tracking-tight text-[#ff385c] md:text-5xl">MARBNB</p>

          <nav className="hidden items-center gap-8 text-lg font-semibold text-[#2a2f3a] md:flex">
            <button
              onClick={() => handleSectionClick("alojamientos")}
              className={`pb-2 ${activeSection === "alojamientos" ? "border-b-4 border-black" : "opacity-75"}`}
            >
              Alojamientos
            </button>
            <button
              onClick={() => handleSectionClick("experiencias")}
              className={`pb-2 ${activeSection === "experiencias" ? "border-b-4 border-black" : "opacity-75"}`}
            >
              Experiencias
            </button>
            <button
              onClick={() => handleSectionClick("servicios")}
              className={`pb-2 ${activeSection === "servicios" ? "border-b-4 border-black" : "opacity-75"}`}
            >
              Servicios
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => router.push("/catalog")}
              className="hidden rounded-full px-4 py-2 text-sm font-semibold md:inline-flex"
            >
              Conviertete en anfitrion
            </button>
            <button
              onClick={() => setLanguage((prev) => (prev === "ES" ? "EN" : "ES"))}
              className="rounded-full bg-white p-3 text-sm"
              aria-label="Cambiar idioma"
            >
              {language}
            </button>
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="rounded-full bg-white p-3 text-sm"
              aria-label="Abrir menu"
            >
              ☰
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <div className="mt-3 rounded-2xl border border-black/10 bg-white p-3 text-sm text-[#4f5d72]">
            Menu rapido: explora alojamientos, guarda favoritos y gestiona tu perfil.
          </div>
        ) : null}

        <div className="mx-auto mt-4 flex max-w-4xl items-center rounded-full border border-black/10 bg-white p-2 shadow-sm">
          <label className="flex-1 rounded-full px-4 py-2">
            <p className="text-xs font-bold text-[#1f2630]">Donde</p>
            <input
              value={searchText}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Explora destinos"
              className="w-full bg-transparent text-base text-[#25303d] outline-none placeholder:text-[#7a8698]"
            />
          </label>

          <div className="hidden border-l border-black/10 px-5 py-2 md:block">
            <p className="text-xs font-bold text-[#1f2630]">Fechas</p>
            <p className="text-base text-[#7a8698]">Agrega fechas</p>
          </div>

          <div className="hidden border-l border-black/10 px-5 py-2 md:block">
            <p className="text-xs font-bold text-[#1f2630]">Quien</p>
            <p className="text-base text-[#7a8698]">¿Cuantos?</p>
          </div>

          <button
            onClick={handleSearchSubmit}
            className="rounded-full bg-[#ff385c] p-4 text-white"
            aria-label="Buscar alojamientos"
          >
            ⌕
          </button>
        </div>

        {activeSection !== "alojamientos" ? (
          <p className="mx-auto mt-2 max-w-4xl text-xs font-medium text-[#5f6b7b]">
            Seccion en vista previa. Vuelve a &quot;Alojamientos&quot; para resultados completos.
          </p>
        ) : null}
      </div>
    </header>
  );
};

export default HomeTopNav;
