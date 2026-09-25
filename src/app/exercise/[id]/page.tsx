import Image from "next/image";
import WorkoutType from "@/components/types/workout.type";
import { LuCalendarPlus2, LuBookmark } from "react-icons/lu";

interface WorkoutDetailPageProps {
  params: Promise<{ id: string }>;
}

const WorkoutDetailPage = async ({ params }: WorkoutDetailPageProps) => {
  const { id } = await params;
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
  const workout: WorkoutType = await res.json();

  const specs = [
    { label: "EQUIPMENT", value: workout.equipment },
    { label: "DIFFICULTY", value: workout.difficulty },
    { label: "SETS", value: workout.sets },
    { label: "REPS", value: workout.reps },
    { label: "DURATION", value: `${workout.duration} min` },
    { label: "CALORIES", value: `${workout.caloriesBurned} kcal` },
    { label: "RATING", value: workout.rating },
  ];

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-stretch">
        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-full min-h-[400px] lg:min-h-[580px] overflow-hidden rounded-3xl bg-zinc-900 border border-[#222630]/60">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col">
          <h2 className="font-oswald text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold tracking-wide uppercase text-white mb-3">
            {workout.name}
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed mb-5">
            {workout.description}
          </p>

          <div className="flex flex-wrap items-center gap-2 mb-8">
            {workout.muscleGroups?.map((group: string) => (
              <span
                key={group}
                className="rounded-full bg-[#C2F800] px-3.5 py-1 text-xs font-bold text-black"
              >
                {group}
              </span>
            ))}
          </div>

          <div className="rounded-2xl bg-[#13151b] border border-[#222630] overflow-hidden divide-y divide-[#1e232e]">
            {specs.map((item) => (
              <div
                key={item.label}
                className="px-6 py-3.5 flex items-center justify-between text-sm"
              >
                <span className="text-xs font-semibold tracking-wider text-zinc-500 uppercase">
                  {item.label}
                </span>
                <span className="font-medium text-zinc-200">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {workout.instructions && workout.instructions.length > 0 && (
            <div className="mt-8">
              <h2 className="font-oswald text-lg sm:text-xl font-bold tracking-wide uppercase text-white mb-4">
                INSTRUCTIONS
              </h2>
              <ol className="space-y-3">
                {workout.instructions.map((instruction: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal"
                  >
                    <span className="text-zinc-500 font-medium">
                      {index + 1}.
                    </span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <button className="flex items-center gap-2 rounded-xl bg-[#C2F800] hover:bg-[#b0e000] active:scale-95 transition-all text-black font-extrabold text-xs sm:text-sm tracking-wider px-6 py-3.5 shadow-sm cursor-pointer">
              <LuCalendarPlus2 className="h-4 w-4" />
              <span>Add to today&apos;s plan</span>
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-[#222630] bg-[#13151b] hover:border-zinc-600 hover:text-white active:scale-95 transition-all text-zinc-300 font-medium text-xs sm:text-sm tracking-wider px-6 py-3.5 cursor-pointer">
              <LuBookmark className="h-4 w-4" />
              <span>Save for later</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetailPage;
