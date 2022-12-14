import { Player } from "@lottiefiles/react-lottie-player";

const Gifts = ({ className }: { className?: string }) => {
  return (
    <Player
      src={"/lottiefiles/89021-jumping-gift-boxes.json"}
      className={className}
      autoplay
      loop
    />
  );
};

export default Gifts;
