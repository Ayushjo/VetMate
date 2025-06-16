import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Testimonials } from "../components/Testimonials";
import { About } from "../components/About";
import { HowItWorks } from "../components/HowItWorks";
import { HeroSection } from "../components/HeroSection";
import { SeeDiagnosis } from "../components/SeeDiagnosis";
import { ToastContainer } from "react-toastify";
export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Navbar />
        <ToastContainer />

        <HeroSection />
        <HowItWorks />
        <About />
        <Testimonials />
        <SeeDiagnosis />
      </main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

