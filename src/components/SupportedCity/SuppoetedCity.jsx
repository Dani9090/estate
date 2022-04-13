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
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`
const StyledTitleWrapper = styled.div`
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
    clip-path: polygon(0 13%, 0 0, 100% 0, 100% 100%, 87% 100%, 87% 13%);
    background-color: ${({ theme }) => theme.orange};
    right: 30px;
    top: 29px;
  }
`
const StyledTitle = styled.div`
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
`
const Back = styled.div`
  width: 190px;
  height: 60px;
  background-color: ${({ theme }) => theme.orange};
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 2px;
  z-index: 1;
`
const H1 = styled.p`
  margin: 0;
  text-align: center;
  color: white;
  font-weight: 500;
  font-size: ${({ theme }) => theme.font.size.xxl};
  z-index: 999;
  position: relative;
  font-family: ${({ theme }) => theme.font.family.gilda};
`

const StyledLeftSide = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  position: relative;
`

const StyledRightSide = styled.div`
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
`
const StyledH5 = styled.p`
  width: 80%;
  font-size: ${({ theme }) => theme.font.size.xm};
  color: ${({ theme }) => theme.white};
  margin-bottom: 0;
  padding: 10px 0 0 0 !important;
  text-align: center;
  font-family: ${({ theme }) => theme.font.family.montserrat};
`
const StyledUL = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  color: ${({ theme }) => theme.white};
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-weight: 500;
  text-align: center;

  li {
    width: auto;
    list-style-position: inside;
  }
`
const IMG = styled.img`
  width: 600px;
  height: 600px;
`
const Bottom = styled.div`
  width: 100%;
  height: 100px;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    width: 100px;
    height: 100px;
    clip-path: polygon(0 0, 13% 0, 13% 87%, 100% 87%, 100% 100%, 0% 100%);
    background-color: ${({ theme }) => theme.orange};
    left: 30px;
    bottom: 30px;
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
          <Back />
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
