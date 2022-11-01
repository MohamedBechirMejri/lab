"use client";

import useSound from "use-sound";
import Confetti from "./(PartyStuff)/Confetti";
import Gifts from "./(PartyStuff)/Gifts";
import Cake from "./(PartyStuff)/Cake";
import { useEffect } from "react";

const HappyBirthday = () => {
  const [play] = useSound(
    "/sounds/happy-birthday-to-you-bossa-nova-style-arrangement-21399.mp3",
    { loop: true }
  );

  useEffect(() => {
    play();
  }, []);

  play();

  return (
    <div className="relative max-w-[500px] h-screen transform-gpu mx-auto">
      {/* <Flags /> */}
      <h1 className="text-[#ff4791] text-4xl font-bold w-full p-8 text-center  ">
        <p className="text-3xl"> Happy Birthday To You</p>
        Mom
      </h1>
      <div className="absolute top-0 flex">
        <Confetti className="" />
        <Confetti className="" />
        <Confetti className="" />
      </div>
      <div className="absolute bottom-0 flex">
        <Gifts className="" />
        <Gifts className="" />
        <Gifts className="" />
      </div>
      {/* <Balloon /> */}
      <Cake className="top-1/2 w-[100%!important] -translate-y-1/2" />

      {/* <PP /> */}
    </div>
  );
};

export default HappyBirthday;
