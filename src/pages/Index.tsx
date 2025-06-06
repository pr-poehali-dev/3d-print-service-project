import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";
import Calculator from "@/components/Calculator";

const Index = () => {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  useEffect(() => {
    const handleOpenCalculator = () => setIsCalculatorOpen(true);
    window.addEventListener("openCalculator", handleOpenCalculator);
    return () =>
      window.removeEventListener("openCalculator", handleOpenCalculator);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <OrderForm />
      <Footer />
      {isCalculatorOpen && (
        <Calculator onClose={() => setIsCalculatorOpen(false)} />
      )}
    </div>
  );
};

export default Index;
