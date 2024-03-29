import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"


const StyledHero = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 0;
  ${({ theme }) => theme.media.desktop} {
    width: 100%;
   position: relative;
    height: 679px;
  }
`

const StyleIMG = styled.div`
  display: block;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  object-fit: cover;

  ${({ theme }) => theme.media.desktop} {
    display: block;
    width: 100%;
    height: 650px;
    z-index: 1;
    position: relative;
  }
`
const IMG = styled(GatsbyImage)`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: 50% 50%;

  ${({ theme }) => theme.media.desktop} {
    width: 100%;
    height: 750px;
    object-fit: cover;
    object-position: 50% 10%;
  }
`
const StyledP = styled.p`
  z-index: 2;
  position: absolute;
  margin: 0 auto;
  top: 25vh;
  left: 12%;
  width: 76%;
  height: auto;
  color: ${({theme}) => theme.white};
  font-family: ${({theme}) => theme.font.family.gilda};
  font-size: ${({theme}) => theme.font.size.xm};
  line-height: 1.8;
  text-align: center;
  letter-spacing: 0.1rem;
   
  ${({ theme }) => theme.media.desktop} {
    z-index: 2;
    position: absolute;
    margin: 0 auto;
    top: 280px;
    left: 20%;
    width: 60%;
    height: 230px;
    color: ${({theme}) => theme.white};
    font-family: ${({theme}) => theme.font.family.gilda};
    font-size: ${({theme}) => theme.font.size.l};
    line-height: 2;
    text-align: center;
    letter-spacing: 0.1rem;
  }
`

const Header = () => {

  const data = useStaticQuery(graphql`
    query {
        datoCmsHeader {
            description
            header {
            url
            customData
                gatsbyImageData(
                    placeholder: BLURRED
                    forceBlurhash: false
                    layout: FULL_WIDTH
                )
                filename
            }
        }
    }
  `)

  return (
    <StyledHero>
        <StyleIMG>
          <IMG image={data.datoCmsHeader.header.gatsbyImageData} alt={data.datoCmsHeader.header.filename} />
        <StyledP>{data.datoCmsHeader.description}</StyledP>

      </StyleIMG>
    </StyledHero>
  )
}

export default Header
