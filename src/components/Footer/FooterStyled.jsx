import styled from "styled-components"
import { Link } from "gatsby"

export const StyledFooter = styled.div`
  width: 100vw;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${({ theme }) => theme.blackDark};

  ${({ theme }) => theme.media.desktop} {
    width: 100%;
    height: 285px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${({ theme }) => theme.blackDark};
    border: 1px solid red;
  }
`
export const StyledWrapper = styled.footer`
  width: 100vw;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  ${({ theme }) => theme.media.desktop} {
    width: 90%;
    height: 285px;
  }
`

export const StyledP = styled.p`
  text-align: center;
  margin: 10px 5% 0 5%;
  font-size: ${({ theme }) => theme.font.size.xxs};
  font-family: ${({ theme }) => theme.font.family.inter};
  font-weight: 400;
  line-height: 1.3;
  color: ${({ theme }) => theme.white};

  ${({ theme }) => theme.media.desktop} {
    text-align: center;
    margin-top: 10px;
    font-size: ${({ theme }) => theme.font.size.xxs};
  }
`
export const Links = styled(Link)`
  font-size: ${({ theme }) => theme.font.size.xs};
  padding-right: 20px;
  text-decoration: none;
  color: ${({ theme }) => theme.white};

  b {
    padding: 0 10px;
    width: 35px;
    height: 35px;
    border: 1px black solid;
    border-radius: 50%;
  }

  &:hover {
    padding-right: 10px;
    margin-right: 10px;
    color: ${({ theme }) => theme.honey};
    text-decoration: none;
    border-left: none;
    transition: ease-in 0.3s;
  }

  ${({ theme }) => theme.media.desktop} {
    font-size: ${({ theme }) => theme.font.size.s};

    &.active {
      border-bottom: 3px solid ${({ theme }) => theme.primary};
      border-left: none;
      font-size: ${({ theme }) => theme.font.size.xxm};
      margin: 0 10px;
    }
  }
`

export const Phone = styled.div`
  width: 80%;
  max-width: 320px;
  text-decoration: none;
  height: auto;
  display: grid;
  place-items: center;
  grid-template-columns: 0.9fr 1.1fr;
  position: relative;
  border: 1px solid red;

  p {  
    width: auto;
    border: 1px solid red;
    height: 25px;
    font-weight: 400;
    max-width: 200px;
    font-size: ${({ theme }) => theme.font.size.xm};
    letter-spacing: 0.2em;

    &:last-child {

     font-size: ${({ theme }) => theme.font.size.xm};
      color: ${({ theme }) => theme.honey};
    }
  }

  ${({ theme }) => theme.media.desktop} {
    max-width: 200px;
    height: 60px;
    margin-left: 80px;
    display: flex;
    flex-direction: column;

    p {
      margin: 0 auto;
      height: 25px;
      font-weight: 400;
      max-width: 200px;
      font-size: ${({ theme }) => theme.font.size.xm};
      letter-spacing: 0.2em;

      &:last-child {
        margin-top: 5px;
        font-size: ${({ theme }) => theme.font.size.m};
        color: ${({ theme }) => theme.honey};
      }
    }
  }
`
