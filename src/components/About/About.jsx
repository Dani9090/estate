import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const StyledWrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.black};
  position: relative;
  p {
    height: 50px;
    width: 80%;
    padding: 5px;
    margin: 0 auto;
    color: ${({ theme }) => theme.white};
    text-align: center;
    font-family: ${({ theme }) => theme.font.family.montserrat};
    font-size: ${({ theme }) => theme.font.size.xxs};
    &::after {
      position: absolute;
      content: "";
      width: 100px;
      height: 100px;
      clip-path: polygon(0 0, 13% 0, 13% 87%, 100% 87%, 100% 100%, 0% 100%);
      background-color: ${({ theme }) => theme.darkOrange};
      left: 30px;
      bottom: 30px;
    }
  }
  &::after {
    position: absolute;
    content: "";
    width: 100px;
    height: 100px;
    clip-path: polygon(0 13%, 0 0, 100% 0, 100% 100%, 87% 100%, 87% 13%);
    background-color: ${({ theme }) => theme.darkOrange};
    right: 30px;
    top: 30px;
  }
`
const StyledInner = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  padding-bottom: 20px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    color: ${({ theme }) => theme.white};
  }
`

const StyledTitle = styled.h1`
  height: 120px;
  padding: 60px 0;
  color: ${({ theme }) => theme.white};
  text-align: center;
  font-family: ${({ theme }) => theme.font.family.gilda};
  font-weight: 400;
`

const StyledBottomDes = styled.div`
  width: 100%;
  height: 100px;
  padding-bottom: 140px;

  p {
    height: 30px;
  }
`

const IMG = styled.img`
  width: 200px;
  height: auto;

  ${({ theme }) => theme.media.desktop} {
    width: 200px;
    height: auto;
  }
`

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      datoCmsAboutdesc {
        descritpion
      }

      allDatoCmsAbout(sort: { fields: originalId }) {
        nodes {
          foto {
            url
          }
          title
          id
        }
      }
    }
  `)

  return (
    <StyledWrapper>
      <StyledTitle>
        Zajmujemy się zakupem nieruchomości wszelkiego rodzaju w tym:
      </StyledTitle>
      <StyledInner>
        {data.allDatoCmsAbout.nodes.map(about => (
          <div key={about.id}>
            <IMG src={about.foto.url} alt="foto" />
            <p>{about.title}</p>
          </div>
        ))}
      </StyledInner>
      <StyledBottomDes>
        <p
          dangerouslySetInnerHTML={{
            __html: data.datoCmsAboutdesc.descritpion,
          }}
        />
      </StyledBottomDes>
    </StyledWrapper>
  )
}
export default About
