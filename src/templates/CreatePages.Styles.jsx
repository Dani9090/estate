import styled from "styled-components"
import { Carousel } from "react-responsive-carousel"

export const StyledWrapper = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  background-color: ${({ theme }) => theme.black};
`
export const StyledInner = styled.div`
  width: 80%;
  display: grid;
  padding: 0;
  margin: 0;
  grid-auto-columns: 1fr;
  line-height: 1.5;
  grid-template-areas:
    "one one"
    "two three"
    "four four";
  color: ${({ theme }) => theme.white};
  font-family: ${({ theme }) => theme.font.family.montserrat};
`
export const StyledImg = styled.div`
  width: auto;
  display: grid;
  place-items: center;
`
export const IMG = styled.img`
  width: auto;
  height: auto;
  max-height: 570px;
  object-fit: cover;
`
export const StyledSectionTitle = styled.div`
  width: 80%;
  margin-left: 20%;
  grid-area: two;
  line-height: 1.5;

  h4 {
    width: auto;
    max-width: 130px;
    padding: 10px 0;
    color: ${({ theme }) => theme.whiteMax};
    font-weight: 500;
    font-size: ${({ theme }) => theme.font.size.xs};
    border-bottom: 1px solid ${({ theme }) => theme.whiteMax};
  }
  p {
    padding: 10px 0;
    font-weight: 300;
    width: 50%;
  }
`
export const StyledTitle = styled.div`
  width: auto;
  height: auto;
  margin-left: 4%;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.font.size.xm};
  font-family: ${({ theme }) => theme.font.family.gilda};
  font-weight: 400;
  position: relative;
  z-index: 9;
  h2 {
    z-index: 9;
    font-weight: 400;
    color: ${({ theme }) => theme.whiteMax};
  }
`
export const Back = styled.div`
  width: 185px;
  height: 60px;
  background-color: ${({ theme }) => theme.orange};
  position: absolute;
  left: -32px;
  top: -5px;
  border-radius: 2px;
  z-index: -1;
`

export const StyledDetails = styled.div`
  width: 90%;
  margin-left: 10%;
  grid-area: three;
  padding: 5px 30px;

  h4 {
    padding: 30px 0 10px 0;
    margin: 0;
    font-weight: 500;
  }
  p {
    padding: 0;
    margin: 0;
    font-weight: 500;
    &:last-child {
      font-weight: 300;
      padding-left: 15px;
    }
  }
  div {
    height: auto;
    padding: 15px 0;
    display: flex;
  }
`
export const StyledContact = styled.div`
  width: 80%;
  margin: 0 auto;
  grid-area: four;
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 10px 0;
`
export const StyledImgContact = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 100%;
  object-fit: cover;
`

export const StyledDescriptionContact = styled.div`
  width: auto;
  height: auto;
  padding: 40px 0;
  h3 {
    font-weight: 500;
    margin: 5px 0;
  }
  p {
    margin: 0;
    padding: 5px 0;
    font-weight: 300;
    a {
      color: ${({ theme }) => theme.white};
      text-decoration: none;
    }
  }
`
export const StyledCarousel = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  max-height: 70vh;
  grid-area: one;
  object-fit: cover;
  margin-bottom: 0;
`
export const Carousels = styled(Carousel)`
  width: 80%;
`
