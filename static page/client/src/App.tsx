import { useState, useEffect } from "react";
import { motion } from "framer-motion"; 
import Header from "./components/Header";
import Title from "./components/Title";
import { Slant } from "./components/Slant";
import UseCaseIntro from "./components/UseCaseIntro";
import UseCaseMain from "./components/UseCaseMain";
import FeaturesMain from "./components/FeaturesMain";
import Customers from "./components/Customers";
import Testimonials from "./components/Testimonials";
import KeepInTouch from "./components/KeepInTouch";
import Footer from "./components/Footer";
import microsite from "./jsons/Microsite.json";
import { VerticalDataType } from "./types";

type VerticalKey = keyof typeof microsite;

function App() {
  const [verticalSelection, setVerticalSelection] =
    useState<VerticalKey>("Travel");
  const currentVertical: VerticalDataType = microsite[verticalSelection];

  const [visibleSections, setVisibleSections] = useState<string[]>([]);


  const observeSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...new Set([...prev, id])]);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(element);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const sections = [
      "UseCaseIntro",
      "UseCaseMain",
      "FeaturesMain",
      "Customers",
      "Testimonials",
      "KeepInTouch",
      "Footer",
    ];
    sections.forEach((id) => observeSection(id));
  }, []);

  return (
    <main>
      <div className="relative z-20">
        <Header updateVerticalSelection={setVerticalSelection} />
        <Title verticalData={currentVertical} />
      </div>
      <div className="z-0">
        <Slant />
      </div>
      <motion.div
        id="UseCaseIntro"
        initial={{ opacity: 0, y: 50 }}
        animate={visibleSections.includes("UseCaseIntro") ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <UseCaseIntro verticalData={currentVertical} />
      </motion.div>
      <motion.div
        id="UseCaseMain"
        initial={{ opacity: 0, y: 50 }}
        animate={visibleSections.includes("UseCaseMain") ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <UseCaseMain verticalData={currentVertical} />
      </motion.div>
      <motion.div
        id="FeaturesMain"
        initial={{ opacity: 0, y: 50 }}
        animate={visibleSections.includes("FeaturesMain") ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <FeaturesMain verticalData={currentVertical} />
      </motion.div>
      <motion.div
        id="Customers"
        initial={{ opacity: 0, y: 50 }}
        animate={visibleSections.includes("Customers") ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <Customers />
      </motion.div>
      <motion.div
        id="Testimonials"
        initial={{ opacity: 0, y: 50 }}
        animate={visibleSections.includes("Testimonials") ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <Testimonials />
      </motion.div>
      <motion.div
        id="KeepInTouch"
        initial={{ opacity: 0, y: 50 }}
        animate={visibleSections.includes("KeepInTouch") ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <KeepInTouch />
      </motion.div>
      <motion.div
        id="Footer"
        initial={{ opacity: 0, y: 50 }}
        animate={visibleSections.includes("Footer") ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <Footer />
      </motion.div>
    </main>
  );
}

export default App;
