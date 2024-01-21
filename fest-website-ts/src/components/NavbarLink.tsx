import React from "react";
import { Link, useLocation } from "react-router-dom";

type Props = {
  name: string;
  link: string;
};

function NavbarLink({ name, link }: Props) {
  const url = useLocation();
  const isActive = link === url.pathname;
  return (
    <li className={`${isActive ? "font-bold tracking-wider" : ""} `}>
      <Link to={link}>{name}</Link>
    </li>
  );
}

export default NavbarLink;
