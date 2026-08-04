"use client";

import { useEffect } from "react";
import Footer from "@/components/layout/Footer";
import SectionNetwork from "@/components/home/SectionNetwork";
import SectionKNight from "@/components/home/SectionKNight";
import SectionOverview from "@/components/home/SectionOverview";
import SectionPastKNight from "@/components/home/SectionPastKNight";

export default function HomePage() {
  useEffect(() => {
    const scrollToHash = () => {
      const { hash } = window.location;
      if (!hash) return;
      const id = hash.replace(/^#/, "");
      const target = document.getElementById(id);
      if (!target) return;

      requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <main className="home-page">
      <SectionOverview />
      <SectionKNight />
      <SectionPastKNight />
      <SectionNetwork />
      <Footer />
    </main>
  );
}
