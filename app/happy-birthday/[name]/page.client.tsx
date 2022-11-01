"use client";

import useSound from "use-sound";
import Confetti from "./(PartyStuff)/Confetti";
import Gifts from "./(PartyStuff)/Gifts";
import Cake from "./(PartyStuff)/Cake";
import { useEffect } from "react";

const HappyBirthday = ({ name, date }: { name: string; date: string }) => {
  //   console.log(new Date(date).getTime());

  const [play] = useSound(
    "/sounds/happy-birthday-to-you-bossa-nova-style-arrangement-21399.mp3",
    { loop: true }
  );

  useEffect(() => {
    play();
  }, []);

  play();

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen m-auto transform-gpu">
      {/* <Flags /> */}
      <h1 className="shrink-0 relative text-[#ff4791] text-5xl font-bold w-full p-8 text-center  ">
        <p className="text-4xl"> Happy Birthday To You</p>
        Mom
        <div className="absolute top-0 flex w-full">
          <Confetti className="w-full" />
          <Confetti className="w-full" />
          <Confetti className="w-full" />
        </div>
      </h1>
      <Cake className="w-full" />
      <div className="flex w-full">
        <Gifts className="w-full" />
        <Gifts className="w-full" />
        <Gifts className="w-full" />
      </div>
      {/* <Balloon /> */}

      {/* <PP /> */}
    </div>
  );
};

export default HappyBirthday;
