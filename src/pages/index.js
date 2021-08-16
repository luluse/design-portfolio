import React from "react"
// import { Link } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"
import Section from "../components/section"
import Wave from "../components/Wave"
import Cell from "../components/Cell"
import staticdata from "../../staticdata.json"
import styled from "styled-components"
import Icons from "../components/icons"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>Hi, I'm Lulu</h1>
          <p>Welcome to my Portfolio</p>
          <a href="https://github.com/luluse" target="_blank" rel="noreferrer">
            Go to my Github
          </a>
          {/* <Link to="/page-2/">Go to page 2</Link>
          <br /><br />
          <Link to="/video">Watch the video</Link> */}

          <div className="Logos">
            {staticdata.icons.map(icon => (
              <Icons image={icon.image} title={icon.title} />
            ))}
          </div>
          <Wave />
        </div>
      </div>
      <div className="Cards">
        <h2 id="projects">My projects</h2>
        <div className="CardGroup">
          <a
            href="https://github.com/luluse/app-design"
            target="_blank"
            rel="noreferrer"
          >
            <Card
              title="Genuine Drink"
              text="React Native App"
              image={require("../images/genuinedrink.png")}
            />
          </a>
          <a
            href="https://github.com/luluse/Async-and-the-Awaits"
            target="_blank"
            rel="noreferrer"
          >
            <Card
              title="CLI"
              text="Backend project with node.js"
              image={require("../images/CLI-bkground.png")}
            />
          </a>
          <a
            href="https://github.com/luluse/WhatsCookin"
            target="_blank"
            rel="noreferrer"
          >
            <Card
              title="What's Cookin"
              text="React/Redux App"
              image={require("../images/cookin-bkground.jpg")}
            />
          </a>
          <a
            href="https://github.com/lulusevignon-401-advanced-javascript/storefront"
            target="_blank"
            rel="noreferrer"
          >
            <Card
              title="Storefront"
              text="React/Redux App"
              image={require("../images/storefront-bkground.png")}
            />
          </a>
          <a
            href="https://github.com/luluse/doodle-jump"
            target="_blank"
            rel="noreferrer"
          >
            <Card
              title="Jumping Snail"
              text="Vanilla JavaScript"
              image={require("../images/jump-snail.jpg")}
            />
          </a>
          <a
            href="https://github.com/luluse/squirrel"
            target="_blank"
            rel="noreferrer"
          >
            <Card
              title="My Best Friends"
              text="React/Redux App"
              image={require("../images/mybestfriends.png")}
            />
          </a>
          <a
            href="https://github.com/luluse/MySocials-client"
            target="_blank"
            rel="noreferrer"
          >
            <Card
              title="MySocials"
              text="MERNG Full Stack App"
              image={require("../images/mysocials.png")}
            />
          </a>
          <a
            href="https://github.com/luluse/legendes"
            target="_blank"
            rel="noreferrer"
          >
            <Card
              title="Legendes"
              text="React App powered by Firebase"
              image={require("../images/spy.png")}
            />
          </a>
        </div>
      </div>
      <div id="aboutMe"></div>
      <Section
        image={require("../images/wallpaper7.jpg")}
        logo={require("../images/avatar.jpg")}
        title="About me"
        text="My name is Lulu, I'm a Software Developer based out of Seattle WA. I come from the Wine industry with a background in Marketing and Sales. I mainly work with Vanilla JavaScript, ES6 features, Node.js & React.js but I'm always excited to discover new tools and learn new technologies. I'm passionate about Front End development including accessibility and authentication. When I'm not coding I love to bake, spend time with my dog, Jordi, and bike around West Seattle."
      />
      {/* <SectionCaption >tools and skills</SectionCaption>
      <SectionCellGroup>
        {staticdata.cells.map(cell => (
          <Cell title={cell.title} image={cell.image} />
        ))}
      </SectionCellGroup> */}
    </div>
  </Layout>
)

export default IndexPage

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
`
const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
