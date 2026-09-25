"use client";
import { WorkoutsContext } from "@/contexts/WorkoutsContext";
import WorkoutType from "@/types/workout.type";
import { useContext } from "react";
import { LuCalendarPlus2 } from "react-icons/lu";
import { Bounce, toast } from "react-toastify";

interface AddButtonProps {
  workout: WorkoutType;
}

const AddButton = ({ workout }: AddButtonProps) => {
  const { workoutPlans, setWorkoutPlans } = useContext(WorkoutsContext);

  const isWorkoutExists = workoutPlans.some((item) => item.id === workout.id);

  const handleAdd = () => {
    if (isWorkoutExists) {
      return;
    }
    
    setWorkoutPlans([...workoutPlans, workout]);
    toast.success("Added to today's plan", {
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
      onClick={() => handleAdd()}
      disabled={isWorkoutExists}
      className="flex items-center gap-2 rounded-xl bg-[#C2F800] hover:bg-[#b0e000] active:scale-95 transition-all text-black font-extrabold text-xs sm:text-sm tracking-wider px-6 py-3.5 shadow-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#C2F800] disabled:active:scale-100"
    >
      <LuCalendarPlus2 className="h-4 w-4" />
      <span>Add to today&apos;s plan</span>
    </button>
  );
};

export default AddButton;
