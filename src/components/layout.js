/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

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
      allContentfulLink {
        edges {
          node {
            url
            titleurl
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
        <footer>
          
          <FooterGroup>
            <Text>Lulu Sevignon</Text>
            <Button>Connect</Button>
            <LinkGroup>{data.allContentfulLink.edges.map(edge => (
            <a href={edge.node.url}>{edge.node.titleurl}</a>
          ))}</LinkGroup>
            <Copyright>© {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a></Copyright>
          </FooterGroup>
        
          
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

let FooterGroup = styled.div`
  background: #F1F3F5;
  padding: 50px 0;
  display: grid;
  grid-gap: 20px;
`

const Text = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #486791;
  max-width: 500px;
  margin: 0 auto;
`

const Button = styled.button`
  font-size: 24px;
  color: white;
  border: none;
  padding: 16px 60px;
  font-weight: 600;
  background: linear-gradient(102.24deg, #9B51E0 0%, #3436E7 100%);
  box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
  border-radius: 30px;
  justify-self: center;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
      box-shadow: 0 20px 40px rgba(0,0,0, 0.15);
      transform: translateY(-3px);
  }
`

let LinkGroup = styled.div`
  width: 500px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;

  a {
      color: #5334F5;
      font-size: 20px;
      font-weight: 500;
      margin: 5px 0;
      transition: 1s;
  }

  a:hover {
      color: black;
  }
`
const Copyright = styled.div`
  color: #486791;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
`
