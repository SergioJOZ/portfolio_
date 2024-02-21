"use client";

import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";


export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero/>
      <AboutMe />
      <Projects />
      <Contact />
    </main>
  );
}
