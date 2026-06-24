import Link from "next/link";
import MainHeader from "@/components/layout/MainHeader";

const DetailNotFoundState = () => {
  return (
    <div className="min-h-screen pb-8">
      <MainHeader compact />
      <main className="mx-auto w-full max-w-6xl px-4 py-5 md:px-8 md:py-8">
        <div className="rounded-2xl border border-black/10 bg-white p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#708094]">Error</p>
          <h1 className="mt-2 text-2xl font-black text-[#1f2630]">No encontramos esta habitacion</h1>
          <Link href="/catalog" className="mt-4 inline-flex text-sm font-semibold text-[#e31c5f]">
            Volver al catalogo
          </Link>
        </div>
      </main>
    </div>
  );
};

export default DetailNotFoundState;
