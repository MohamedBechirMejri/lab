import { Player } from "@lottiefiles/react-lottie-player";

const Cake = ({ className }: { className?: string }) => {
  return (
    <Player
      src={"/lottiefiles/99495-happy-birthday.json"}
      className={
        "absolute w-40 " + className
      }
      autoplay
      loop
    />
  );
};

export default Cake;
