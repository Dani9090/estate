import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

export const StyledWrapper = styled.div`
  width: 100vw;
  height: auto;
  background-color: ${({ theme }) => theme.black};
  border: 1px solid ${({ theme }) => theme.black};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;  

  ${({ theme }) => theme.media.desktop} {
    width: 100%;
    height: auto;
    min-height: calc(100vh - 275px);
    background-color: ${({ theme }) => theme.black};
    border: 1px solid ${({ theme }) => theme.black};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    
  }
  ${({ theme }) => theme.media.Biglarge} {
    width: 100%;
    height: calc(100vh - 385px);
    background-color: ${({ theme }) => theme.black};
    border: 1px solid ${({ theme }) => theme.black};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;

  }
  
`

export const StyledTitleSection = styled.div` 
  width: 100%;
  height: auto;
  min-height: 250px;
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
  color: ${({ theme }) => theme.white};
  margin-bottom: 40px;
  ${({ theme }) => theme.media.desktop} {
    width: 100%;
    height: auto;
    min-height: 100px;
    display: flex;
    align-items: center;
    position: relative;
    flex-direction: column;
    color: ${({ theme }) => theme.white};
    margin-bottom: 40px;
   
  }
`
export const StyledTitle = styled.div`
  width: 100vw;
  height: auto;
  margin: 100px 0 10px 0;
  color: ${({ theme }) => theme.white};
  font-family: ${({ theme }) => theme.font.family.gilda};
  font-weight: 400;
  color: ${({ theme }) => theme.whiteMax};
  display: flex;
  justify-content: center;
  position: relative; 
  ${({ theme }) => theme.media.desktop} {
    width: 200px;
    height: auto;
    margin: 0 ;
    color: ${({ theme }) => theme.white};
    font-family: ${({ theme }) => theme.font.family.gilda};
    font-weight: 400;
    color: ${({ theme }) => theme.whiteMax};
    display: flex;
    justify-content: center;
    position: relative;

  }
`
export const Back = styled.div`
  width: 200px;
  height: 60px;
  background-color: ${({ theme }) => theme.orange};
  position: absolute;
  left: -115px;
  top: 0;
  border-radius: 2px;
  z-index: 1;
  ${({ theme }) => theme.media.desktop} {
    width: 200px;
    height: 70px;
    background-color: ${({ theme }) => theme.orange};
    position: absolute;
    left: -115px;
    top: -20px;
    border-radius: 2px;
    z-index: 1;

  }
`
export const H1 = styled.p`
  margin: 0;
  text-align: center;
  color: white;
  font-weight: 500;
  font-size: ${({ theme }) => theme.font.size.xxl};
  z-index: 99;
  position: relative;
  font-family: ${({ theme }) => theme.font.family.gilda};
  ${({ theme }) => theme.media.desktop} {
    z-index: 999;
    font-size: ${({ theme }) => theme.font.size.xl};
    
  }
  
`

export const StyledDescriptionTitle = styled.p`
  width: 80%;
  height: auto;
  text-align: center;
  word-break: normal;
  line-height: 1.3;
  font-weight: 300;
  font-family: ${({ theme }) => theme.font.family.montserrat};
`

export const StyledInner = styled.div`
  width: auto;
  height: auto;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    width: 90px;
    height: 90px;
    clip-path: polygon(0 0, 100% 0, 100% 8%, 8% 8%, 8% 100%, 0% 100%);
    background-color: ${({ theme }) => theme.orange};
    left: -30px;
    top: -30px;
  }

  ${({ theme }) => theme.media.desktop} {
    width: auto;
    min-width: 1200px;
    height: 420px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    gap: 70px;
    justify-content: center;
    align-items: center;
    position: relative;

    &::after {
      position: absolute;
      content: "";
      width: 100px;
      height: 100px;
      clip-path: polygon(0 0, 100% 0, 100% 12%, 12% 12%, 12% 100%, 0% 100%);
      background-color: ${({ theme }) => theme.orange};
      left: -60px;
      top: -50px;
    }
  }
`

export const StyledImageInner = styled.div`
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
export const StyledImg = styled.div`
  width: 280px;
  height: 380px;
/*  background-image: url("${({ image }) => image}");
  background-repeat: no-repeat;
  background-size: cover;*/
`

export const IMG = styled(GatsbyImage)`
  width: 100vw;
  height: 100vh;
  object-fit: cover;

  ${({ theme }) => theme.media.desktop} {
    width: 280px;
    height: 380px;
    object-fit: cover;
    
  }
`

export const StyledDesc = styled.div`
  width: 80%;
`
export const InnerEmpty = styled.div`
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
/*
export const IMG = styled.div`
  width: 280px;
  height: 380px;
  background-image: url("${({ image }) => image}");
  background-repeat: no-repeat;
  background-size: cover;`*/
