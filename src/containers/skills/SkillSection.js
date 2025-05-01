import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-awesome-reveal";

function GetImage(props) {
  const { picturePath } = props;
  try {
    return (
      <img
        style={{ width: "475px", margin: "30px" }}
        src={require(`../../assests/images/${picturePath}`)}
        alt={`${picturePath.split(".")[0]} Picture`}
      />
    );
  } catch (error) {
    console.error("Image not found:", picturePath);
    return null;
  }
}

function SkillSection(props) {
  const theme = props.theme;

  return (
    <div>
      {skills.data.map((skill, index) => {
        return (
          <div className="skills-main-div" key={index}>
            {index % 2 === 0 ? (
              <>
                <Fade left duration={2000}>
                  <div className="skills-image-div">
                    <GetImage picturePath={skill.picturePath} />
                  </div>
                </Fade>
                <div className="skills-text-div">
                  <Fade right duration={1000}>
                    <h1
                      className="skills-heading"
                      style={{ color: theme.text }}
                    >
                      {skill.title}
                    </h1>
                  </Fade>
                  <Fade right duration={1500}>
                    <SoftwareSkill logos={skill.softwareSkills} />
                  </Fade>
                  <Fade right duration={2000}>
                    <div>
                      {skill.skills.map((skillSentence, idx) => (
                        <p
                          key={idx}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      ))}
                    </div>
                  </Fade>
                </div>
              </>
            ) : (
              <>
                <div className="skills-text-div">
                  <Fade left duration={1000}>
                    <h1
                      className="skills-heading"
                      style={{ color: theme.text }}
                    >
                      {skill.title}
                    </h1>
                  </Fade>
                  <Fade left duration={1500}>
                    <SoftwareSkill logos={skill.softwareSkills} />
                  </Fade>
                  <Fade left duration={2000}>
                    <div>
                      {skill.skills.map((skillSentence, idx) => (
                        <p
                          key={idx}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      ))}
                    </div>
                  </Fade>
                </div>
                <Fade right duration={2000}>
                  <div className="skills-image-div">
                    <GetImage picturePath={skill.picturePath} />
                  </div>
                </Fade>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default SkillSection;
