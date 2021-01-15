import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Card from '../components/Card';
import Section from '../components/section';
import Wave from "../components/Wave";
import Cell from '../components/Cell';
import staticdata from '../../staticdata.json';

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
            <img src={require('../images/js-logo.png')} width="50" />
            <img src={require('../images/nodejs-logo.jpg')} width="50" />
            <img src={require('../images/logo-react.png')} width="50" />
            <img src={require('../images/vscode-logo.png')} width="50" />
            <img src={require('../images/github-logo.png')} width="50" />
            <img src={require('../images/mongo-logo.jpg')} width="50" />
            <img src={require('../images/sql-logo.jpg')} width="50" />
            <img src={require('../images/postgres-logo.png')} width="50" />
            <img src={require('../images/html-logo.png')} width="50" />
            <img src={require('../images/css-logo.png')} width="50" />
          </div>
          <Wave />
        </div>
      </div>
      <div className="Cards">
        <h2>My projects</h2>
        <div className="CardGroup">
          <Card
            title="CLI"
            text="12 sections"
            image={require('../images/wallpaper.jpg')} />
          <Card
            title="What's Cookin"
            text="12 sections"
            image={require('../images/wallpaper2.jpg')} />
          <Card
            title="Storefront"
            text="12 sections"
            image={require('../images/wallpaper3.jpg')} />
          <Card
            title="React Native"
            text="12 sections"
            image={require('../images/wallpaper4.jpg')} />
        </div>
      </div>
      <Section
        image={require('../images/wallpaper2.jpg')}
        logo={require('../images/logo-react.png')}
        title="React for Designers"
        text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify." />
      {staticdata.cells.map(cell => (
        <Cell title={cell.title} image={cell.image} />
      ))}
    </div>
  </Layout>
)

export default IndexPage
