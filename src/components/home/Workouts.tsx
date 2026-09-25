import WorkoutCard from "../details/WorkoutCard";
import WorkoutType from "../../types/workout.type";

const getWorkouts = async (): Promise<WorkoutType[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  return res.json();
};

const Workouts = async () => {
  const workouts: WorkoutType[] = await getWorkouts();

  return (
    <section
      id="library"
      className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20 scroll-mt-8"
    >
      <h2 className="font-oswald text-2xl sm:text-3xl font-bold tracking-wide uppercase text-white mb-1">
        THE LIBRARY
      </h2>
      <p className="text-sm sm:text-base text-[#9CA3AF] mb-8">
        Twelve lifts covering every major muscle group.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workouts.map((workout: WorkoutType) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
};

export default Workouts;
