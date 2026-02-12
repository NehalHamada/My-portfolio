import { useEffect, useRef, useState } from "react";
import { sectionTitles } from "../../data/sectionTitles";
import { frontSkill, tools } from "../../data/skills";
import SectionTitle from "../common/SectionTitle";
import { motion as Motion } from "framer-motion";

function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };
  const card = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };
  const cards = [
    { title: "Frontend", skills: frontSkill },
    { title: "Tools", skills: tools },
  ];
  useEffect(() => {
    const carousel = carouselRef.current;
    const handleScroll = () => {
      const scrollLeft = carousel.scrollLeft;
      const cardWidth = carousel.offsetWidth;
      const index = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(index);
    };
    carousel.addEventListener("scroll", handleScroll);
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="bg-[#1E2939] text-[#A6AAB0] text-center p-3">
      <SectionTitle title={sectionTitles.skills} />
      <Motion.div
        ref={carouselRef}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="
          mt-4 flex md:flex-row gap-6 justify-start md:justify-center
          overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth
        ">
        {cards.map((cardData) => (
          <Motion.div
            key={cardData.title}
            variants={card}
            className="
              bg-[#0b1220] p-6 rounded-xl min-w-full md:min-w-0 
              md:w-full max-w-xl snap-center
            ">
            <h2 className="text-gray-300 text-lg mb-6">{cardData.title}</h2>
            {cardData.skills.map((el) => (
              <div key={el.name} className="mb-5">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>{el.name}</span>
                  <span>{el.level}%</span>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-linear-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-700"
                    style={{ width: `${el.level}%` }}></div>
                </div>
              </div>
            ))}
          </Motion.div>
        ))}
      </Motion.div>
      <div className="flex justify-center mt-4 gap-2 md:hidden">
        {cards.map((_, idx) => (
          <span
            key={idx}
            className={`h-2 w-2 rounded-full transition-all ${
              currentIndex === idx ? "bg-[#AB8DD6] w-4" : "bg-[#7D8A92]"
            }`}></span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
