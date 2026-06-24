import MainHeader from "@/components/layout/MainHeader";

const DetailLoadingState = () => {
  return (
    <div className="min-h-screen pb-8">
      <MainHeader compact />
      <main className="mx-auto w-full max-w-6xl px-4 py-5 md:px-8 md:py-8">
        <div className="rounded-2xl border border-black/10 bg-white p-6 text-sm font-semibold text-[#5f6b7b]">
          Cargando datos de la habitacion...
        </div>
      </main>
    </div>
  );
};

export default DetailLoadingState;
