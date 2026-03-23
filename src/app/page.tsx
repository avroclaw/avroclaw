import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#09090B] overflow-x-hidden">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <SocialProof />
        <Services />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
}
