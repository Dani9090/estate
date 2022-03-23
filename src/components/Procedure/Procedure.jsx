import React from "react"
import styled from "styled-components"

const H1 = styled.h1`
  color: black;
  font-family: ${({ theme }) => theme.font.family.gilda};
`

const Procedure = () => {
  return (
    <div>
      <H1>Procedure</H1>
    </div>
  )
}
export default Procedure
