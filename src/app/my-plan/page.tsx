"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LuChevronDown, LuClock, LuFlame, LuStar, LuCheck, LuX } from "react-icons/lu";
import useWorkouts from "@/hooks/useWorkouts";
import { Bounce, toast } from "react-toastify";

const MyPlan = () => {
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
  const [sortBy, setSortBy] = useState<string>("duration");
  const { workoutPlans, setWorkoutPlans, savedWorkouts, setSavedWorkouts } = useWorkouts();

  const currentList = activeTab === "today" ? workoutPlans : savedWorkouts;

  const totalExercises = currentList.length;
  const totalMinutes = currentList.reduce(
    (acc, curr) => acc + (Number(curr.duration) || 0),
    0
  );
  const totalCalories = currentList.reduce(
    (acc, curr) => acc + (Number(curr.caloriesBurned) || 0),
    0
  );

  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === "duration") return Number(a.duration) - Number(b.duration);
    if (sortBy === "calories") return Number(a.caloriesBurned) - Number(b.caloriesBurned);
    if (sortBy === "rating") return Number(b.rating) - Number(a.rating);
    return 0;
  });

  const handleRemove = (id: number) => {
    if (activeTab === "today") {
      setWorkoutPlans((prev) => prev.filter((item) => item.id !== id));
      toast.success("Removed from today's plan", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Bounce,
      });
    } else {
      setSavedWorkouts((prev) => prev.filter((item) => item.id !== id));
      toast.success("Removed from saved list", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  const handleMarkDone = (id: number) => {
    setWorkoutPlans((prev) => prev.filter((item) => item.id !== id));
    toast.success("Workout logged — nice work", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      transition: Bounce,
    });
  };

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
              {totalExercises}
            </p>
          </div>

          <div className="pt-4 sm:pt-0 sm:px-8">
            <p className="text-xs sm:text-sm font-medium text-zinc-400 mb-2">
              Minutes
            </p>
            <p className="font-oswald text-4xl sm:text-5xl font-bold text-white tracking-wide">
              {totalMinutes}
            </p>
          </div>

          <div className="pt-4 sm:pt-0 sm:pl-8">
            <p className="text-xs sm:text-sm font-medium text-zinc-400 mb-2">
              Calories
            </p>
            <p className="font-oswald text-4xl sm:text-5xl font-bold text-white tracking-wide">
              {totalCalories}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div role="tablist" className="tabs tabs-box bg-[#13151b] border border-[#222630] p-1 rounded-xl self-start sm:self-auto">
          <button
            role="tab"
            onClick={() => setActiveTab("today")}
            className={`tab rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              activeTab === "today"
                ? "tab-active !bg-[#1c202a] !text-[#C2F800] shadow-sm"
                : "!text-zinc-400 hover:!text-white"
            }`}
          >
            Today&apos;s Plan
          </button>
          <button
            role="tab"
            onClick={() => setActiveTab("saved")}
            className={`tab rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              activeTab === "saved"
                ? "tab-active !bg-[#1c202a] !text-[#C2F800] shadow-sm"
                : "!text-zinc-400 hover:!text-white"
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
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
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
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-zinc-400">
              <LuChevronDown className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>

      {sortedList.length === 0 ? (
        <div className="border border-dashed border-[#222630] rounded-2xl sm:rounded-3xl py-20 sm:py-28 px-6 text-center flex flex-col items-center justify-center">
          <h2 className="font-oswald text-xl sm:text-2xl font-bold uppercase tracking-wider text-white mb-2">
            NOTHING HERE YET
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-sm mb-6 leading-relaxed">
            Browse the library and add a lift to get today moving.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[#C2F800] hover:bg-[#b0e000] active:scale-95 transition-all text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase px-7 py-3 shadow-sm cursor-pointer"
          >
            Go to workouts
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {sortedList.map((workout) => (
            <div
              key={workout.id}
              className="rounded-2xl bg-[#13151b] border border-[#222630] p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:border-zinc-700"
            >
              <div className="flex items-center gap-4 sm:gap-5 min-w-0">
                <div className="relative w-28 sm:w-36 h-18 sm:h-20 rounded-xl overflow-hidden bg-zinc-900 shrink-0">
                  <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 112px, 144px"
                  />
                </div>

                <div className="flex flex-col min-w-0">
                  <h3 className="font-oswald text-base sm:text-lg font-bold tracking-wide uppercase text-white truncate">
                    {workout.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-normal truncate mb-1.5">
                    {workout.equipment}
                  </p>

                  <div className="flex items-center gap-3.5 text-xs text-zinc-300 font-medium">
                    <span className="flex items-center gap-1.5">
                      <LuClock className="w-3.5 h-3.5 text-[#C2F800]" />
                      <span>{workout.duration} min</span>
                    </span>

                    <span className="flex items-center gap-1.5">
                      <LuFlame className="w-3.5 h-3.5 text-[#C2F800]" />
                      <span>{workout.caloriesBurned} kcal</span>
                    </span>

                    <span className="flex items-center gap-1.5">
                      <LuStar className="w-3.5 h-3.5 text-[#C2F800]" />
                      <span>{workout.rating}</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                <Link
                  href={`/exercise/${workout.id}`}
                  className="rounded-full border border-[#222630] bg-[#161922] hover:border-zinc-500 hover:text-white transition-all text-xs sm:text-sm text-zinc-300 font-medium px-4 sm:px-5 py-2 cursor-pointer"
                >
                  View Details
                </Link>

                {activeTab === "today" && (
                  <button
                    onClick={() => handleMarkDone(workout.id)}
                    className="rounded-full bg-[#C2F800] hover:bg-[#b0e000] active:scale-95 transition-all text-xs sm:text-sm font-bold px-4 sm:px-5 py-2 flex items-center gap-1.5 cursor-pointer shadow-sm text-black"
                  >
                    <LuCheck className="w-4 h-4 stroke-[3]" />
                    <span>Mark as Done</span>
                  </button>
                )}

                <button
                  onClick={() => handleRemove(workout.id)}
                  className="text-zinc-500 hover:text-zinc-300 transition-colors p-1.5 cursor-pointer ml-1"
                  title="Remove"
                >
                  <LuX className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default MyPlan;
