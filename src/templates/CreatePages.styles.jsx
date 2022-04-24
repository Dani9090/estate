import styled from "styled-components"
import { Carousel } from "react-responsive-carousel"

export const StyledWrapper = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  background-color: ${({ theme }) => theme.black};
`
export const StyledInner = styled.div`
  width: 100%;
  display: grid;
  padding: 0;
  margin-top: 100px;
  grid-auto-columns: 1fr;
  line-height: 1.5;
  place-items: center;
  grid-template-areas:
    "two"
    "one"    
    "three"
    "four";
  color: ${({ theme }) => theme.white};
  font-family: ${({ theme }) => theme.font.family.montserrat};
  
  ${({ theme }) => theme.media.desktop} {
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
    border: 1px solid red;
  }
`
export const StyledImg = styled.div`
  width: 100%;
  height: auto;
  margin: 0;
  display: grid;
  place-items: center;

  ${({ theme }) => theme.media.desktop} {
    width: auto;
    display: grid;
    place-items: center;
  }
`
export const IMG = styled.img`
  width: 100%;
  height: auto;  
  object-fit: cover;
  ${({ theme }) => theme.media.desktop} {
    width: auto;
    height: auto;
    max-height: 570px;
    object-fit: cover;
  }
`
export const StyledSectionTitle = styled.div`
  width: 90%;
  margin: 0 auto;
  grid-area: two;
  line-height: 1.5;
  display: grid;
  place-items: center;

  h4 {
    width: auto;
    max-width: 130px;
    padding: 10px 0;
    color: ${({ theme }) => theme.whiteMax};
    font-weight: 500;
    font-size: ${({ theme }) => theme.font.size.xs};
    border-bottom: 1px solid ${({ theme }) => theme.whiteMax};
    margin-left: 0;
  }

  p {
    padding: 10px 0;
    font-weight: 300;
    width: 90%;
  }
  ${({ theme }) => theme.media.desktop} {
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
  }
`
export const StyledTitle = styled.div`
  width: 100%;
  height: auto;
  margin-left: 0;
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
  ${({ theme }) => theme.media.desktop} {
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
  }
`

export const H2=styled.div`
  width: 91%;
  z-index: 9;
  font-weight: 400;
  color: ${({ theme }) => theme.whiteMax};
  position: relative;
  font-size: ${({ theme }) => theme.font.size.m};
  border: 1px solid green;
  &::before {
    z-index: -1;
    position: absolute;
    content: '';
    width: 100%;
    min-width: 100px;
    height: calc(${({ theme }) => theme.font.size.xm} * 2);
    background-color: ${({ theme }) => theme.orange};
    border-radius: 2px;
    left: -55%;
    top: calc(${({ theme }) => theme.font.size.xm} / 10);
  }
  ${({ theme }) => theme.media.desktop} {
   z-index: 9;
  font-weight: 400;
  color: ${({ theme }) => theme.whiteMax};
  position: relative;
  font-size: ${({ theme }) => theme.font.size.m};
 
  &::before {
    z-index: -1;
    position: absolute;
    content: '';
    width: 100%;
    min-width: 100px;
    height: calc(${({ theme }) => theme.font.size.xm} * 2);
    background-color: ${({ theme }) => theme.orange};
    border-radius: 2px;
    left: -55%;
    top: calc(${({ theme }) => theme.font.size.xm} / 10);
  }
  }
`

export const StyledDetails = styled.div`
  width: 90%;
  grid-area: three;
  padding: 5px 30px;
  margin-bottom: 30px;
  

  h4 {
    padding: 20px 0 10px 0;
    margin: 0;
    font-weight: 600;
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
  ${({ theme }) => theme.media.desktop} {
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
  }
`
export const StyledContact = styled.div`
  width: 90%;
  margin: 0 auto;
  grid-area: four;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 0;
 
  ${({ theme }) => theme.media.desktop} {
    width: 80%;
    margin: 0 auto;
    grid-area: four;
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 10px 0;
  }
`
export const StyledImgContact = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  object-fit: cover;
  ${({ theme }) => theme.media.desktop} {
    width: 160px;
    height: 160px;
    border-radius: 100%;
    object-fit: cover;
  }
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
  ${({ theme }) => theme.media.desktop} {
    width: 100%;
    display: grid;
    place-items: center;
    max-height: 70vh;
    grid-area: one;
    object-fit: cover;
    margin-bottom: 0;
  }
`
export const Carousels = styled(Carousel)`
  width: 80%;
`
export const Div = styled.div`
  width: 80%;

`
