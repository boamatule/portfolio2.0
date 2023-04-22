import React from "react";
import { SkillsSetsContainer } from "./SkillsSet.Styles";

const CoreSkills = () => {
  const leftItems = ["Javascript", "Typescript", "React", "Nextjs", "Nodejs", "SaaS", "Styled-Components", "Tailwind CSS", "Redis", "AWS", "Framer Motion", "GIT", "Vercel"];

  return (
    <div>
      <h2>Here a list of my core tech stack.</h2>
      <ul
        style={{
          listStyle: "none",
        }}>
        {leftItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const AnotherCoreSkills = () => {
  const rightItems = ["Stripe", "Firebase", "JWT", "Nextjs", "Nodejs", "SaaS", "Styled-Components", "Tailwind CSS", "Redis", "AWS", "Framer Motion", "GIT", "Vercel"];
  return (
    <>
      <h2>Other highly effective tools I have been working with.</h2>
      <ul
        style={{
          listStyle: "none",
        }}
      >
        {rightItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

const SkillsSet = () => {

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
    }}>
      <div>
        <SkillsSetsContainer>
          {/* <h1 style={{ flex: 1 }}>List of my skill's set!</h1> */}

          <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flex: 1
          }}>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                <CoreSkills />
              </div>
              <div style={{ flex: 1 }}>
                <AnotherCoreSkills />
              </div>
            </div>
          </div>
        </SkillsSetsContainer>
      </div>
    </div>
  );
};

export default SkillsSet;
