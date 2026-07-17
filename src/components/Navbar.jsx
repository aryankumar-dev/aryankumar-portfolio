import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

const SCROLL_THRESHOLD = 20;

const NAV_LINKS = [
  { to: "/", label: "Home", icon: AiOutlineHome },
  { to: "/about", label: "About", icon: AiOutlineUser },
  { to: "/project", label: "Projects", icon: AiOutlineFundProjectionScreen },
  { to: "/experience", label: "Experience", icon: AiOutlineFundProjectionScreen },
  { to: "/resume", label: "Resume", icon: CgFileDocument },
  { to: "/blog", label: "Blog", icon: AiOutlineFundProjectionScreen },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY >= SCROLL_THRESHOLD);
    }

    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    }

    handleScroll();
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`navbar ${isScrolled ? "sticky" : ""} fixed top-0 left-0 right-0 z-50`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="navbar-brand flex items-center">
          <img src={logo} alt="brand" className="w-24 sm:w-[150px]" />
        </Link>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className={`nav-toggle md:hidden ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          className={`${isOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-1 bg-[#181a27] px-4 py-4 md:static md:flex md:flex-row md:items-center md:gap-2 md:bg-transparent md:p-0 md:relative md:w-auto`}
        >
          {NAV_LINKS.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className="nav-link"
            >
              <Icon className="-mb-0.5 inline" /> {label}
            </Link>
          ))}
          <a
            href="https://github.com/aryankumar-dev/aryankumar-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="fork-btn-inner mt-2 inline-flex items-center justify-center gap-1 rounded md:ml-4 md:mt-0"
          >
            <CgGitFork className="text-lg" /> <AiFillStar className="text-base" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
