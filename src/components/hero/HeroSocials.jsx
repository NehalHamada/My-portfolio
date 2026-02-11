import { GithubIcon, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSocials() {
  return (
    <div className="flex justify-center items-center gap-2 mt-2">
      <a
        href="https://github.com/NehalHamada"
        target="blank"
        className="bg-[#101828] p-1.5 rounded-full">
        <GithubIcon size={24} className="cursor-pointer text-white" />
      </a>
      <a
        href="https://www.linkedin.com/in/nehal-hamada"
        target="blank"
        className="bg-[#101828] p-1.5 rounded-full">
        <Linkedin size={24} className="cursor-pointer text-white" />
      </a>
      <a
        href="mailto:nehalhamada2001@gmail.com"
        className="bg-[#101828] p-1.5 rounded-full">
        <Mail size={24} className="cursor-pointer text-white" />
      </a>
    </div>
  );
}
