import { sidebarLinks } from "@/constants";
import { Link, useLocation } from "react-router-dom";

const Bottombar = () => {
  const { pathname } = useLocation();

  return (
    <section className="bottom-bar">
      {sidebarLinks.map((link) => {
        return (
          <Link
            key={`bottombar-${link.label}`}
            to={link.route}
            className={`${
              pathname.startsWith(link.route) &&
              "rounded-[10px] bg-primary-500 "
            } flex-center flex-col gap-1 p-2 transition`}
          >
            <img
              src={link.imgURL}
              alt={link.label}
              width={25}
              height={25}
              className={`${pathname.startsWith(link.route) && "invert-white"}`}
            />
          </Link>
        );
      })}
    </section>
  );
};

export default Bottombar;
