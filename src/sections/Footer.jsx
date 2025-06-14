import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white w-full">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-start gap-16">
          {/* Logo & Description */}
          <div className="max-w-sm">
            <a href="/" aria-label="Homepage">
              <img
                src={footerLogo}
                alt="Nike logo"
                width={150}
                height={46}
                className="object-contain"
                loading="lazy"
              />
            </a>
            <p className="mt-6 text-base leading-7 font-montserrat text-gray-400">
              Get shoes ready for the new term at your nearest Nike store. Find
              your perfect size in-store and earn exclusive rewards.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              {socialMedia.map((item, index) => (
                <a
                  key={index}
                  href={item.link || "#"}
                  aria-label={item.alt}
                  className="w-10 h-10 flex items-center justify-center bg-white rounded-full hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    width={20}
                    height={20}
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Link Sections */}
          <div className="flex flex-1 flex-wrap justify-between gap-10">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h4 className="text-xl font-semibold font-montserrat mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((linkItem, idx) => (
                    <li key={idx}>
                      <a
                        href={linkItem.link}
                        className="text-gray-400 text-base hover:text-white transition-colors duration-300"
                      >
                        {linkItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 mt-16" />

        {/* Bottom Section */}
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm font-montserrat">
            <img
              src={copyrightSign}
              alt="copyright"
              width={18}
              height={18}
              className="object-contain"
              loading="lazy"
            />
            <span>© {new Date().getFullYear()} All rights reserved.</span>
          </div>
          <a
            href="#"
            className="text-gray-400 text-sm hover:text-white font-montserrat transition-colors duration-300"
          >
            Terms &amp; Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
