/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }
      allContentfulLink(sort: { fields: [createdAt], order: ASC }){
        edges {
          node {
            url
            titleurl
            createdAt
          }
        }
      }
    }
  `)

  return (
    <>

      <div>
        <Header />
        <main>
          {children}
        </main>
        <Footer data={data}>
        <a href="mailto:ludivine.sevignon@gmail.com" style={{ color: "white" }}>Email </a>
        {/*<br/>
         <a href="https://github.com/luluse" style={{ color: "white" }}>Github</a> */}
        </Footer>

      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
