import { contact } from "../../data/contactData";
import { sectionTitles } from "../../data/sectionTitles";
import SectionTitle from "../common/SectionTitle";
import { motion as Motion } from "framer-motion";

export default function Contact() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };
  const card = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };
  return (
    <div className="bg-[#F5F6F7]  p-2" id="contact">
      <SectionTitle title={sectionTitles.touch} />
      <Motion.div
        className="text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}>
        {contact.map((el) => (
          <Motion.div
            variants={card}
            key={el.name}
            className="flex card w-72 bg-[#5F6C89] card-sm shadow-sm mt-3 mx-auto">
            <div className="card-body">
              <div className="flex justify-center items-center gap-2">
                <el.icon className="text-white" />
                <h2 className="text-xl text-white">{el.name}</h2>
              </div>
              <div>
                <a
                  href={el.src}
                  target="blank"
                  className="card-title text-white cursor-pointer"></a>
              </div>
            </div>
          </Motion.div>
        ))}
      </Motion.div>
    </div>
  );
}
