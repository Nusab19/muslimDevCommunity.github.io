import { Noto_Naskh_Arabic } from "next/font/google";
import { Button } from "./ui/button";
import Glow from "./Glow";

const notoNaskhArabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400"],
  variable: "--font-noto-naskh-arabic",
});

const Hero = () => {
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
          className="left-1/2 top-10 h-[23rem] w-[60vw] -translate-x-1/2"
        />
        <Glow
          blur="7vw"
          type="ellipse at top"
          colors={["#219ebc", "#219ebc"]}
          opacity={0.1}
          className="left-0 top-20 h-[15rem] w-[60vw]"
        />
        <Glow
          blur="5vw"
          type="ellipse at top"
          colors={["#231942", "#231942"]}
          opacity={0.3}
          className="-top-32 right-0 h-[23rem] w-[60vw]"
        />
      </div>

      <div className="z-50">
        <h2
          className={`-mt-10 mb-6 text-xl font-bold tracking-wide text-accent md:text-2xl ${notoNaskhArabic.className}`}
        >
          بِسْــــــــــــــــــــــمِ ﷲِالرَّحْمَنِ الرَّحِيم
        </h2>
        <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
          Muslim Developers Community
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
