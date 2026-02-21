import AnimatedText from "../../helper/AnimatedText";

function Hero() {
  return (
    <div className="p-3 text-center">
      <AnimatedText text="Hello, I'm" className="text-white text-lg" />
      <AnimatedText
        text="Nehal Hamada"
        className="text-4xl font-bold bg-white bg-clip-text text-transparent "
        speed={100}
      />
      <AnimatedText
        text="Frontend React.js Developer"
        className="bg-white bg-clip-text text-transparent mt-1"
        speed={60}
      />
      <AnimatedText
        text="crafting beautiful, responsive, and user friendly web experiences with modern technologies "
        className="text-white mt-1"
        speed={20}
      />
    </div>
  );
}

export default Hero;
