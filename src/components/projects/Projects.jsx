import { data } from "../../data/projects";
import { sectionTitles } from "../../data/sectionTitles";
import SectionTitle from "../common/SectionTitle";

function Projects() {
  return (
    <div className="bg-[#101828] p-2 text-[#A2A5AC] text-center">
      <SectionTitle title={sectionTitles.project} />
      <div className="flex justify-center gap-7 mt-2 p-2 ">
        {data.map((item) => (
          <div key={item.name} className="card  w-96 shadow-sm bg-[#1E2939]">
            <figure>
              <img src={item.src} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white text-3xl">{item.name}</h2>
              <p className="text-[#7D8A92]">{item.description}</p>
              <div className="card-actions justify-center gap-4">
                {item.items.map((el) => (
                  <div key={el}>
                    <p className="text-[#AB8DD6] bg-[#3D3062] p-2 rounded-3xl">
                      {el}
                    </p>
                  </div>
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
