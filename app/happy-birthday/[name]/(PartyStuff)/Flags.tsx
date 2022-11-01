import { Player } from "@lottiefiles/react-lottie-player";

const Flags = ({ className }: { className?: string }) => {
  return (
    <Player
      src={"/lottiefiles/82607-flags-garland.json"}
      className={"absolute w-40 " + className}
      autoplay
      loop
    />
  );
};

export default Flags;
