"use client";
import Image from "next/image";
import Header from "../components/Header";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

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
