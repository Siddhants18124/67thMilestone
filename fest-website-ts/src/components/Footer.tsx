import { Link } from "react-router-dom";
import footer from "../assets/navbarimg.png";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <footer className="bg-transparent">
      <div className="mx-auto max-w-screen-3xl px-4 pb-6 pt-16 xl:ml-7 sm:px-6  lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="xl:mr-16">
            <h1 className="text-3xl text-white font-bold mb-4">
              67th Milestone Hero's Challenge
            </h1>
            <div className="border  p-4 mx-auto col-span-full  ">
              <p className="flex-grow text-white">
                BMU’s prestigious fest, full of fun-filled activities and many
                competitions, alongside shows and performances that elevate the
                experience of anyone who is fortunate enough to experience it.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 xl:ml-38 md:ml-32">
            <div className="text-center sm:text-left">
              <p className="text-3xl font-bold  text-white ">Support</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="text-white transition hover:text-gray-300/75"
                    href="https://bmu.edu.in"
                    target="_blank"
                  >
                    BMU
                  </a>
                </li>
                <li>
                  <Link
                    className="text-white transition hover:text-gray-300/75"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white transition hover:text-gray-300/75"
                    to="/events"
                  >
                    Events
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-center sm:text-left xl:ml-18">
              <p className="text-3xl font-bold text-white">Social Media</p>

              <ul className="mt-8 flex justify-center items-center gap-6 sm:justify-start md:gap-8">
                <li>
                  <a
                    href="https://www.linkedin.com/in/bml-munjal-university-1990b4152?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white transition hover:text-gray-400"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/67thmilestone_heroschallenge?igsh=YnE1MHMxa2xrOWh5"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white transition hover:text-gray-400"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://x.com/BMLUniv?t=soyuXNbP0H8Kkmaa41bDAg&s=09"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white transition hover:text-gray-400"
                  >
                    <span className="sr-only">Twitter</span>
                    <SocialIcon
                      className="h-8 w-8"
                      url="https://x.com/BMLUniv?t=soyuXNbP0H8Kkmaa41bDAg&s=09"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            {/* <p className="text-sm text-gray-500">
              <span className="block sm:inline">All rights reserved.</span>

              <a
                className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                href="/"
              >
                Terms & Conditions
              </a>

              <span>&middot;</span>

              <a
                className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                href="/"
              >
                Privacy Policy
              </a>
            </p> */}
            <img
              srcSet={footer}
              alt="Small Image"
              className="mb-1 w-36 h-18 xl:mr-10 m-auto  "
            />

            <p className="mt-4 text-sm text-gray-300 sm:order-first sm:mt-0 ">
              &copy; 2024 BML Munjal University
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
