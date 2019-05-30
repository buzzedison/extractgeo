import React from "react"
import "bootstrap-css-only/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap.css"

import Layout from "../components/layout"
import Slider from "../components/slider"
import SEO from "../components/seo"
import Main from "../components/main"
import Services from "../components/services"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <Slider />
      <Main />
      <Services />
    </div>
  </Layout>
)

export default IndexPage
