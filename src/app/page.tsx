import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Clients from "@/components/sections/Clients";
import About from "@/components/sections/About";
import Integrations from "@/components/sections/Integrations";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-ivory justify-center items-center">
        <div className="px-64 mb-22">
          <Header />
          <Hero />
          <Services />
          <Clients />
          <About />
          <Integrations />
          <Contact />
        </div>
        <Footer />
      </main>
    </>
  );
}
