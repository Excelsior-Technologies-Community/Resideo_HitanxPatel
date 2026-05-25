import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-wrapper bg-black text-white px-6 md:px-12 lg:px-24 py-20">

      <div className="footer-container max-w-[1400px] mx-auto flex flex-col gap-16">

        {/* Top */}
        <div className="footer-top flex flex-col min-[992px]:flex-row justify-between gap-16">

          {/* Left Side */}
          <div className="footer-left flex flex-col gap-10">

            <div className="footer-logoSection">
              <h2 className="footer-logo text-[28px] font-bold leading-none">
                resideo.
              </h2>

              <div className="footer-address mt-8 flex flex-col gap-3 text-gray-400 text-[15px]">
                <p>90 Fifth Avenue, 3rd Floor</p>
                <p>San Francisco, CA 1980</p>
                <p>(123) 456-7890</p>
              </div>
            </div>

            <div className="footer-social flex items-center gap-8 text-[25px]">

              <a
                href="/"
                className="footer-socialIcon hover:text-gray-400 transition-all duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="/"
                className="footer-socialIcon hover:text-gray-400 transition-all duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="/"
                className="footer-socialIcon hover:text-gray-400 transition-all duration-300"
              >
                <FaTwitter />
              </a>

            </div>
          </div>

          {/* Right Side */}
          <div className="footer-links grid grid-cols-1 md:grid-cols-3 gap-14 lg:gap-28">

            <div className="footer-column flex flex-col gap-5">

              <h3 className="footer-heading text-[28px] font-semibold">
                Company
              </h3>

              <div className="footer-menu flex flex-col gap-4 text-[15px] text-white">

                <a
                  href="/"
                  className="footer-link hover:text-gray-300 transition-all duration-300"
                >
                  Agents
                </a>

                <a
                  href="/"
                  className="footer-link hover:text-gray-300 transition-all duration-300"
                >
                  Property Search
                </a>

                <a
                  href="/"
                  className="footer-link hover:text-gray-300 transition-all duration-300"
                >
                  Blog
                </a>

                <a
                  href="/"
                  className="footer-link hover:text-gray-300 transition-all duration-300"
                >
                  Contact Us
                </a>

              </div>
            </div>

            <div className="footer-column flex flex-col gap-5">

              <h3 className="footer-heading text-[28px] font-semibold">
                Services
              </h3>

              <div className="footer-menu flex flex-col gap-4 text-[15px] text-white">

                <a
                  href="/"
                  className="footer-link hover:text-gray-300 transition-all duration-300"
                >
                  Buy Properties
                </a>

                <a
                  href="/"
                  className="footer-link hover:text-gray-300 transition-all duration-300"
                >
                  Sell Properties
                </a>

                <a
                  href="/"
                  className="footer-link hover:text-gray-300 transition-all duration-300"
                >
                  Rent Properties
                </a>

              </div>
            </div>

            <div className="footer-column flex flex-col gap-5">

              <h3 className="footer-heading text-[28px] font-semibold">
                Explore
              </h3>

              <div className="footer-menu flex flex-col gap-4 text-[15px] text-white">

                <a
                  href="/"
                  className="footer-link hover:text-gray-300 transition-all duration-300"
                >
                  Homes for Rent
                </a>

                <a
                  href="/"
                  className="footer-link hover:text-gray-300 transition-all duration-300"
                >
                  Apartments for Rent
                </a>

                <a
                  href="/"
                  className="footer-link hover:text-gray-300 transition-all duration-300"
                >
                  Homes for Sale
                </a>

                <a
                  href="/"
                  className="footer-link hover:text-gray-300 transition-all duration-300"
                >
                  Apartments for Sale
                </a>

              </div>
            </div>

          </div>
        </div>

        <div className="footer-bottom pt-1">

          <p className="footer-copy text-gray-500 text-[18px]">
            © 2020 Resideo.
          </p>

        </div>

      </div>

    </footer>
  );
}