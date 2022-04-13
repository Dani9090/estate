import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const StyledWrapper = styled.div`
  width: 100%;
    height: auto;
    margin-top: 0;
    border: 1px solid ${({ theme }) => theme.black};
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
      
  ${({ theme }) => theme.media.desktop} {
    width: 100%;
    height: auto;
    border: 1px solid ${({ theme }) => theme.black};
    background-color: ${({ theme }) => theme.black};
    position: relative;
    margin-top: 50px;

    p {
      height: 50px;
      width: 80%;
      padding: 5px;
      margin: 0 auto;
      color: ${({ theme }) => theme.white};
      text-align: center;
      font-family: ${({ theme }) => theme.font.family.montserrat};
      font-size: ${({ theme }) => theme.font.size.xxs};

     /* &::after {
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
      top: 50px;
    }*/
  }
`
const StyledInner = styled.div`
  width:100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap:10px;
  place-items: center;
  padding-bottom: 20px;
 
  ${({ theme }) => theme.media.desktop} {
    width: 90%;
    max-width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-content: center;
    padding-bottom: 20px;
    
  };
`

const StyledTitle = styled.h1`
  height: 120px;
  padding: 20px;
  color: ${({ theme }) => theme.white};
  text-align: center;
  font-family: ${({ theme }) => theme.font.family.gilda};
  font-size: ${({theme}) => theme.font.size.xxm};
  font-weight: 400;
  display: grid;
  place-items: center;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    width: 100px;
    height: 100px;
    clip-path: polygon(0 8%, 0 0, 100% 0, 100% 100%, 92% 100%, 92% 8%);
    background-color: ${({ theme }) => theme.darkOrange};
    right: 10px;
    top: 0;
  }
  ${({ theme }) => theme.media.desktop} {
    height: 120px;
    padding: 60px 0;
    color: ${({ theme }) => theme.white};
    text-align: center;
    font-family: ${({ theme }) => theme.font.family.gilda};
    font-weight: 400;
  };
`

const StyledBottomDes = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 40px;
  p {
    width: 100%;
    height: auto;
  line-height: 1.5;
    padding-bottom: 5px
  }
  &::after {
    position: absolute;
    content: "";
    width: 100px;
    height: 100px;
    clip-path: polygon(0 0, 8% 0, 8% 92%, 100% 92%, 100% 100%, 0% 100%);
    background-color: ${({ theme }) => theme.darkOrange};
    left: 10px;
    bottom: 10px;
  }
  
  ${({theme}) => theme.media.desktop} {
    width: 100%;
    height: 100px;
    padding-bottom: 140px;

    p {
      height: 30px;
    }
  }
`

const StyledImageWithDes=styled.div`
width: 100%;
display: grid;
  place-items:center;

  p {
    margin: 5px 0;
    padding: 5px;
    height: 40px;
  }
`

const IMG = styled.img`
  width: 180px;
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
    <StyledWrapper id="onas">
      <StyledTitle>
        Zajmujemy się zakupem nieruchomości wszelkiego rodzaju w tym:
      </StyledTitle>
      <StyledInner>
        {data.allDatoCmsAbout.nodes.map(about => (
          <StyledImageWithDes key={about.id}>
            <IMG src={about.foto.url} alt="foto" />
            <p>{about.title}</p>
          </StyledImageWithDes>
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
