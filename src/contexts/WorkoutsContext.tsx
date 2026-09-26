"use client";
import WorkoutType from "@/types/workout.type";
import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";

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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedPlans = localStorage.getItem("fitlog_plans");
      if (storedPlans) {
        setWorkoutPlans(JSON.parse(storedPlans));
      }
      const storedSaved = localStorage.getItem("fitlog_saved");
      if (storedSaved) {
        setSavedWorkouts(JSON.parse(storedSaved));
      }
    } catch (error) {
      console.error("Failed to load from localStorage", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem("fitlog_plans", JSON.stringify(workoutPlans));
    } catch (error) {
      console.error("Failed to save workoutPlans to localStorage", error);
    }
  }, [workoutPlans, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem("fitlog_saved", JSON.stringify(savedWorkouts));
    } catch (error) {
      console.error("Failed to save savedWorkouts to localStorage", error);
    }
  }, [savedWorkouts, isLoaded]);

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
