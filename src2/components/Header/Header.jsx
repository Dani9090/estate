import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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
    z-index: 1;
    position: relative;
  }
`

const IMG = styled(GatsbyImage)`
  width: 100%;
  height: 250px;

  ${({ theme }) => theme.media.desktop} {
    width: 100%;
    height: 700px;
  }
`
const StyledP = styled.p`
  z-index: 2;
  position: absolute;
  margin: 0 auto;
  top: 270px;
  left: 20%;
  width: 60%;
  height: 230px;
  color: ${({ theme }) => theme.white};
  font-family: ${({ theme }) => theme.font.family.Gilda};
  font-size: ${({ theme }) => theme.font.size.l};
  line-height: 2;
  text-align: center;
  letter-spacing: 0.1rem; ;
`

function Header() {
  const data = useStaticQuery(graphql`
    query {
      datoCmsHeader {
        header {
          gatsbyImageData(width: 1910)
        }
      }
    }
  `)

  const image = getImage(data.datoCmsHeader.header)
  console.log(image)
  return (
    <StyledHero>
      {/* <StyledNav2>
        <Nav />
      </StyledNav2> */}
      <StyleIMG>
        <IMG image={image} alt="logo" />
        <StyledP>
          Jesteśmy specjalistami, posiadającymi wieloletnie doświadczenie,
          <br /> w pomocy właścicielom nieruchomości którzy napotkali problemy
          związane ze swoją nieruchomością,
          <br /> w tym problemy z lokatorami czy też najemcami.{" "}
        </StyledP>
      </StyleIMG>
    </StyledHero>
  )
}
export default Header
