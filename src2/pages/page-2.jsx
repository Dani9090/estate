import * as React from "react"
import { Link } from "gatsby"

import MainTemplate from "src/templates/MainTemplate"

function SecondPage() {
  return (
    <MainTemplate>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </MainTemplate>
  )
}

export default SecondPage
