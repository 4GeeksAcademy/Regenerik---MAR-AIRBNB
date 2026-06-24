import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="rounded-2xl border border-black/10 bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#708094]">Error 404</p>
        <h1 className="mt-2 text-2xl font-black text-[#1f2630]">Alojamiento no encontrado</h1>
        <p className="mt-2 text-sm text-[#5f6b7b]">Puede que el enlace haya cambiado o ya no este disponible.</p>
        <Link
          href="/catalog"
          className="mt-4 inline-flex rounded-full bg-[#e31c5f] px-4 py-2 text-sm font-semibold text-white"
        >
          Volver al catalogo
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
