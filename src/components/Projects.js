
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/interpreter.jpg";
import projImg2 from "../assets/img/gamehub.jpg";
import projImg3 from "../assets/img/ultron_reco.jpg";
import projImg4 from "../assets/img/topical_reco.jpg";
import projImg5 from "../assets/img/edu.jpg";
import projImg6 from "../assets/img/dremio.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "Ultron",
      description: "Dots recommends the related items available",
      imgUrl: projImg3,
      deploy: "https://www.myntra.com/shirts/arrow/arrow-men-modern-spread-collar-solid-cotton-slim-fit-casual-shirt/30679420/buy",
    },
    {
      title: "Topical Repo",
      description: "Gives general recommendation after going for purchase",
      imgUrl: projImg4,
      deploy: "https://www.myntra.com/shirts/snitch/snitch-men-smart-spread-collar-abstract-printed-casual-shirt/31432244/buy",
    }
  ];
  const projects2 = [
    {
      title: "Instrucko",
      description: "Education Platform",
      imgUrl: projImg5,
      deploy: "https://www.instrucko.com/",
    },
    {
      title: "Dremio",
      description: "Intelligent Lakehouse Platform",
      imgUrl: projImg6,
      deploy: "https://www.dremio.com/",
    }
  ];
  const projects3 = [
    {
      title: "Research Intern",
      description: "Custom Scripting Language along with its Interpreter",
      imgUrl: projImg1,
      deploy: "https://custom-language-interpreter.vercel.app/",
    },
    {
      title: "Find Your Game",
      description: " A Game Discovery App",
      imgUrl: projImg2,
      deploy: "https://game-hub-theta-pearl.vercel.app/",
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 className="mb-3">Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first" >
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Myntra Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Beehyv Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Personal Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <p>Worked as a Backend Software Engineer on the Recommendation Team at Myntra, contributing to the Ultron and Topical Recommendation projects, which deliver personalized item suggestions to customers.</p>
                      <Row  className="justify-content-center text-center">
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Worked as a Full Stack Developer at Beehyv, contributing to projects for clients such as Instrucko (an education platform) and Dremio (an intelligent lakehouse platform). Developed numerous backend APIs and designed modular schema models to support scalable and efficient system architecture.</p>
                      <Row  className="justify-content-center text-center">
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Completed a research internship under Prof. Samit Bhattacharya, where I developed a custom scripting language in TypeScript, including its lexer, parser, and interpreter. Additionally, built a personal project — a Game Finder App — that allows users to discover games based on genre, platform, popularity,etc.</p>
                      <Row  className="justify-content-center text-center">
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
