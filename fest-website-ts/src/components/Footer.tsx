import { Logo } from "../assets";

function Footer() {
  return (
    <footer className="text-white">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <img src={Logo} alt="" />
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          consequuntur amet culpa cum itaque neque.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
