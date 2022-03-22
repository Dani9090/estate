import * as React from "react"
import { Link } from "gatsby"
import MainTemplate from "src/templates/MainTemplate"
import Seo from "../components/seo"
import Header from "../components/Header/Header";

const IndexPage = () => (
  <MainTemplate>
    <Seo title="Home" />
<Header />

  </MainTemplate>
)

export default IndexPage
