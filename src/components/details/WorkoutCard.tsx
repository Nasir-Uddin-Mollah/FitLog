import Image from "next/image";
import WorkoutType from "../../types/workout.type";
import Link from "next/link";
import { LuClock, LuFlame, LuStar } from "react-icons/lu";

interface WorkoutCardProps {
  workout: WorkoutType;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link
      href={`/exercise/${workout.id}`}
      className="group rounded-2xl bg-[#13151b] border border-[#222630] overflow-hidden transition-all duration-300 hover:border-[#C2F800] hover:shadow-lg hover:shadow-lime-500/5 flex flex-col cursor-pointer"
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-900">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {workout.muscleGroups?.map((group) => (
            <span
              key={group}
              className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-bold text-black"
            >
              {group}
            </span>
          ))}
        </div>

        <h2 className="font-oswald text-xl font-bold tracking-wide uppercase text-white mb-1.5">
          {workout.name}
        </h2>

        <p className="text-sm text-zinc-400 font-normal mb-5">
          {workout.equipment}
        </p>

        <div className="mt-auto flex items-center gap-4 text-xs sm:text-sm text-zinc-300 font-medium">
          <div className="flex items-center gap-1.5">
            <LuClock className="h-4 w-4 text-[#C2F800]" />
            <span>{workout.duration} min</span>
          </div>

          <div className="flex items-center gap-1.5">
            <LuFlame className="h-4 w-4 text-[#C2F800]" />
            <span>{workout.caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-1.5">
            <LuStar className="h-4 w-4 text-[#C2F800]" />
            <span>{workout.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
