import Link from "next/link";

const HeroBanner = () => {
  return (
    <section className="overflow-hidden rounded-3xl bg-[radial-gradient(circle_at_top_left,_#ffe8d4,_#ffc6d7_45%,_#ffd2ba_80%)] p-6 md:p-10">
      <p className="inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#71433a]">
        Estancias 2026
      </p>
      <h1 className="mt-4 max-w-lg text-3xl font-black leading-tight text-[#2c2530] md:text-5xl">
        Encuentra lugares unicos para dormir, vivir y reconectar.
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-[#4b4f57] md:text-base">
        Descubre espacios curados para escapadas de fin de semana, trabajo remoto o viajes en grupo.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/catalog"
          className="rounded-full bg-[#1d1f25] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
        >
          Ver alojamientos
        </Link>
        <Link
          href="/catalog"
          className="rounded-full border border-black/10 bg-white/75 px-5 py-3 text-sm font-semibold text-[#2d3440]"
        >
          Explorar destinos
        </Link>
      </div>
    </section>
  );
};

export default HeroBanner;
