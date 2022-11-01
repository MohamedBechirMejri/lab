"use client";

import type { NextPage } from "next";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { TextPlugin } from "gsap/TextPlugin";
import Image from "next/image";
import Link from "next/link";

const HomePage: NextPage = () => {
  const experiments = ["ugly-websites", "happy-birthday"];
  const indexRef = useRef(null);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const generateExperiment = () => {
    return experiments[Math.floor(Math.random() * experiments.length)];
  };

  const handleMouseEnter = () => {
    if (isAnimationComplete)
      gsap.context(() => {
        gsap.to(".dexter h1", {
          text: {
            value: "DeeDee Nooooooo!",
            delimiter: "  ",
          },
        });
      }, indexRef);
  };
  const handleMouseLeave = () => {
    if (isAnimationComplete)
      gsap.context(() => {
        gsap.to(".dexter h1", {
          text: {
            value: "Phew, Thank God",
            delimiter: "  ",
          },
        });
      }, indexRef);
  };

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);

    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".deedee img",
        { x: "150%" },
        { x: 0, delay: 1, duration: 0.3 }
      );
      gsap.to(".deedee h1", {
        text: {
          value: " Oooooh!",
          delimiter: "",
        },
        delay: 2,
        duration: 0.3,
      });
      gsap.to(".deedee h1", {
        text: {
          value: "What does this button do?",
          delimiter: "  ",
        },
        delay: 4,
      });
      gsap.fromTo(
        ".dexter img",
        { x: "-150%" },
        { x: 0, delay: 6, duration: 0.3 }
      );
      gsap.to(".dexter h1", {
        text: {
          value: "Take your friend and get out of my Laboratory!",
          delimiter: " ",
        },
        delay: 6.5,
        duration: 1,
        onComplete: () => setIsAnimationComplete(true),
      });
    }, indexRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={indexRef}
      className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-100"
    >
      <div className="absolute flex items-center gap-4 dexter top-8 left-8">
        <Image
          src={"/images/dexter.png"}
          alt="Dexter"
          width={200}
          height={200}
          id="dexterimg"
        />
        <h1 className="text-4xl font-bold origin-left text-[#ff4c02]"></h1>
      </div>

      <Link href={"/" + generateExperiment()}>
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="
        flex flex-col items-center justify-center
        after:flex after:flex-col after:items-center after:justify-center

        h-48 w-48 after:w-[inherit] after:h-[inherit]

        bg-green-500 after:bg-green-400 hover:bg-red-500 hover:after:bg-red-400
        border border-black

        after:[content:'Generate_random_Experiment!']
        hover:after:[content:'and_destroy_the_world']

        font-bold text-white uppercase

        transition-all after:transition-all rounded-full after:rounded-full shadow-xl

        after:-translate-y-6 active:after:translate-y-0"
        ></button>
      </Link>

      <div className="absolute flex items-center gap-4 deedee bottom-8 right-8">
        <h1 className="text-4xl font-bold origin-left text-[#ef649b]"></h1>
        <Image
          src={"/images/deedee.png"}
          alt="DeeDee"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default HomePage;
