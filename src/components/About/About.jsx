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
    margin: 0 auto;
    color: ${({ theme }) => theme.white};
    text-align: center;
    font-family: ${({ theme }) => theme.font.family.montserrat};
    font-size: ${({ theme }) => theme.font.size.xxs};
  }
  &::after {
    position: absolute;
    content: "";
    width: 100px;
    height: 100px;
    clip-path: polygon(0 16%, 0 0, 100% 0, 100% 100%, 84% 100%, 84% 16%);

    background-color: azure;
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
  padding-bottom: 30px;

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
      <p>
        Transakcje sprzedaży są bezpieczne, przeprowadzane szybko, sprawnie i
        odbywają się u notariusza. Płacimy za Twoją nieruchomość gotówką.
      </p>
      <p>Pomagamy załatwić wszystkie formalności.</p>
    </StyledWrapper>
  )
}
export default About
