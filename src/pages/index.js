import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Card from '../components/Card';
import Section from '../components/section';
import Wave from "../components/Wave";
import Cell from '../components/Cell';
import staticdata from '../../staticdata.json';
import styled from 'styled-components'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>Hi, I'm Lulu</h1>
          <p>Welcome to my Portfolio</p>
          <Link to="/page-2/">Go to page 2</Link>
          <br /><br />
          <Link to="/video">Watch the video</Link>

          <div className="Logos">
            <img src={require('../images/js-logo.png')} width="50" alt='' />
            <img src={require('../images/nodejs-logo.jpg')} width="50" alt='' />
            <img src={require('../images/logo-react.png')} width="50" alt='' />
            <img src={require('../images/vscode-logo.png')} width="50" alt='' />
            <img src={require('../images/github-logo.png')} width="50" alt='' />
            <img src={require('../images/mongo-logo.jpg')} width="50" alt='' />
            <img src={require('../images/sql-logo.jpg')} width="50" alt='' />
            <img src={require('../images/postgres-logo.png')} width="50" alt='' />
            <img src={require('../images/html-logo.png')} width="50" alt='' />
            <img src={require('../images/css-logo.png')} width="50" alt='' />
          </div>
          <Wave />
        </div>
      </div>
      <div className="Cards">
        <h2>My projects</h2>
        <div className="CardGroup">
          <Card
            title="CLI"
            text="Backend project with node.js"
            image={require('../images/CLI-bkground.png')} />
          <Card
            title="React Native App"
            text="iOS App"
            image={require('../images/wallpaper4.jpg')} />
          <Card
            title="What's Cookin"
            text="React App"
            image={require('../images/cookin-bkground.jpg')} />
          <Card
            title="Storefront"
            text="React App"
            image={require('../images/storefront-bkground.png')} />
        </div>
      </div>
      <Section
        image={require('../images/wallpaper7.jpg')}
        logo={require('../images/avatar.jpg')}
        title="About me"
        text="My name is Lulu, I'm a software Developer based out of Seattle WA. I come from the Wine industry with a background in Marketing and Sales. I'm passionate about Javscript and Front End development.
        When I'm not coding I love to bake, spend time with my dog Jordi and bike around West Seattle." />
      <SectionCaption>12 sections - 6 hours</SectionCaption>
      <SectionCellGroup>
        {staticdata.cells.map(cell => (
          <Cell title={cell.title} image={cell.image} />
        ))}
      </SectionCellGroup>
    </div>
  </Layout>
)

export default IndexPage

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
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