import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const StyledWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden !important;
 
  background-color: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  left: 0;
  top:0;
  z-index: 9999;
  transform: translateX(${({ isOpen }) => (isOpen ? "0%" : "-100%")});
  transition: transform 0.25s ease-in-out;
`

export const MenuLinkWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const MenuLink = styled.li`
  margin: 20px 0;
  list-style: none;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-size: ${({ theme }) => theme.font.size.s};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transition: opacity 0.25s 0.25s ease-in-out;
  text-decoration: none;
  border: none;
  background-color: transparent;
`;

export const StyledHome=styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 40px;
  font-family: ${({ theme }) => theme.font.family.cormorant};
  font-size: ${({ theme }) => theme.font.size.xl};
  font-weight: 600;
  display: grid;
  place-items: center;
 `
export const Links = styled(({isBig, ...props}) => <Link {...props} />)`
  font-size: ${({ theme, isBig }) => isBig ?  theme.font.size.l : theme.font.size.s};
  text-decoration: none;
  color: ${({ theme }) => theme.black};
`;