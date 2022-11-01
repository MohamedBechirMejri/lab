import { Player } from "@lottiefiles/react-lottie-player";

const Balloon = ({ className }: { className?: string }) => {
  return (
    <Player
      src={"/lottiefiles/86274-red-balloon.json"}
      className={
        "absolute w-40 " + className
      }
      autoplay
      loop
    />
  );
};

export default Balloon;
