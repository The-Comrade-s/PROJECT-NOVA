import { About } from "@/components/sections/About";
import { CTA } from "@/components/sections/CTA";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { Statistics } from "@/components/sections/Statistics";
import { Technology } from "@/components/sections/Technology";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <main id="main-content">
        <Hero />
        <About />
        <Features />
        <Technology />
        <Statistics />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
