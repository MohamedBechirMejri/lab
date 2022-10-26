'use client'

import type { NextPage } from "next";
import { gsap } from "gsap";
import { useRef } from "react";

const Home: NextPage = () => {
  const indexRef = useRef(null);

  return (
    <div
      ref={indexRef}
      className="flex flex-col items-center justify-center min-h-screen py-2"
    >
      <h1> Welcome to my Lab</h1>
    </div>
  );
};

export default Home;
