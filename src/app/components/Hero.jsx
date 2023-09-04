"use client";

import { MaskText } from "./animation/MaskText";
import { HERO_PHRASE } from "./data";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="space-y-10">
      <MaskText
        phrases={HERO_PHRASE}
        className="text-4xl lg:text-7xl font-semibold"
      />
      <Button primary>Start Building</Button>
    </section>
  );
}
