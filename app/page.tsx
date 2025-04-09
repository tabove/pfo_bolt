"use client";

import { useEffect } from "react";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Work } from "@/components/sections/work";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export default function Home() {
    useScrollPosition();

 // ロード時にスクロール位置を復元するための処理
    useEffect(() => {
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Work />
      <Skills />
      <Contact />
    </>
  );
}