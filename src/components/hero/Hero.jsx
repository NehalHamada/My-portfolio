import HeroSocials from "./HeroSocials";

function Hero() {
  return (
    <div className="p-3 text-center">
      <p className="text-[#AB8DD6]">Hello, I'm</p>
      <h2 className="text-4xl font-bold bg-linear-to-b from-[#AB8DD6] via-[#E941B5] to-white bg-clip-text text-transparent mt-4">
        Nehal Hamada
      </h2>
      <p className="bg-linear-to-b from-[#AB8DD6] to-[#E642B8] bg-clip-text text-transparent mt-4">
        Frontend React.js Developer
      </p>
      <p className="text-[rgba(213,208,226,0.7)] mt-4">
        crafting beautiful ,responsive, and user-friendly web experiences with
        modern technologies
      </p>
      <HeroSocials />
    </div>
  );
}

export default Hero;
