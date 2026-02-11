import { sectionTitles } from "../../data/sectionTitles";
import SectionTitle from "../common/SectionTitle";
import { aboutData } from "../../data/aboutCards";

function About() {
  return (
    <>
      <div className=" bg-[#101828] p-6 text-[#A2A5AC] text-center">
        <SectionTitle title={sectionTitles.about} />
        <div className="flex justify-center gap-6">
          <img
            src="/src/assets/images/formal.jpg"
            width={300}
            className="rounded-lg"
          />
          <div>
            <h5 className="max-w-md text-left mt-2">
              Frontend Developer with strong experience in React.js and modern
              JavaScript. Skilled in building responsive UI, managing
              application state, and delivering clean, scalable code. ITI
              graduate with practical experience in real-world projects and a
              passion for learning and performance-driven development.
            </h5>
            {aboutData.map((item) => (
              <div
                key={item.title}
                className="card w-96 bg-[#3F4959] card-sm shadow-sm mt-3">
                <div className="card-body">
                  <div className="flex gap-2">
                    <item.icons className="text-[#CB30E0]" />
                    <h2 className="card-title">{item.title}</h2>
                  </div>
                  <p>{item.subTitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
