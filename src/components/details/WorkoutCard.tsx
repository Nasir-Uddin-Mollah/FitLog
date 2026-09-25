import Image from "next/image";
import WorkoutType from "../types/workout.type";
import Link from "next/link";

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-[#C2F800]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{workout.duration} min</span>
          </div>

          <div className="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-[#C2F800]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.289A3.75 3.75 0 0012 18z"
              />
            </svg>
            <span>{workout.caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-[#C2F800]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            <span>{workout.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
