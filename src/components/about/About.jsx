import { sectionTitles } from "../../data/sectionTitles";
import SectionTitle from "../common/SectionTitle";
import { aboutData } from "../../data/aboutCards";
import person from "../../assets/images/formal.jpg";
import { motion as Motion } from "framer-motion";

function About() {
  return (
    <>
      <div className=" bg-white p-6 text-center">
        <SectionTitle title={sectionTitles.about} />
        <Motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 ">
          <img
            src={person}
            width={300}
            className="rounded-lg hidden md:block"
          />
          <div>
            <h5 className="max-w-md text-left mt-2 ms-4 sm:ms-0">
              Frontend Developer with strong experience in React.js and modern
              JavaScript. Skilled in building responsive UI, managing
              application state, and delivering clean, scalable code. ITI
              graduate with practical experience in real-world projects and a
              passion for learning and performance-driven development.
            </h5>
            {aboutData.map((item) => (
              <div
                key={item.title}
                className="card w-90 bg-white card-sm shadow-sm mt-3 ms-4 sm:ms-0">
                <div className="card-body">
                  <div className="flex gap-2">
                    <item.icons className="text-[rgba(0,0,0,0.7)]" />
                    <h2 className="card-title ">{item.title}</h2>
                  </div>
                  <p className="text-[#848990]">{item.subTitle}</p>
                </div>
              </div>
            ))}
          </div>
        </Motion.div>
      </div>
    </>
  );
}

export default About;
