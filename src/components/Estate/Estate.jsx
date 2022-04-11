import React from "react"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"

const StyledWrapper = styled.form`
  width: 100%;
  height: calc(100vh - 350px);
  margin: 0 auto;
  background-color: ${({ theme }) => theme.black};
  border: 1px solid ${({ theme }) => theme.black};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`

const StyledTitleSection = styled.div`
  width: 100%;
  height: auto;
  min-height: 250px;
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
  color: ${({ theme }) => theme.white};
`
const StyledTitle = styled.div`
  width: 200px;
  height: auto;
  margin: 20px 0 10px 0;
  color: ${({ theme }) => theme.white};
  font-family: ${({ theme }) => theme.font.family.gilda};
  font-weight: 400;
  color: ${({ theme }) => theme.whiteMax};
  display: flex;
  justify-content: center;
  position: relative;
`
const Back = styled.div`
  width: 200px;
  height: 60px;
  background-color: ${({ theme }) => theme.orange};
  position: absolute;
  left: -115px;
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

const StyledDescriptionTitile = styled.p`
  width: 80%;
  height: 100px;
  text-align: center;
  word-break: normal;
  line-height: 1.3;
  font-weight: 300;
  font-family: ${({ theme }) => theme.font.family.montserrat};
`

const StyledInner = styled.div`
  width: auto;
  min-width: 1200px;
  height: 420px;
  margin: 0 auto;
  display: flex;
  gap: 70px;
  justify-content: center;
  align-items: center;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    width: 100px;
    height: 100px;
    clip-path: polygon(0 0, 100% 0, 100% 13%, 13% 13%, 13% 100%, 0% 100%);
    background-color: ${({ theme }) => theme.orange};
    left: -60px;
    top: -60px;
  }
`

const StyledImageInner = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  position: relative;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  h4 {
    width: auto;
    position: absolute;
    bottom: 15%;
    color: ${({ theme }) => theme.whiteMax};
    border-bottom: 1px solid ${({ theme }) => theme.white};
  }
  p {
    position: absolute;
    bottom: 8%;
    font-weight: 500;
    font-size: ${({ theme }) => theme.font.size.xxs};
    color: ${({ theme }) => theme.whiteMax};
  }
`
const IMG = styled.div`
  width: 280px;
  height: 380px;
  background-image: url("${({ image }) => image}");
  background-repeat: no-repeat;
  background-size: cover;
`
const StyledDesc = styled.div`
  width: 80%;
`
const InnerEmpty = styled.div`
  width: 70%;
  height: calc(100vh - 733px);
  margin-bottom: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.font.size.l};
  color: ${({ theme }) => theme.whiteMax};

  h3 {
    font-weight: 300;
  }
`

const Estate = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsEstate(limit: 4) {
        nodes {
          id
          titleestate
          slug
          descriptionestate
          galeryestate {
            url
          }
        }
      }
    }
  `)

  const HowMany = data.allDatoCmsEstate.nodes.length
  return (
    <StyledWrapper>
      <StyledTitleSection>
        <StyledTitle>
          <Back />
          <H1>Nieruchomości</H1>
        </StyledTitle>
        <StyledDescriptionTitile>
          Nieustannie poszukujemy nowych ofert nieruchomości. Wybierz
          nieruchomości, który Cię interesuje.
        </StyledDescriptionTitile>
      </StyledTitleSection>
      {HowMany > 0 ? (
        <StyledInner>
          {data.allDatoCmsEstate.nodes.map(estate => (
            <Link to={estate.slug} key={estate.id}>
              <StyledImageInner key={estate.id}>
                <IMG image={estate.galeryestate[0].url} alt="foto" />
                <StyledDesc>
                  <h4>{estate.titleestate}</h4>
                  <p>{estate.descriptionestate}</p>
                </StyledDesc>
              </StyledImageInner>
            </Link>
          ))}
        </StyledInner>
      ) : (
        <InnerEmpty>
          <div>
            <h3>Przykro nam obecnie nie mamy wolnychy nieruchomości</h3>
          </div>
        </InnerEmpty>
      )}
    </StyledWrapper>
  )
}

export default Estate
