import React from "react"
import { Link } from "gatsby"
import { ThemeProvider } from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Hero from "../components/Hero"
import Skills from "../components/Skills"
import Experience from "../components/Experience"
import Portfolio from "../components/Portfolio"

import Light from "../theme/light"
import Dark from "../theme/dark"

const IndexPage = () => (
  <ThemeProvider theme={Light}>
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Skills />
      <Experience />
      <Portfolio />
    </Layout>
  </ThemeProvider>
)

export default IndexPage
