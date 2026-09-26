"use client";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import useWorkouts from "@/hooks/useWorkouts";
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
    const { workoutPlans, savedWorkouts } = useWorkouts();
    const pathName = usePathname();

    const linkClass = (path: string) =>
        `rounded-full px-5 py-2 font-medium transition-colors ${
            pathName === path ? "!bg-[#22330a] !text-[#bef264]" : "text-zinc-400 hover:text-white"
        }`;

    const mobileLinkClass = (path: string) =>
        `block w-full rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
            pathName === path ? "bg-[#22330a] text-[#bef264]" : "text-zinc-300 hover:bg-[#1C1F26] hover:text-white"
        }`;

    return (
        <header className="sticky top-0 z-50 bg-[#0a0b0e]/95 backdrop-blur-md border-b border-[#1C1F26]">
            <nav className="container mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
                {/* Left side: Hamburger (mobile) + Brand Logo */}
                <div className="flex items-center gap-1 sm:gap-2">
                    <div className="dropdown lg:hidden">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-square btn-sm h-9 w-9 min-h-0 text-zinc-300 hover:text-white hover:bg-[#1C1F26] border-0"
                            aria-label="Open navigation menu"
                        >
                            <LuMenu className="h-5 w-5" />
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu dropdown-content bg-[#13151b] border border-[#222630] rounded-2xl z-50 mt-3 w-48 p-2 shadow-2xl space-y-1"
                        >
                            <li>
                                <Link href="/" className={mobileLinkClass("/")}>
                                    Workouts
                                </Link>
                            </li>
                            <li>
                                <Link href="/my-plan" className={mobileLinkClass("/my-plan")}>
                                    My Plan
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <Link href="/" className="flex items-center gap-2 px-1 text-lg sm:text-xl">
                        <Image
                            src={Logo}
                            alt="FITLOG logo"
                            width={32}
                            height={32}
                            className="h-7 w-7 sm:h-8 sm:w-8 object-contain"
                            priority
                        />
                        <span className="font-oswald text-xl sm:text-2xl font-bold tracking-wider text-white">
                            FITLOG
                        </span>
                    </Link>
                </div>

                {/* Center: Desktop Navigation Links */}
                <div className="hidden lg:flex items-center">
                    <ul className="flex items-center gap-1">
                        <li>
                            <Link href="/" className={linkClass("/")}>
                                Workouts
                            </Link>
                        </li>
                        <li>
                            <Link href="/my-plan" className={linkClass("/my-plan")}>
                                My Plan
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Right side: Plan and Saved status badges */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                    <Link
                        href="/my-plan"
                        className="rounded-full px-2.5 sm:px-4 py-1.5 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-zinc-200 hover:text-white hover:bg-[#151821] transition-all cursor-pointer"
                    >
                        <span>Plan</span>
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#bef264] text-[11px] sm:text-xs font-bold text-black shrink-0">
                            {workoutPlans.length}
                        </span>
                    </Link>

                    <Link
                        href="/my-plan"
                        className="rounded-full px-2.5 sm:px-4 py-1.5 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-zinc-400 hover:text-white hover:bg-[#151821] transition-all cursor-pointer"
                    >
                        <span>Saved</span>
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-800 text-[11px] sm:text-xs font-semibold text-zinc-400 shrink-0 border border-zinc-700/60">
                            {savedWorkouts.length}
                        </span>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;