import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
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

function Home2() {
  return (
    <div className="home-about-section" id="about">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="home-about-description w-full md:w-8/12">
            <h1 className="text-3xl sm:text-[2.6em]">
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and have been building exciting
              things ever since… 🤷‍♂️
              <br />
              <br />
              I am fluent in classics like
              <i>
                <b className="purple"> C++, JavaScript, and Python. </b>
              </i>
              <br />
              <br />
              I am a <b className="purple">MERN Stack Developer</b> who
              specializes in building full stack applications using the{" "}
              <i>
                <b className="purple">MERN stack</b> (MongoDB, Express,
                React, Node.js).
              </i>
              <br />
              <br />
              I'm also passionate about <b className="purple">Generative AI</b>
              , and I integrate{" "}
              <b className="purple">Large Language Models (LLMs)</b> into my
              projects to build powerful, intelligent web applications.
              <br />
              <br />
              Whenever possible, I combine my skills in{" "}
              <b className="purple">Node.js</b> and modern JavaScript
              frameworks like <b className="purple">React.js</b> and{" "}
              <b className="purple">Next.js</b> with{" "}
              <b className="purple">Python-based AI tools</b> to push the
              boundaries of what web apps can do.
            </p>
          </div>
          <div className="myAvtar w-full md:w-4/12">
            <Tilt>
              <img src={myImg} className="img-fluid mx-auto" alt="avatar" />
            </Tilt>
          </div>
        </div>
        <div className="home-about-social w-full">
          <h1>FIND ME ON</h1>
          <p>
            Feel free to <span className="purple">connect </span>with me
          </p>
          <ul className="home-about-social-links flex list-none items-center justify-center">
            {SOCIAL_LINKS.map(({ href, icon: Icon }) => (
              <li key={href} className="social-icons">
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home2;
