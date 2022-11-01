"use client";

import Flags from "./(PartyStuff)/Flags";
import Confetti from "./(PartyStuff)/Confetti";
import Gifts from "./(PartyStuff)/Gifts";
import Balloon from "./(PartyStuff)/Balloon";
import Cake from "./(PartyStuff)/Cake";
import PP from "./(PartyStuff)/PP";

const HappyBirthday = () => {
  return (
    <div className="relative w-[500px] h-screen transform-gpu bg-black">
      <Flags />
      <Confetti />
      <Gifts />
      <Balloon />
      <Cake />
      <PP />
    </div>
  );
};

export default HappyBirthday;
