import personal from "../../assets/images/formal.jpg";
import { list } from "../../data/navbarData";

function Navbar() {
  return (
    <div className="p-3 flex justify-between">
      <img className="rounded-full me-3" src={personal} alt="" width={30} />
      <div className="flex justify-between">
        {list.map((item) => (
          <a key={item.name} href={`#${item.id}`} className="text-white me-4">
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
