import { Card, CardContent } from "@/components/ui/card";
import { ImPointRight } from "react-icons/im";

const ACTIVITIES = [
  "Writing Tech Blogs on Web Development, Python, and AI",
  "Experimenting with Generative AI and API Integrations",
  "Travelling & Exploring New Places",
];

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <CardContent className="p-6">
        <blockquote className="blockquote mb-0">
          <p className="text-justify">
            Hey there! I'm <span className="purple">Aryan Kumar</span> from{" "}
            <span className="purple">Sasaram, India</span>.
            <br />
            I graduated in 2024 from{" "}
            <span className="purple">Chandigarh University</span> with a
            degree in Computer Science.
            <br />
            I have{" "}
            <span className="purple">1 year of professional experience</span>{" "}
            as a Full Stack Web Developer at{" "}
            <span className="purple">Protolab Services</span>.
            <br />
            My core skills revolve around{" "}
            <span className="purple">
              MERN Stack (MongoDB, Express.js, React.js, Node.js)
            </span>
            , and <span className="purple">Python</span> — especially for
            backend development and experimenting with{" "}
            <span className="purple">Generative AI</span> and automation.
            <br />
            <br />
            I'm deeply enthusiastic about leveraging{" "}
            <span className="purple">AI, APIs, Cloud technologies</span>, and
            modern development tools to build impactful software solutions.
            <br />
            <br />
            Apart from coding, I enjoy spending time on:
          </p>
          <ul>
            {ACTIVITIES.map((activity) => (
              <li key={activity} className="about-activity">
                <ImPointRight /> {activity}
              </li>
            ))}
          </ul>

          <p className="text-[rgb(155,126,172)]">
            "Build with curiosity, code with purpose — always explore what's
            next in tech."
          </p>
          <footer className="blockquote-footer">Aryan Kumar</footer>
        </blockquote>
      </CardContent>
    </Card>
  );
}

export default AboutCard;
