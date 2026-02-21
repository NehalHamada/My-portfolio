import { useState, useRef, useEffect } from "react";
import { colors, data } from "../../data/projects";
import { sectionTitles } from "../../data/sectionTitles";
import SectionTitle from "../common/SectionTitle";
import { motion as Motion } from "framer-motion";

function Projects() {
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
    <div className="bg-[#F5F6F7] p-2  text-center">
      <SectionTitle title={sectionTitles.project} />
      <Motion.div
        ref={carouselRef}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="
          mt-4 flex md:flex-row justify-start md:justify-center gap-6 
          overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth px-2
        ">
        {data.map((item) => (
          <Motion.div
            variants={card}
            key={item.id}
            className="
              rounded-xl shadow-sm min-w-full md:min-w-0 md:w-96 snap-center
            ">
            <figure>
              <img
                src={item.src}
                alt={item.name}
                className="w-full object-cover rounded-t-xl"
              />
            </figure>
            <div className="p-6">
              <h2 className="text-2xl font-semibold">{item.name}</h2>
              <p className="text-[#4A5565] mt-3">{item.description}</p>
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                {item.items.map((el, index) => (
                  <span
                    key={el}
                    className={`text-[#ffff] ${colors[index % colors.length]} px-3 py-1 rounded-3xl text-sm`}>
                    {el}
                  </span>
                ))}
              </div>
              <div className="flex justify-center gap-2 mt-3">
                {item.icons.map((Icon) => (
                  <div key={Icon}>
                    <a href={Icon.src} target="blank">
                      <Icon.name className="text-black" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </Motion.div>
        ))}
      </Motion.div>
      <div className="flex justify-center mt-4 gap-2 md:hidden">
        {data.map((_, idx) => (
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

export default Projects;
