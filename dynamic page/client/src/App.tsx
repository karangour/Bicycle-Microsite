import React, { useState, useEffect } from "react";
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
import logo_anim from "./assets/logos/Bicycle Logo Animation.gif";

import { VerticalDataType } from "./types";

interface EmailPageProps {
  email: string;
  setEmail: (email: string) => void;
  handleEmailSubmit: () => void;
  loading: boolean;
}

const EmailPage = ({
  email,
  setEmail,
  handleEmailSubmit,
  loading,
}: EmailPageProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleEmailSubmit();
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-dark-grey">
      {!loading ? (<div className={`bg-light-grey p-6 rounded shadow-md max-w-sm w-full`}>
        <h1 className="text-2xl font-title font-bold text-text-black mb-4 text-center">
          Welcome to Bicycle!
        </h1>
        <p className="mb-4 font-body text-sm text-text-black">
          Please enter your email to continue:
        </p>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}
          className="border rounded px-4 py-2 w-full mb-4 text-body"
        />
        <button
          onClick={handleEmailSubmit}
          className="bg-red font-body text-white px-4 py-2 rounded w-full"
          disabled={loading}
        >
          Submit
        </button>
      </div>) : (
        <div
          className="flex items-center justify-center"
          style={{
            transition: "opacity 0.5s ease-in-out",
            opacity: loading ? 1 : 0,
          }}
        >
          <img
            src={logo_anim}
            alt="Loading"
            style={{ width: "50%", height: "auto" }}
          />
        </div>
      )}
    </div>
  );
};

function App() {
  const [currentVertical, setCurrentVertical] =
    useState<VerticalDataType | null>(null);

  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const [email, setEmail] = useState<string>("");
  const [emailSubmitted, setEmailSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

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
    if (emailSubmitted) {
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
    }
  }, [emailSubmitted]);

  const handleEmailSubmit = async () => {
    if (!email.trim()) {
      alert("Please enter a valid email.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:4000/api/analyze-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to analyze email.");
      }

      const data = await response.json();
      console.log("Analytics Data:", data);
      setCurrentVertical(data[data.vertical]);
      setEmailSubmitted(true);
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      {emailSubmitted && currentVertical ? (
        <>
          <div className="relative z-20">
            <Header />
            <Title verticalData={currentVertical} />
          </div>
          <div className="z-0">
            <Slant />
          </div>
          <motion.div
            id="UseCaseIntro"
            initial={{ opacity: 0, y: 50 }}
            animate={
              visibleSections.includes("UseCaseIntro")
                ? { opacity: 1, y: 0 }
                : {}
            }
            transition={{ duration: 0.6 }}
          >
            <UseCaseIntro verticalData={currentVertical} />
          </motion.div>
          <motion.div
            id="UseCaseMain"
            initial={{ opacity: 0, y: 50 }}
            animate={
              visibleSections.includes("UseCaseMain")
                ? { opacity: 1, y: 0 }
                : {}
            }
            transition={{ duration: 0.6 }}
          >
            <UseCaseMain verticalData={currentVertical} />
          </motion.div>
          <motion.div
            id="FeaturesMain"
            initial={{ opacity: 0, y: 50 }}
            animate={
              visibleSections.includes("FeaturesMain")
                ? { opacity: 1, y: 0 }
                : {}
            }
            transition={{ duration: 0.6 }}
          >
            <FeaturesMain verticalData={currentVertical} />
          </motion.div>
          <motion.div
            id="Customers"
            initial={{ opacity: 0, y: 50 }}
            animate={
              visibleSections.includes("Customers") ? { opacity: 1, y: 0 } : {}
            }
            transition={{ duration: 0.6 }}
          >
            <Customers />
          </motion.div>
          <motion.div
            id="Testimonials"
            initial={{ opacity: 0, y: 50 }}
            animate={
              visibleSections.includes("Testimonials")
                ? { opacity: 1, y: 0 }
                : {}
            }
            transition={{ duration: 0.6 }}
          >
            <Testimonials />
          </motion.div>
          <motion.div
            id="KeepInTouch"
            initial={{ opacity: 0, y: 50 }}
            animate={
              visibleSections.includes("KeepInTouch")
                ? { opacity: 1, y: 0 }
                : {}
            }
            transition={{ duration: 0.6 }}
          >
            <KeepInTouch />
          </motion.div>
          <motion.div
            id="Footer"
            initial={{ opacity: 0, y: 50 }}
            animate={
              visibleSections.includes("Footer") ? { opacity: 1, y: 0 } : {}
            }
            transition={{ duration: 0.6 }}
          >
            <Footer />
          </motion.div>
        </>
      ) : (
        <EmailPage
          email={email}
          setEmail={setEmail}
          handleEmailSubmit={handleEmailSubmit}
          loading={loading}
        />
      )}
    </main>
  );
}

export default App;
