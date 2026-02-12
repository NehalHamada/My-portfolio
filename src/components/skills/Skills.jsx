import { sectionTitles } from "../../data/sectionTitles";
import { frontSkill, tools } from "../../data/skills";
import SectionTitle from "../common/SectionTitle";

function Skills() {
  return (
    <div className="bg-[#1E2939] text-[#A6AAB0] text-center p-3">
      <SectionTitle title={sectionTitles.skills} />

      <div
        className="mt-4 
                      flex md:flex-row 
                      gap-6 
                      overflow-x-auto md:overflow-visible
                      snap-x snap-mandatory
                      scroll-smooth">
        {/* First Card */}
        <div
          className="bg-[#0b1220] p-6 rounded-xl 
                        min-w-full md:min-w-0 
                        md:w-full max-w-xl 
                        snap-center">
          <h2 className="text-gray-300 text-lg mb-6">Frontend</h2>

          {frontSkill.map((el) => (
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
        </div>

        {/* Second Card */}
        <div
          className="bg-[#0b1220] p-6 rounded-xl 
                        min-w-full md:min-w-0 
                        md:w-full max-w-xl 
                        snap-center">
          <h2 className="text-gray-300 text-lg mb-6">Tools</h2>

          {tools.map((el) => (
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
        </div>
      </div>
    </div>
  );
}

export default Skills;
