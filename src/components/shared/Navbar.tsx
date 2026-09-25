"use client";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathName = usePathname();

    const linkClass = (path: string) =>
        `rounded-full px-5 py-2 font-medium transition-colors ${
            pathName === path ? "!bg-[#22330a] !text-[#bef264]" : "text-zinc-400 hover:text-white"
        }`;

    const links = (
        <>
            <li><Link href="/" className={linkClass("/")}>Workouts</Link></li>
            <li><Link href="/my-plan" className={linkClass("/my-plan")}>My Plan</Link></li>
        </>
    );

    return (
        <nav className="container mx-auto navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link href="/" className="flex items-center gap-2 px-2 text-xl">
                    <Image src={Logo} alt="FITLOG logo" width={32} height={32} className="h-8 w-8 object-contain" priority />
                    <span className="font-bold tracking-tight">FITLOG</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <Link href="/my-plan" className="btn btn-ghost rounded-full flex items-center gap-2 text-sm font-medium text-zinc-300">
                    Plan
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#bef264] text-xs font-bold text-black">0</span>
                </Link>
                <Link href="/my-plan" className="btn btn-ghost rounded-full flex items-center gap-2 text-sm font-medium text-zinc-400">
                    Saved
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-800 text-xs font-semibold text-zinc-400">0</span>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;