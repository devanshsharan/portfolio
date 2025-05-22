import meter1 from "../assets/img/icons8-c++.svg";
import meter2 from "../assets/img/icons8-java.svg";
import meter3 from "../assets/img/icons8-javascript.svg";
import meter4 from "../assets/img/icons8-typescript.svg";
import meter5 from "../assets/img/icons8-golang.svg";
import meter6 from "../assets/img/icons8-nodejs.svg";
import meter7 from "../assets/img/icons8-spring-boot.svg";
import meter8 from "../assets/img/icons8-express-js.svg";
import meter9 from "../assets/img/icons8-react.svg";
import meter10 from "../assets/img/icons8-angular.svg";
import meter11 from "../assets/img/icons8-postgres.svg";
import meter12 from "../assets/img/icons8-mongodb.svg";
import meter13 from "../assets/img/icons8-mysql.svg";
import meter14 from "../assets/img/icons8-docker.svg";
import meter15 from "../assets/img/icons8-aws.svg";
import meter16 from "../assets/img/icons8-amazon-s3.svg";
import meter17 from "../assets/img/icons8-awslambda.svg";
import meter18 from "../assets/img/icons8-google-cloud.svg";
import meter19 from "../assets/img/icons8-grafana.svg";
import meter20 from "../assets/img/icons8-prometheus.svg";
import arrowDown from "../assets/img/down-arrow.svg";
import arrowUp from "../assets/img/up-arrow.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skillData1 = [
    {
      img: meter1,
      name: "C++",
      project: "Used in solving DSA problems and in Competitive Programming."
    },
    {
      img: meter2,
      name: "Java",
      project: "Used in approx all the projects i worked in myntra and Beehyv."
    },
    {
      img: meter3,
      name: "JavaScript",
      project: "Frontend scripting in legacy UI at Myntra."
    },
    {
      img: meter4,
      name: "TypeScript",
      project: "Build a custom scripting language andits interpreter in typescript."
    }
  ];
  const skillData2 = [
    {
      name: "Node",
      img: meter6,
      project: "Used in making an video calling application at college",
    },
    {
      name: "Spring Boot",
      img: meter7,
      project: "Used in approx all the projects i worked in myntra and Beehyv",
    },
    {
      name: "Angular",
      img: meter10,
      project: "Used in making frontend at Beehyv",
    },
    {
      name: "React",
      img: meter9,
      project: "Used in making frontend at Myntra",
    },
  ];
  const skillData3 = [
    {
      name: "MongoDB",
      img: meter12,
      project: "Used this data base in ultron and topical project in Myntra",
    },
    {
      name: "MySQL",
      img: meter13,
      project: "Used this data base in beehyv projects",
    },
    {
      name: "Docker",
      img: meter14,
      project: "Used in approx all the projects i worked in myntra and Beehyv",
    },
    {
      name: "AWS",
      img: meter15,
      project: "Worktrot project i worked at beehyv was deployed at aws Lambda and use aws s3 as well to store images and videos",
    },
  ];
    
  const [expandedIndex, setExpandedIndex] = useState({
    group1: null,
    group2: null,
    group3: null,
  });
  const [timeouts, setTimeouts] = useState({});

  const toggleExpand = (group, index) => {
    const timeoutKey = `${group}-${index}`;
  
    // Clear existing timeout if already set
    if (timeouts[timeoutKey]) {
      clearTimeout(timeouts[timeoutKey]);
    }
  
    setExpandedIndex((prev) => ({
      ...prev,
      [group]: prev[group] === index ? null : index,
    }));
  
    // Only set timeout if expanding (not collapsing)
    if (expandedIndex[group] !== index) {
      const newTimeout = setTimeout(() => {
        setExpandedIndex((prev) => ({
          ...prev,
          [group]: null,
        }));
      }, 120000); // 2 minutes
  
      setTimeouts((prev) => ({
        ...prev,
        [timeoutKey]: newTimeout,
      }));
    }
  };
  const [showMoreSkills, setShowMoreSkills] = useState(false);
  const timeoutRef = useRef(null);

// Effect to close automatically after 5 seconds if opened
useEffect(() => {
  if (showMoreSkills) {
    timeoutRef.current = setTimeout(() => {
      setShowMoreSkills(false);
    }, 120000);
  }

  // Cleanup on unmount or when showMoreSkills changes
  return () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };
}, [showMoreSkills]);

const toggleShowMoreSkills = () => {
  setShowMoreSkills((prev) => !prev); // Just toggles
};
  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {skillData1.map((skill, index) => (
                  <div className="item" key={index}>
                    <img src={skill.img} alt={skill.name} />
                    <h5>{skill.name}</h5>
                    <img
                      src={expandedIndex.group1 === index ? arrowUp : arrowDown}
                      alt="Toggle"
                      onClick={() => toggleExpand("group1", index)}
                      style={{
                        cursor: "pointer",
                        width: "30px",
                        height: "30px",
                        transition: "transform 0.3s",
                      }}
                    />
                    {expandedIndex.group1 === index && (
                      <div
                      style={{
                        backgroundColor: "#f7f7f7",
                        padding: "12px 16px",
                        marginTop: "10px",
                        borderRadius: "12px",
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                        fontSize: "14px",
                        color: "#333",
                        maxWidth: "240px",
                        lineHeight: "1.5",
                        textAlign: "left",
                        transition: "all 0.3s ease-in-out"
                      }}
                    >{skill.project}
                      </div>
                    )}
                  </div>
                ))}
              </Carousel>
                    </div>
                    <div className="skill-bx wow zoomIn">
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        {skillData2.map((skill, index) => (
                  <div className="item" key={index}>
                    <img src={skill.img} alt={skill.name} />
                    <h5>{skill.name}</h5>
                    <img
                      src={expandedIndex.group2 === index ? arrowUp : arrowDown}
                      alt="Toggle"
                      onClick={() => toggleExpand("group2", index)}
                      style={{
                        cursor: "pointer",
                        width: "30px",
                        height: "30px",
                        transition: "transform 0.3s",
                      }}
                    />
                    {expandedIndex.group2 === index && (
                      <div
                      style={{
                        backgroundColor: "#f7f7f7",
                        padding: "12px 16px",
                        marginTop: "10px",
                        borderRadius: "12px",
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                        fontSize: "14px",
                        color: "#333",
                        maxWidth: "240px",
                        lineHeight: "1.5",
                        textAlign: "left",
                        transition: "all 0.3s ease-in-out"
                      }}
                    >{skill.project}
                      </div>
                    )}
                  </div>
                ))}
                        </Carousel>
                    </div>
                    
                    {showMoreSkills && (

  <>
                    <div className="skill-bx wow zoomIn">
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        {skillData3.map((skill, index) => (
                  <div className="item" key={index}>
                    <img src={skill.img} alt={skill.name} />
                    <h5>{skill.name}</h5>
                    <img
                      src={expandedIndex.group3 === index ? arrowUp : arrowDown}
                      alt="Toggle"
                      onClick={() => toggleExpand("group3", index)}
                      style={{
                        cursor: "pointer",
                        width: "30px",
                        height: "30px",
                        transition: "transform 0.3s",
                      }}
                    />
                    {expandedIndex.group3 === index && (
                      <div
                      style={{
                        backgroundColor: "#f7f7f7",
                        padding: "12px 16px",
                        marginTop: "10px",
                        borderRadius: "12px",
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                        fontSize: "14px",
                        color: "#333",
                        maxWidth: "240px",
                        lineHeight: "1.5",
                        textAlign: "left",
                        transition: "all 0.3s ease-in-out"
                      }}
                    >{skill.project}
                      </div>
                    )}
                  </div>
                ))}
                        </Carousel>
                    
                    
                    </div></>
)}
<div style={{ textAlign: "center", marginTop: "20px" }}>
  <button
    onClick={() => setShowMoreSkills(prev => !prev)}
    style={{
      backgroundColor: "#007bff",
      color: "#fff",
      padding: "10px 20px",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px",
    }}
  >
    {showMoreSkills ? "Show Less Skills" : "Show More Skills"}
  </button>
</div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
