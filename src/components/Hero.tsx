import { Noto_Naskh_Arabic } from "next/font/google";
import { Button } from "./ui/button";

const notoNaskhArabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400"],
  variable: "--font-noto-naskh-arabic",
});

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h2
        className={`-mt-10 text-xl md:text-2xl font-bold mb-6 text-accent tracking-wide ${notoNaskhArabic.className}`}
      >
        بسم الله الرحمن الرحيم
      </h2>
      <h1 className="text-4xl font-bold mb-4 text-foreground">
        Muslim Developers Community
      </h1>
      <p className="text-xl mb-8 text-foreground/80">
        Connect, Learn, and Grow with Fellow Muslim Developers
      </p>
      <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium">
        Join the Community
      </Button>
    </section>
  );
};

export default Hero;
