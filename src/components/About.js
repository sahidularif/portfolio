import React from "react"

import { Container, Title, Button } from "./common"

import profile from "../assets/image/profile.jpg"

import "./about.css"

const About = () => {
  return (
    <div id="about" className="about-area">
      <Container>
        <Title side="right" title="About Me" />
        <div className="about">
          <div className="about-details">
            <p>
              Hello! I'm Sahidul Arif, full-stack web developer with a passion for creating visually stunning and user-friendly websites. Strong knowledge of HTML, CSS, JavaScript, TypeScript, NextJs. Experience in developing interactive web pages and web applications. Knowledge of web security, SEO and cloud deployment.
              
            </p>
            <div className="about-action">
              <Button
                link="https://docs.google.com/document/d/1Syb4FmNENOLwgEisymDcg2M3ZA7YY2wmFfL_pOlasDM/edit?usp=sharing"
                target="_blank"
                bgColor="#00cf5d"
                title="Get Resume"
              />
              <Button clickEvent link="#skill" ml="15px" title="My Skills" />
            </div>
          </div>
          <div className="about-image">
            <div className="image">
              <img alt="profile" src={profile} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { About }
