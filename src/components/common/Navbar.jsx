import { useState } from "react";
import personal from "../../assets/images/formal.jpg";
import { list } from "../../data/navbarData";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-white p-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            className="rounded-full"
            src={personal}
            alt="profile"
            width={35}
            height={35}
          />
        </div>

        <div className="hidden md:flex gap-6">
          {list.map((item) => (
            <a
              key={item.name}
              href={`#${item.id}`}
              className="hover:text-purple-400 transition me-2">
              {item.name}
            </a>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col mt-4 gap-4 md:hidden">
          {list.map((item) => (
            <a
              key={item.name}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="border-b border-gray-700 pb-2 text-center">
              {item.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
