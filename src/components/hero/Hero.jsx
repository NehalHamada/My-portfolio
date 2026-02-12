import AnimatedText from "../../helper/AnimatedText";
import HeroSocials from "./HeroSocials";

function Hero() {
  return (
    <div className="p-3 text-center">
      <AnimatedText text="Hello, I'm" className="text-[#AB8DD6] text-lg" />
      <AnimatedText
        text="Nehal Hamada"
        className="text-4xl font-bold bg-linear-to-b from-[#AB8DD6] via-[#E941B5] to-white bg-clip-text text-transparent mt-4"
        speed={100}
      />
      <AnimatedText
        text="Frontend React.js Developer"
        className="bg-linear-to-b from-[#AB8DD6] to-[#E642B8] bg-clip-text text-transparent mt-4"
        speed={60}
      />
      <AnimatedText
        text="crafting beautiful, responsive, and user friendly web experiences with modern technologies "
        className="text-[rgba(213,208,226,0.7)] mt-4"
        speed={20}
      />

      <HeroSocials />
    </div>
  );
}

export default Hero;
