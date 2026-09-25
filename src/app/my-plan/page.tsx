"use client";
import { useState } from "react";
import Link from "next/link";
import { LuChevronDown } from "react-icons/lu";

const MyPlan = () => {
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex-1">
      <div className="mb-8">
        <h1 className="font-oswald text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide uppercase text-white mb-2">
          MY PLAN
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 font-normal">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="rounded-2xl sm:rounded-3xl bg-[#13151b] border border-[#222630] p-6 sm:p-8 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#222630]">
          <div className="sm:pr-8">
            <p className="text-xs sm:text-sm font-medium text-zinc-400 mb-2">
              Exercises
            </p>
            <p className="font-oswald text-4xl sm:text-5xl font-bold text-[#C2F800] tracking-wide">
              2
            </p>
          </div>

          <div className="pt-4 sm:pt-0 sm:px-8">
            <p className="text-xs sm:text-sm font-medium text-zinc-400 mb-2">
              Minutes
            </p>
            <p className="font-oswald text-4xl sm:text-5xl font-bold text-white tracking-wide">
              23
            </p>
          </div>

          <div className="pt-4 sm:pt-0 sm:pl-8">
            <p className="text-xs sm:text-sm font-medium text-zinc-400 mb-2">
              Calories
            </p>
            <p className="font-oswald text-4xl sm:text-5xl font-bold text-white tracking-wide">
              190
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="inline-flex items-center p-1 rounded-xl bg-[#13151b] border border-[#222630] self-start sm:self-auto">
          <button
            onClick={() => setActiveTab("today")}
            className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              activeTab === "today"
                ? "bg-[#1c202a] text-[#C2F800] shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Today&apos;s Plan
          </button>
          <button
            onClick={() => setActiveTab("saved")}
            className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              activeTab === "saved"
                ? "bg-[#1c202a] text-[#C2F800] shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Saved
          </button>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-auto">
          <span className="text-xs sm:text-sm font-medium text-zinc-400">
            Sort By
          </span>
          <div className="relative inline-block">
            <select
              defaultValue="duration"
              className="appearance-none bg-[#13151b] border border-[#222630] hover:border-zinc-600 transition-colors text-zinc-200 font-medium text-xs sm:text-sm rounded-lg pl-3 pr-8 py-2 focus:outline-none focus:border-zinc-500 cursor-pointer"
            >
              <option value="duration" className="bg-[#13151b] text-white">
                Duration
              </option>
              <option value="calories" className="bg-[#13151b] text-white">
                Calories
              </option>
              <option value="rating" className="bg-[#13151b] text-white">
                Rating
              </option>
              <option value="name" className="bg-[#13151b] text-white">
                Name
              </option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-zinc-400">
              <LuChevronDown className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>

      <div className="border border-dashed border-[#222630] rounded-2xl sm:rounded-3xl py-20 sm:py-28 px-6 text-center flex flex-col items-center justify-center">
        <h2 className="font-oswald text-xl sm:text-2xl font-bold uppercase tracking-wider text-white mb-2">
          NOTHING HERE YET
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-sm mb-6 leading-relaxed">
          Browse the library and add a lift to get today moving.
        </p>
        <Link
          href="/#library"
          className="inline-flex items-center justify-center rounded-full bg-[#C2F800] hover:bg-[#b0e000] active:scale-95 transition-all text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase px-7 py-3 shadow-sm cursor-pointer"
        >
          Go to workouts
        </Link>
      </div>
    </main>
  );
};

export default MyPlan;
