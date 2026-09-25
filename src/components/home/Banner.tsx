import Image from "next/image";
import BannerImage from "@/assets/banner.png";

const Banner = () => {
    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 my-8 sm:my-10">
            <div className="border border-[#222630] rounded-2xl sm:rounded-3xl bg-[#15171D] p-8 sm:p-12 lg:px-16 lg:py-14">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-8">
                    <div className="flex flex-col items-start justify-center">
                        <p className="text-xs sm:text-sm font-bold tracking-widest text-[#C2F800] uppercase mb-4">
                            WORKOUT LIBRARY
                        </p>
                        <h1 className="font-oswald text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white tracking-wide leading-[1.08] uppercase mb-4">
                            TRAIN WITH INTENT. LOG EVERY SET.
                        </h1>
                        <p className="text-sm sm:text-base text-[#9CA3AF] max-w-md leading-relaxed mb-8">
                            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
                        </p>
                        <button className="rounded-lg bg-[#C2F800] hover:bg-[#b0e000] active:scale-95 transition-all text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase px-7 py-3.5 shadow-sm hover:cursor-pointer">
                            BROWSE WORKOUTS
                        </button>
                    </div>
                    <div className="flex items-center justify-center lg:justify-end">
                        <Image 
                            src={BannerImage}
                            alt="Fitness illustration"
                            width={480}
                            height={480}
                            className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[460px] h-auto object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;