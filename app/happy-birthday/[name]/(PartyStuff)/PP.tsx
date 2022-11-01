import { Player } from "@lottiefiles/react-lottie-player";

const PP = ({ className }: { className?: string }) => {
  return (
    <Player
      src={"/lottiefiles/11272-party-popper.json"}
      className={"absolute w-40 " + className}
      autoplay
      loop
    />
  );
};

export default PP;
