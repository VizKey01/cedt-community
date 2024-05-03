"use client";
import { pageWording } from "@/config/wording";
import Typewriter from "typewriter-effect";

export function SubTitlesTypewriter() {
  return (
    // lock default height, so the page doesn't jump when the text changes
    <h3 className="text-inherit min-h-32 md:min-h-20">
      <Typewriter
        options={{
          strings: pageWording.home.subTitles,
          autoStart: true,
          loop: true,
          delay: 50,
          deleteSpeed: 25,
        }}
      />
    </h3>
  );
}
