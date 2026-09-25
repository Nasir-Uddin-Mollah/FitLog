"use client";
import { WorkoutsContext } from "@/contexts/WorkoutsContext";
import WorkoutType from "@/types/workout.type";
import { useContext } from "react";
import { LuBookmark } from "react-icons/lu";
import { Bounce, toast } from "react-toastify";

interface SaveButtonProps {
  workout: WorkoutType;
}

const SaveButton = ({ workout }: SaveButtonProps) => {
  const { savedWorkouts, setSavedWorkouts } = useContext(WorkoutsContext);

  const isWorkoutExists = savedWorkouts.some((item) => item.id === workout.id);

  const handleSave = () => {
    if (isWorkoutExists) {
      return;
    }

    setSavedWorkouts([...savedWorkouts, workout]);
    toast.success("Saved for later", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <button
      onClick={() => handleSave()}
      disabled={isWorkoutExists}
      className="flex items-center gap-2 rounded-xl border border-[#222630] bg-[#13151b] hover:border-zinc-600 hover:text-white active:scale-95 transition-all text-zinc-300 font-medium text-xs sm:text-sm tracking-wider px-6 py-3.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-[#222630] disabled:hover:text-zinc-300 disabled:active:scale-100"
    >
      <LuBookmark className="h-4 w-4" />
      <span>Save for later</span>
    </button>
  );
};

export default SaveButton;
