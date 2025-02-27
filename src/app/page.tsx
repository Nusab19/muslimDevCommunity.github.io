import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Motive from "@/components/Motive";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary text-primary-foreground">
      <div className="pointer-events-none fixed inset-0 w-full h-full min-h-screen bg-[linear-gradient(45deg,rgba(0,0,0,.2)_25%,transparent_25%,transparent_50%,rgba(0,0,0,.2)_50%,rgba(0,0,0,.2)_75%,transparent_75%,transparent)] bg-[length:8px_8px]"></div>
      <div className="relative z-10">
        <header className="border-b border-secondary">
          <Navbar />
        </header>

        <main>
          <Hero />
          <Projects />
          <Motive />
          <Subscribe />
        </main>

        <Footer />
      </div>
    </div>
  );
}
