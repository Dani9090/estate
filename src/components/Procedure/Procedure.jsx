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
      height: auto;
      width: 80%;
      padding: 25px 0 10px 0;
      margin: 0 auto;
      color: ${({ theme }) => theme.black};
      text-align: center;
      font-family: ${({ theme }) => theme.font.family.montserrat};
      font-size: ${({ theme }) => theme.font.size.xs};
      font-weight: 600;
     
      }
  .without {
    font-family: ${({ theme }) => theme.font.family.montserrat};
    padding: 0 0 20px 0 ;
    font-weight: 500;
   
  }

    &::after {
      position: absolute;
      content: "";
      width: 100px;
      height: 100px;
      clip-path: polygon(0 92%, 0 100%, 100% 100%, 100% 0, 92% 0, 92% 92%);
      background-color: ${({ theme }) => theme.black};
      right: 10px;
      bottom: 10px;
    }
  ${({theme}) => theme.media.desktop} {
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
  }
`
const StyledInner = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  justify-content: center;
  padding: 20px 0 70px 0;

  div {
    display: grid;
    place-items: center;
    flex-direction: column;
    margin: 0 auto;
    color: ${({ theme }) => theme.white};
  }
  
`


const StyledTitle = styled.div`
  
  width: 100%;
  height: 120px;
  padding: 20px 0;
  color: ${({ theme }) => theme.white};
  font-family: ${({ theme }) => theme.font.family.gilda};
  font-weight: 400;
  display: grid;
  place-items: center;
  &::after {
    position: absolute;
    content: "";
    width: 100px;
    height: 100px;
    clip-path: polygon(0 0, 100% 0, 100% 8%, 8% 8%, 8% 100%, 0% 100%);
    background-color: ${({ theme }) => theme.black};
    left: 10px;
    top: 10px;
  }
  ${({theme}) => theme.media.desktop} {
    height: 120px;
    padding: 20px 0;
    color: ${({ theme }) => theme.white};
    text-align: center;
    font-family: ${({ theme }) => theme.font.family.gilda};
    font-weight: 400;
  }
`
const StyledImage = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background-color: white;

  ${({theme}) => theme.media.desktop} {
    position: relative;
    width: 260px;
    height: 260px;
    border-radius: 100%;
    background-color: white;
  }
`
const IMG = styled.img`
  width: 110px;

  max-height: 120px;
  height: auto;

  ${({ theme }) => theme.media.desktop} {
    width: 150px;
    max-height: 200px;
    height: auto;
  }
`
const Number = styled.div`
  position: absolute;
  bottom: -10px;
  left: 35px;
  width: 40px;
  height: 40px;
  background-color: black;
  border-radius: 100%;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-size: 20px;
  ${({ theme }) => theme.media.desktop} {
    position: absolute;
    bottom: 0;
    left: 40px;
    width: 45px;
    height: 45px;
    background-color: black;
    border-radius: 100%;
    font-family: ${({ theme }) => theme.font.family.montserrat};
    font-size: 20px;
  }
`
const H1 = styled.h1`
  width: auto;
  color: white;
  font-weight: 500;
  z-index: 9999;
  position: relative;
  font-family: ${({ theme }) => theme.font.family.gilda};
  font-size: ${({ theme }) => theme.font.size.m};

  &::before {
    z-index: -1;
    position: absolute;
    content: '';
    width: auto;
    min-width: 100px;
    height: calc(${({ theme }) => theme.font.size.m} * 1.4);
    background-color: black;
    border-radius: 2px;
    right: 47%;
    top: calc(-${({ theme }) => theme.font.size.m} / 7);

  }
  ${({ theme }) => theme.media.desktop} {
    color: white;
    font-weight: 500;
    z-index: 9999;
    position: relative;
    font-family: ${({ theme }) => theme.font.family.gilda};
    font-size: ${({ theme }) => theme.font.size.xxl};

    &::before {
      z-index: -1;
      position: absolute;
      content: '';
      width: auto;
      min-width: 180px;
      height: calc(${({ theme }) => theme.font.size.xxl} * 1.4);
      background-color: black;
      border-radius: 2px;
      right: 50%;
      top: calc(-${({ theme }) => theme.font.size.xxl} / 7);

    }
  }
`
/*const Back = styled.div`
  width: 200px;
  height: 70px;
  background-color: black;
  position: absolute;
  border-radius: 2px;
  left: 50%;
  top: 57px;
  z-index: 1;
`*/

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
    <StyledWrapper id="procedura">
      <StyledTitle>
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
            {procedure.description ? (<p className="without">{procedure.description}</p>) : <p></p>}
          </div>
        ))}
      </StyledInner>
    </StyledWrapper>
  )
}
export default Procedure
