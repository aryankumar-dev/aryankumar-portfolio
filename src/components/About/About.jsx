import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <div className="about-section">
      <Particle />
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-center gap-8 py-4 md:flex-row">
          <div className="w-full pb-12 pt-8 md:w-7/12">
            <h1 className="pb-5 text-[2.1em]">
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </div>
          <div className="about-img w-full pb-12 pt-0 md:w-5/12 md:pt-[120px]">
            <img src={laptopImg} alt="about" className="img-fluid mx-auto" />
          </div>
        </div>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </div>
    </div>
  );
}

export default About;
