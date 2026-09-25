import { WorkoutsContext } from "@/contexts/WorkoutsContext";
import { use } from "react";

const useWorkouts = () => {
  const workout = use(WorkoutsContext);
  return workout;
};

export default useWorkouts;
