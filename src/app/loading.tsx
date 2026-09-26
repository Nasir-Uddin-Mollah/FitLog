const Loading = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 flex flex-col items-center justify-center text-center min-h-[calc(100vh-140px)]">
      <div className="flex items-center gap-2 mb-2.5">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C2F800] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C2F800]" />
        </span>
        <span className="text-xs sm:text-sm font-bold tracking-widest text-[#C2F800] uppercase">
          WARMING UP
        </span>
      </div>
      
      <div className="w-48 sm:w-56 h-1.5 bg-[#1C1F26] rounded-full overflow-hidden border border-[#222630] relative">
        <div className="h-full bg-[#C2F800] rounded-full animate-pulse w-3/5 mx-auto shadow-[0_0_8px_rgba(194,248,0,0.6)]" />
      </div>
    </div>
  );
};

export default Loading;