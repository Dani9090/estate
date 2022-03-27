import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const StyledWrapper = styled.div`
  width: 100%;
  height: auto;
  border: 1px ${({ theme }) => theme.orange} solid;
  background-color: ${({ theme }) => theme.orange};
  position: relative;

  p {
    height: 50px;
    width: 80%;
    padding: 5px;
    margin: 0 auto;
    color: ${({ theme }) => theme.black};
    text-align: center;
    font-family: ${({ theme }) => theme.font.family.montserrat};
    font-size: ${({ theme }) => theme.font.size.xxs};
    font-weight: 600;

    .without {
      font-weight: 400;
    }

    &::after {
      position: absolute;
      content: "";
      width: 100px;
      height: 100px;
      clip-path: polygon(0 0, 100% 0, 100% 13%, 13% 13%, 13% 100%, 0% 100%);
      background-color: ${({ theme }) => theme.black};
      left: 30px;
      top: 30px;
    }
  }

  &::after {
    position: absolute;
    content: "";
    width: 100px;
    height: 100px;
    clip-path: polygon(0 87%, 0 100%, 100% 100%, 100% 0, 87% 0, 87% 87%);
    background-color: ${({ theme }) => theme.black};
    right: 30px;
    bottom: 30px;
  }
`
const StyledInner = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  padding: 20px 0 70px 0;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    color: ${({ theme }) => theme.white};
  }
`

const StyledTitle = styled.h2`
  height: 120px;
  padding: 20px 0;
  color: ${({ theme }) => theme.white};
  text-align: center;
  font-family: ${({ theme }) => theme.font.family.gilda};
  font-weight: 400;
`
const StyledImage = styled.div`
  position: relative;
  width: 260px;
  height: 260px;
  border-radius: 100%;
  background-color: white;
`
const IMG = styled.img`
  width: auto;
  margin: 0 auto;

  ${({ theme }) => theme.media.desktop} {
    width: 150px;
    max-height: 200px;
    height: auto;
  }
`
const Number = styled.div`
  position: absolute;
  bottom: 0;
  left: 40px;
  width: 45px;
  height: 45px;
  background-color: black;
  border-radius: 100%;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-size: 20px;
`
const H1 = styled.h1`
  color: white;
  font-weight: 500;
  z-index: 9999;
  position: relative;
  font-family: ${({ theme }) => theme.font.family.gilda};
`
const Back = styled.div`
  width: 200px;
  height: 70px;
  background-color: black;
  position: absolute;
  left: 50%;
  top: 57px;
  z-index: 1;
`

const Procedure = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsProcedure(sort: { fields: number }) {
        nodes {
          id
          description
          number
          title
          image {
            url
          }
        }
      }
    }
  `)
  return (
    <StyledWrapper>
      <StyledTitle>
        <Back />
        <H1>Procedura</H1>
      </StyledTitle>
      <StyledInner>
        {data.allDatoCmsProcedure.nodes.map(procedure => (
          <div key={procedure.id}>
            <StyledImage>
              <Number>{procedure.number}</Number>
              <IMG src={procedure.image.url} alt="a" />
            </StyledImage>
            <p>{procedure.title}</p>
            <p className="without">{procedure.description}</p>
          </div>
        ))}
      </StyledInner>
    </StyledWrapper>
  )
}
export default Procedure
