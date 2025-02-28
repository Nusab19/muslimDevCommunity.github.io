"use client";
import { Noto_Naskh_Arabic } from "next/font/google";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Glow from "./Glow";

const notoNaskhArabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400"],
  variable: "--font-noto-naskh-arabic",
});

const Hero = () => {
  const pathData = "M104.055 5.57c-3.977-.515-7.918.036-11.836.665-19.446 3.125-38.407 8.336-57.36 13.555-8.109 2.234-16.18 4.61-24.27 6.914-.723.203-1.45.441-2.187.5-1.723.145-3.156-.87-3.625-2.45-.516-1.714.183-3.398 1.8-4.21.516-.262 1.09-.414 1.653-.567 24.82-6.847 49.75-13.242 75.113-17.78 6.477-1.157 12.988-2.224 19.617-1.821 1.313.078 2.676.304 3.89.777 2.704 1.059 3.676 3.559 2.305 6.113-.773 1.438-1.84 2.805-3.04 3.918-2.995 2.77-6.19 5.32-9.218 8.063-1.574 1.426-2.953 3.07-4.422 4.613.055.254.11.508.164.758 1.536.453 3.04 1.086 4.602 1.328 7.946 1.234 15.965 1.172 23.953.789 26.633-1.277 53.258-2.793 79.895-4.047 22.558-1.066 45.125-2.004 67.691-2.805 26.16-.933 52.329-1.058 78.493-.25 6.996.215 13.988.629 20.98.98.836.04 1.664.247 2.5.38-.01.25-.019.496-.03.746-.665.05-1.333.183-1.99.144-21.902-1.254-43.824-1.328-65.734-.746-23.574.625-47.144 1.566-70.695 2.758-22.55 1.14-45.078 2.8-67.617 4.203-14.718.914-29.44 1.852-44.168 2.617-8.32.434-16.668.754-24.941-.672-1.613-.277-3.254-.808-4.703-1.566-2.629-1.371-3.445-3.941-2.074-6.578.793-1.527 1.875-2.977 3.094-4.191 2.297-2.293 4.8-4.38 7.187-6.582 1.766-1.633 3.485-3.313 5.227-4.973-.086-.195-.168-.387-.254-.582z";

  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <div className="hidden lg:block">
        <Glow
          blur="5vw"
          type="ellipse at top"
          colors={["#219ebc", "#219ebc"]}
          opacity={0.15}
          className="-top-12 right-0 h-[23rem] w-[43rem]"
        />
        <Glow
          blur="4vw"
          type="ellipse at top"
          colors={["#231942", "#231942"]}
          opacity={0.5}
          className="-top-32 left-12 h-[23rem] w-[33rem] translate-x-1/2"
        />
        <Glow
          blur="5vw"
          type="ellipse at top"
          colors={["#000000", "#000000"]}
          opacity={0.9}
          className="-top-10 left-1/2 h-[23rem] w-[33rem] -translate-x-1/2"
        />
      </div>

      <div className="block lg:hidden">
        <Glow
          blur="9vw"
          type="ellipse at top"
          colors={["#000000", "#000000"]}
          opacity={0.9}
          className="left-1/2 top-10 h-[23rem] w-[50vw] -translate-x-1/2"
        />
        <Glow
          blur="7vw"
          type="ellipse at top"
          colors={["#219ebc", "#219ebc"]}
          opacity={0.1}
          className="left-0 top-20 h-[15rem] w-[50vw]"
        />
        <Glow
          blur="5vw"
          type="ellipse at top"
          colors={["#231942", "#231942"]}
          opacity={0.3}
          className="-top-32 right-0 h-[23rem] w-[50vw]"
        />
      </div>

      <div className="z-50">
        <h2
          className={`-mt-10 mb-6 text-xl font-bold tracking-wide text-accent md:text-2xl ${notoNaskhArabic.className}`}
        >
          بِسْــــــــــــــــــــــمِ ﷲِالرَّحْمَنِ الرَّحِيم
        </h2>
        <h1 className="mb-4 text-3xl font-bold leading-relaxed text-foreground md:mb-6 md:text-4xl lg:text-5xl">
          <span className="relative">
            Muslim
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 375 32.25"
              className="absolute -bottom-3 -left-6 h-4 md:-left-4 lg:-bottom-4 lg:-left-9 lg:h-6"
            >
              {/* Filled path that fades in */}
              <motion.path
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0, 1],
                }}
                transition={{
                  duration: 1.5,
                  times: [0, 0.6, 1],
                  ease: "easeInOut",
                }}
                fill="#2979ff"
                d={pathData}
              />

              {/* Animated stroke on top */}
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                stroke="#2979ff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="transparent"
                d={pathData}
              />
            </motion.svg>
          </span>{" "}
          Developers Community
        </h1>

        <p className="mb-8 text-base text-foreground/80 md:text-xl">
          Connect, Learn, and Grow with Fellow Muslim Developers
        </p>
        <Button className="bg-accent font-medium text-accent-foreground hover:bg-accent/90">
          Join the Community
        </Button>
      </div>
    </section>
  );
};

export default Hero;