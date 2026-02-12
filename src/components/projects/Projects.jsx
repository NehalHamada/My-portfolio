import { data } from "../../data/projects";
import { sectionTitles } from "../../data/sectionTitles";
import SectionTitle from "../common/SectionTitle";

function Projects() {
  return (
    <div className="bg-[#101828] p-2 text-[#A2A5AC] text-center">
      <SectionTitle title={sectionTitles.project} />

      <div
        className="
        mt-4
        flex md:flex-row
        justify-start md:justify-center
        gap-6
        overflow-x-auto md:overflow-visible
        snap-x snap-mandatory
        scroll-smooth
        px-2
      ">
        {data.map((item) => (
          <div
            key={item.name}
            className="
            bg-[#1E2939]
            rounded-xl
            shadow-sm
            min-w-full md:min-w-0
            md:w-96
            snap-center
          ">
            <figure>
              <img
                src={item.src}
                alt={item.name}
                className="w-full  object-cover rounded-t-xl"
              />
            </figure>

            <div className="p-6">
              <h2 className="text-white text-2xl font-semibold">{item.name}</h2>

              <p className="text-[#7D8A92] mt-3">{item.description}</p>

              <div className="flex flex-wrap justify-center gap-3 mt-4">
                {item.items.map((el) => (
                  <span
                    key={el}
                    className="text-[#AB8DD6] bg-[#3D3062] px-3 py-1 rounded-3xl text-sm">
                    {el}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
