import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql} from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const StyledHero = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  position: relative;

  ${({ theme }) => theme.media.desktop} {
    width: 100%;
    position: relative;
    height: 650px;
    margin-bottom: 1vh;
  }

`

const StyleIMG = styled.div`
display: block;
    width: 100%;
    height: auto;
    z-index: 0;
  ${({ theme }) => theme.media.desktop} {
    display: block;
    width: 100%;
    height: 650px;
    z-index: 2;
  }
`

const IMG = styled(StaticImage)`
 width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: 0% 90%;
${({ theme }) => theme.media.desktop} {
  width: 100%;
  height: 650px;
  object-fit: cover;
  object-position: 0 90%;
}
`

const StyledNav2 = styled.div`
  width: 100%;
  height: auto;
   z-index: 9;
   top:0;
   ${({ theme }) => theme.media.desktop} {
     top:15px;
     position: absolute;
     z-index: 9;
   }
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      datoCmsHeader {
        header{
          fluid(maxHeight: 650) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  `)



  return (
    <StyledHero>
      {/* <StyledNav2>
        <Nav />
      </StyledNav2> */}
      <StyleIMG>
        <IMG fluid={data.datoCmsHeader.header.fluid} alt="logo" />
      </StyleIMG>

    </StyledHero>
  )
}
export default Header
