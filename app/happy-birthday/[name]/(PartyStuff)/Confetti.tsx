import { Player } from "@lottiefiles/react-lottie-player";

const Confetti = ({ className }: { className?: string }) => {
  return (
    <Player
      src={"/lottiefiles/76411-confetti-effects-lottie-animation.json"}
      className={className}
      autoplay
      loop
    />
  );
};

export default Confetti;
