import React from "react";
import { MaskText } from "./animation/MaskText";
import { About_PHRASE } from "./data";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row gap-10 justify-between"
    >
      <MaskText
        className="text-3xl lg:text-4xl font-semibold"
        phrases={["About Us"]}
      />
      <MaskText phrases={About_PHRASE} className="text-xl lg:text-2xl" />
    </section>
  );
}
