import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <div className="home-section relative" id="home">
        <Particle />
        <div className="home-content mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="home-header w-full text-center md:w-7/12 md:text-left">
              <h1 className="heading pb-4">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Aryan Kumar</strong>
              </h1>

              <div className="p-6 text-center sm:p-12 md:text-left">
                <Type />
              </div>
            </div>

            <div className="w-full pb-5 md:w-5/12">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid max-h-[300px] w-full sm:max-h-[450px]"
              />
            </div>
          </div>
        </div>
      </div>
      <Home2 />
    </section>
  );
}

export default Home;
