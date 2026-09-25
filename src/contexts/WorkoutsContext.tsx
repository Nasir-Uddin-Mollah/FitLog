'use client';
import WorkoutType from "@/types/workout.type";
import { createContext, Dispatch, SetStateAction, useState } from "react";

interface IWorkoutsContext {
  workoutPlans: WorkoutType[];
  setWorkoutPlans: Dispatch<SetStateAction<WorkoutType[]>>;
  savedWorkouts: WorkoutType[];
  setSavedWorkouts: Dispatch<SetStateAction<WorkoutType[]>>;
}

export const WorkoutsContext = createContext<IWorkoutsContext>({
  workoutPlans: [],
  setWorkoutPlans: () => {},
  savedWorkouts: [],
  setSavedWorkouts: () => {},
});

const WorkoutsProvider = ({ children }: { children: React.ReactNode }) => {
  const [workoutPlans, setWorkoutPlans] = useState<WorkoutType[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<WorkoutType[]>([]);
  const sharedData = {
    workoutPlans,
    setWorkoutPlans,
    savedWorkouts,
    setSavedWorkouts,
  };
  return (
    <WorkoutsContext.Provider value={sharedData}>
      {children}
    </WorkoutsContext.Provider>
  );
};

export default WorkoutsProvider;
