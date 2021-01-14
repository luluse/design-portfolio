import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

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
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
