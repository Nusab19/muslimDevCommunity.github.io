import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Motive from "@/components/Motive";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary text-primary-foreground">
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
  );
}
