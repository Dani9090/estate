import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

const StyledWrapper = styled.div`
  width: 100%;
  height: auto;
  border-top: 1px ${({ theme }) => theme.orange} solid;
  border-bottom: 1px ${({ theme }) => theme.orange} solid;
  background-color: ${({ theme }) => theme.black};
  position: relative;
  line-height: 1.5;
`
const StyledInner = styled.div`
  width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${({ theme }) => theme.media.desktop} {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  ${({ theme }) => theme.media.bigDesktop} {
    width: 85%;
    display: flex;
    flex-direction: row;
    gap:10px;
    justify-content: center;
    align-items: center;

  }
  ${({ theme }) => theme.media.large} {
    width: 80%;
  }
`
const StyledTitleWrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    width: 80px;
    height: 80px;
    clip-path: polygon(0 100%,12% 100%, 12% 12%, 100% 12%, 100% 0, 0% 0%);
    background-color: ${({ theme }) => theme.orange};
    left: 15px;
    top: 15px;
    
  }
  ${({ theme }) => theme.media.desktop} {
    width: 100%;
    height: 180px;
    display: flex;
    justify-content: center;
    position: relative;

    &::after {
      position: absolute;
      content: "";
      width: 100px;
      height: 100px;
      clip-path: polygon(0 100%,12% 100%, 12% 12%, 100% 12%, 100% 0, 0% 0%);
      background-color: ${({ theme }) => theme.orange};
      left: 30px;
      top: 30px;
    }
  }
  
`
const StyledTitle = styled.div`
  width: auto;
  height: 60px;
  margin-top: 40px;
  color: ${({ theme }) => theme.white};
  font-family: ${({ theme }) => theme.font.family.gilda};
  font-weight: 400;
  display: grid;
  place-items: center;
  position: relative;
 
  ${({ theme }) => theme.media.desktop} {
    width: 530px;
    height: 60px;
    margin-top: 60px;
    color: ${({ theme }) => theme.white};
    font-family: ${({ theme }) => theme.font.family.gilda};
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
`
const H1 = styled.p`
  margin: 0;
  text-align: center;
  color: white;
  font-weight: 500;
  font-size: ${({ theme }) => theme.font.size.m};
  z-index: 999;
  position: relative;
  font-family: ${({ theme }) => theme.font.family.gilda};
  &::before {
    z-index: -1;
    position: absolute;
    content: '';
    width: auto;
    min-width: 100px;
    height: calc(${({ theme }) => theme.font.size.m} * 1.4);
    background-color: ${({ theme }) => theme.orange};
    border-radius: 2px;
    right: -20px;
    top: calc(-${({ theme }) => theme.font.size.m} / 8);

  }
  ${({ theme }) => theme.media.desktop} {  
    font-size: ${({ theme }) => theme.font.size.xxl};
    &::before {
      z-index: -1;
      position: absolute;
      content: '';
      width: 50%;
      min-width: 100px;
      height: calc(${({ theme }) => theme.font.size.xxl} * 1.4);
      background-color: ${({ theme }) => theme.orange};
      border-radius: 2px;
      right: -15%;
      top: calc(-${({ theme }) => theme.font.size.xxl} / 8);

    }
  }
`

const StyledLeftSide = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  position: relative;
  ${({ theme }) => theme.media.desktop} {
    width: 50vw;
    display: flex;
    justify-content: center;
    position: relative;
  }
`

const StyledRightSide = styled.div` 
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  p {
    width: 90%;
    color: ${({ theme }) => theme.white};
    text-align: center;
    margin: 0 auto;
    padding: 30px 0;
    color: ${({ theme }) => theme.white};
    font-family: ${({ theme }) => theme.font.family.montserrat};
    font-weight: 500;

    
  }
  
  ${({ theme }) => theme.media.desktop} {
    width:80%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      width: 80%;
      color: ${({ theme }) => theme.white};
      text-align: center;
      margin: 0;
      padding: 30px 0;
      color: ${({ theme }) => theme.white};
      font-family: ${({ theme }) => theme.font.family.montserrat};
      font-weight: 500;

      &:first-child {
        padding-top: 0;
      }
    }
  }
  ${({ theme }) => theme.media.bigDesktop} {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    p {
      width: 80%;
      color: ${({ theme }) => theme.white};
      text-align: center;
      margin: 0;
      padding: 30px 0;
      color: ${({ theme }) => theme.white};
      font-family: ${({ theme }) => theme.font.family.montserrat};
      font-weight: 500;

      &:first-child {
        padding-top: 0;
      }
    }
    
  }
`
const StyledH5 = styled.p`
  width: 80%;
  font-size: ${({ theme }) => theme.font.size.xxm};
  color: ${({ theme }) => theme.white};
  margin-bottom: 0;
  padding: 10px 0 0 0 !important;
  text-align: center;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  ${({ theme }) => theme.media.desktop} {
    width: 80%;
    font-size: ${({ theme }) => theme.font.size.xm};
    color: ${({ theme }) => theme.white};
    margin-bottom: 0;
    padding: 10px 0 0 0 !important;
    text-align: center;
    font-family: ${({ theme }) => theme.font.family.montserrat};
  }
`
const StyledUL = styled.div`
  width: 100%;
  padding-left: 0;
  display: grid;
  grid-template-columns: 1fr;
  color: ${({ theme }) => theme.white};
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-weight: 500;
  text-align: center;

  li {
    width: auto;
    list-style-position: inside;
  }
  ${({ theme }) => theme.media.tablet} {
    width: 95%;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
}
    ${({ theme }) => theme.media.desktop} {   
    display: grid;
    margin: 0;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    color: ${({ theme }) => theme.white};
    font-family: ${({ theme }) => theme.font.family.montserrat};
    font-weight: 500;
    text-align: center;

    li {
      width: auto;
      list-style-position: inside;
    }
  }
  ${({ theme }) => theme.media.bigDesktop} {
    display: grid;
    place-items: center;
    margin: 0;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    color: ${({ theme }) => theme.white};
    font-family: ${({ theme }) => theme.font.family.montserrat};
    font-weight: 500;
    text-align: center;
    
    li {
      width: auto;
      list-style-position: inside;
    }
    
  }
`
const IMG = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  ${({ theme }) => theme.media.desktop} {
    width: 100%;
    max-width: 600px;
    max-height: 600px;
    height: auto;
    
  }
`
const Bottom = styled.div`
  width: auto;
  height: 30px;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    width: 80px;
    height: 80px;
    clip-path: polygon(0 100%, 0 88%, 88% 88%, 88% 0, 100% 0, 100% 100%);
    background-color: ${({ theme }) => theme.orange};
    right: 15px;
    bottom: 15px;
  }
  ${({ theme }) => theme.media.desktop} {
    width: 100%;
    height: 100px;
    position: relative;

    &::after {
      position: absolute;
      content: "";
      width: 100px;
      height: 100px;
      clip-path: polygon(0 100%, 0 88%, 88% 88%, 88% 0, 100% 0, 100% 100%);
      background-color: ${({ theme }) => theme.orange};
      right: 30px;
      bottom: 30px;
    }
  }
`
const SupportedCity = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsSupportedcity {
        nodes {
          id
          description2
          descritption
          title
          map {
            url
          }
          listcity {
            id
            city
          }
        }
      }
    }
  `)
  return (
    <StyledWrapper id="obslugiwaneMiasta">
      <StyledTitleWrapper>
        <StyledTitle>
           <H1>Obsługiwane Miasta</H1>
        </StyledTitle>
      </StyledTitleWrapper>
      {data.allDatoCmsSupportedcity.nodes.map(support => (
        <StyledInner key={support.id}>
          <StyledLeftSide>
            <IMG src={support.map.url} alt="map" />
          </StyledLeftSide>
          <StyledRightSide>
            <p>{support.descritption}</p>
            <p>{support.description2}</p>
            <StyledH5>{support.title}</StyledH5>

            <StyledUL>
              {support.listcity.map(list => (
                <ul
                  key={list.id}
                  dangerouslySetInnerHTML={{ __html: list.city }}
                />
              ))}
            </StyledUL>
          </StyledRightSide>
        </StyledInner>
      ))}
      <Bottom />
    </StyledWrapper>
  )
}
export default SupportedCity
