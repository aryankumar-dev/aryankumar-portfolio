import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const SOCIAL_LINKS = [
  { href: "https://github.com/aryankumar-dev", icon: AiFillGithub },
  { href: "https://x.com/aryankumar_dev", icon: AiOutlineTwitter },
  { href: "https://www.linkedin.com/in/aryankumar-dev", icon: FaLinkedinIn },
  { href: "https://www.instagram.com/socialaryan.ig", icon: AiFillInstagram },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer w-full">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-2 px-4 text-center sm:grid-cols-3">
        <div className="footer-copywright">
          <h3>Designed and Developed by Aryan Kumar</h3>
        </div>
        <div className="footer-copywright">
          <h3>Copyright © {year} Aryan</h3>
        </div>
        <div className="footer-body">
          <ul className="footer-icons flex list-none items-center justify-center">
            {SOCIAL_LINKS.map(({ href, icon: Icon }) => (
              <li key={href} className="social-icons">
                <a
                  href={href}
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
