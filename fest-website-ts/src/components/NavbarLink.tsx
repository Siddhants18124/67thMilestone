import { Link, useLocation } from "react-router-dom";

type Props = {
  name: string;
  link: string;
};

function NavbarLink({ name, link }: Props) {
  const url = useLocation();
  const isActive =
    url.pathname === "/" && link === "/"
      ? true
      : url.pathname.startsWith(link) && link !== "/";
      
  return (
    <li className={`${isActive ? "font-bold tracking-wider" : ""} `}>
      <Link to={link}>{name}</Link>
    </li>
  );
}

export default NavbarLink;
