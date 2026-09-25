import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#1C1F26] mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 hover:opacity-90 transition-opacity">
          <Image
            src={Logo}
            alt="FITLOG logo"
            width={26}
            height={26}
            className="h-6 w-6 object-contain"
          />
          <span className="font-oswald text-base font-bold tracking-wider uppercase text-white">FITLOG</span>
        </Link>
        <p className="text-sm text-zinc-400 font-normal">
          &copy; {new Date().getFullYear()} FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;