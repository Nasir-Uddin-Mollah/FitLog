import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#1C1F26] mt-auto bg-[#0a0b0e]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <Image
            src={Logo}
            alt="FITLOG logo"
            width={24}
            height={24}
            className="h-5 w-5 sm:h-6 sm:w-6 object-contain"
          />
          <span className="font-oswald text-sm sm:text-base font-bold tracking-wider uppercase text-white">
            FITLOG
          </span>
        </Link>
        <p className="text-xs sm:text-sm text-zinc-500 sm:text-zinc-400 font-normal">
          &copy; {new Date().getFullYear()} FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;