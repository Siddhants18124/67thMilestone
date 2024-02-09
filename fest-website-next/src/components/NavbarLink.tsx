import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  name: string;
  link: string;
};

function NavbarLink({ name, link }: Props) {
  const pathname = usePathname();
  const isActive =
    pathname === "/" && link === "/"
      ? true
      : pathname.startsWith(link) && link !== "/";

  return (
    <li className={`${isActive ? "font-bold tracking-wider" : ""} `}>
      <Link href={link}>{name}</Link>
    </li>
  );
}

export default NavbarLink;
