import { skills } from "../../data/skills";
import SectionTitle from "../common/SectionTitle";
import { motion as Motion } from "framer-motion";

function Skills() {
  return (
    <>
      <SectionTitle title="Skills & Tools" />
      <div className="flex justify-center flex-col md:flex-row items-start md:items-center gap-6 p-6 bg-white">
        <Motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}>
          <ul className="mt-4 space-y-3 text-left text-gray-800">
            {skills.map((skill) => (
              <li key={skill.title}>
                <span className="font-bold">{skill.title} – </span>
                {skill.description}
              </li>
            ))}
          </ul>
        </Motion.div>

        <div className="flex gap-6 mt-2 md:mt-0 md:ml-6">
          {skills.map((skill) => (
            <Motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              key={skill.title}>
              <img
                src={skill.src}
                alt={skill.title}
                className="w-12 h-12 object-contain"
              />
            </Motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
