import Link from "next/link";

const NotFound = () => {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex flex-col items-center justify-center text-center flex-1">
      <div className="w-72 sm:w-80 md:w-96 aspect-[16/10] rounded-3xl bg-[#13151b] border border-[#222630] flex items-center justify-center p-8 mb-8 shadow-xl">
        <div className="relative flex items-center justify-center">
          <div className="w-2.5 sm:w-3 h-8 sm:h-10 bg-white rounded-sm -mr-1 z-10 shrink-0 shadow-sm" />
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-[5px] border-[#C2F800] shrink-0" />
          <div className="w-20 sm:w-28 h-4 sm:h-5 bg-[#C2F800] rounded-full -mx-2 shrink-0" />
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-[5px] border-[#C2F800] shrink-0" />
          <div className="w-2.5 sm:w-3 h-8 sm:h-10 bg-white rounded-sm -ml-1 z-10 shrink-0 shadow-sm" />
        </div>
      </div>

      <h1 className="font-oswald text-2xl sm:text-3xl lg:text-4xl font-normal tracking-wide uppercase text-white mb-4">
        404 — MISSED THAT LIFT
      </h1>
      <p className="text-sm sm:text-base text-zinc-400 max-w-md mx-auto leading-relaxed mb-8">
        The page you wanted is not in the library. Head back to the floor and
        pick a workout that exists.
      </p>

      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-full bg-[#C2F800] hover:bg-[#b0e000] active:scale-95 transition-all text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase px-7 py-3.5 shadow-sm cursor-pointer"
      >
        Back to workouts
      </Link>
    </main>
  );
};

export default NotFound;
