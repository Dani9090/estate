import styled, { css } from "styled-components";

export const StyledWrapper = styled.form`
  width: 100%;
  height: auto;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.black};
  border: 1px solid ${({ theme }) => theme.black};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 0;

  &::after {
    position: absolute;
    content: "";
    width: 80px;
    height: 80px;
    clip-path: polygon(0 0, 12% 0, 12% 88%, 100% 88%, 100% 100%, 0% 100%);
    background-color: ${({ theme }) => theme.orange};
    left: 15px;
    bottom: 15px;
  }
;
  ${({ theme }) => theme.media.desktop} {

    &::after {
      position: absolute;
      content: "";
      width: 100px;
      height: 100px;
      clip-path: polygon(0 0, 12% 0, 12% 88%, 100% 88%, 100% 100%, 0% 100%);
      background-color: ${({ theme }) => theme.orange};
      left: 30px;
      bottom: 30px;
      
    }
    
  }
`;

export const StyledForm = styled.div`
  width: 80%;
  margin: 20px 0;
  position: relative;
  ${({ theme }) => theme.media.desktop} { 
    margin: 50px 0; 
  }
`;

export const StyledPerson = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  justify-content: center;
  gap: 40px 20px;
`;
export const StyledSection = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
`;

export const StyledInner = styled.div`
  width: auto;
  display: flex;
  justify-content: flex-start;
  position: relative;
  z-index: 1;
  color: ${({ theme }) => theme.white};

  textarea {
    width: 80vw;
    max-width: 450px;
    height: 120px;
    border: 1px solid ${({ theme }) => theme.orange};
    border-radius: 5px;
    z-index: 1;
    background-color: ${({ theme }) => theme.brown};
    font-family: ${({ theme }) => theme.font.family.montserrat};
    color: ${({ theme }) => theme.white};
    padding-left: 5px;
    padding-top: 15px;
  }
;

  input {
    width: 80vw;
    max-width: 450px;
    height: 60px;
    border: 1px solid ${({ theme }) => theme.orange};
    border-radius: 5px;
    z-index: 1;
    background-color: ${({ theme }) => theme.brown};
    color: ${({ theme }) => theme.white};
    padding-left: 5px;

    &::placeholder {
      padding: 5px;
    }

    ${({ Big }) =>
            Big &&
            css`
              height: 120px;

              &::placeholder {
                position: relative;
                top: 10px;
                color:red;
                font-size: 16px;
              }
            ;
            `};
  }

  p {
    width: auto;
    height: 20px;
    padding: 0 5px;
    position: absolute;
    top: -20px;
    left: 10px;
    color: ${({ theme }) => theme.orange};
    font-family: ${({ theme }) => theme.font.family.montserrat};
    font-size: ${({ theme }) => theme.font.size.xxs};
    background: linear-gradient(to top,
    ${({ theme }) => theme.brown} 50%,
    ${({ theme }) => theme.black} 0%);
    z-index: 9;
  }
;

  .error {
    z-index: 999;
    color: red;
  }
;

  ${({ theme }) => theme.media.desktop} {

    textarea {
      width: 450px;
      height: 120px;

    }
  ;

    input {
      min-width: 450px;
      height: 60px;
    }

  }
`;

export const StyledRadioWrapper = styled.div`
  width: 80vw;
  max-width: 450px;
  display: grid;
  place-items: center;
  gap: 20px;
  ${({ theme }) => theme.media.desktop} {
    width: 450px;
    display: flex;
    justify-content: center;
    gap: 20px;
  }
`;

export const StyledRadio = styled.div`  
  width: 70vw;
  max-width: 250px;
  height: 60px;
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.orange};
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-size: ${({ theme }) => theme.font.size.xs};
  border: 1px solid ${({ theme }) => theme.orange};
  border-radius: 5px;
  z-index: 1;
  background-color: ${({ theme }) => theme.brown};
  position: relative;
  label{
    display: flex;
    place-items: center;
  }

  input {
    width: 15px;
    height: 15px;
    margin-right:5px;
  }

  .error {
    width: auto;
    height: 20px;
    padding: 0 5px;
    position: absolute;
    top: -25px;
    left: 10px;
    color: red;
    font-family: ${({ theme }) => theme.font.family.montserrat};
    font-size: ${({ theme }) => theme.font.size.xs};
    background: linear-gradient(to top,
    ${({ theme }) => theme.brown} 50%,
    ${({ theme }) => theme.black} 0%);
    z-index: 9;
  }
  ${({ theme }) => theme.media.desktop} {
  max-width: 300px;

    &:last-child{
      min-width: 195px;
      
    }
  
  }
`;

export const StyledController = styled.div`  
  background-color: ${({ theme }) => theme.black};
  border: 1px ${({ theme }) => theme.black} solid;
  position: relative;

  p {
    width: auto;
    height: 20px;
    padding: 0 5px;
    position: absolute;
    top: -20px;
    left: 10px;
    color: ${({ theme }) => theme.orange};
    font-family: ${({ theme }) => theme.font.family.montserrat};
    font-size: ${({ theme }) => theme.font.size.xxs};
    background: linear-gradient(to top,
    ${({ theme }) => theme.brown} 50%,
    ${({ theme }) => theme.black} 0%);
    z-index: 9;

  }

  .error {
    z-index: 999;
    color: red;
  }
  option {

    max-width: 400px;
  }
`;
export const Select = styled.select`
   width: 80vw;
  max-width: 450px;
    display: flex;
    justify-content: flex-start;
    position: relative;
    z-index: 1;
    color: ${({ theme }) => theme.white};
    height: 60px;
    border: 1px solid ${({ theme }) => theme.orange};
    border-radius: 5px;
    background-color: ${({ theme }) => theme.brown};
    padding-left: 5px;
    font-family: ${({ theme }) => theme.font.family.montserrat};
    font-weight: 300;

    &::placeholder {
      padding: 5px;
    }
  
    option {     
    width: 400px;
    }

    p {
      width: auto;
      height: 20px;
      padding: 0 5px;
      position: absolute;
      top: -25px;
      left: 0;
      color: ${({ theme }) => theme.orange};
      font-family: ${({ theme }) => theme.font.family.montserrat};
      font-size: ${({ theme }) => theme.font.size.xs};
      background: linear-gradient(to top,
      ${({ theme }) => theme.brown} 50%,
      ${({ theme }) => theme.black} 0%);
      z-index: 9;
    }
  ;

    .error {
      z-index: 999;
      color: red;
    }
  ;
  
  ${({ theme }) => theme.media.tablet} {
    min-width: 450px;    
  }
  ${({ theme }) => theme.media.desktop} {
    width: auto;
    min-width: 450px;
    display: flex;
    justify-content: flex-start;
    position: relative;
    z-index: 1;
    color: ${({ theme }) => theme.white};
    height: 60px;
    border: 1px solid ${({ theme }) => theme.orange};
    border-radius: 5px;
    background-color: ${({ theme }) => theme.brown};
    padding-left: 5px;
    font-family: ${({ theme }) => theme.font.family.montserrat};
    font-weight: 300;

    &::placeholder {
      padding: 5px;
    }

    p {
      width: auto;
      height: 20px;
      padding: 0 5px;
      position: absolute;
      top: -25px;
      left: 0;
      color: ${({ theme }) => theme.orange};
      font-family: ${({ theme }) => theme.font.family.montserrat};
      font-size: ${({ theme }) => theme.font.size.xs};
      background: linear-gradient(to top,
      ${({ theme }) => theme.brown} 50%,
      ${({ theme }) => theme.black} 0%);
      z-index: 9;
    }
  ;
`;
export const StyledButton = styled.div`
  width: 100%;
  margin: 30px 0;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;

  input {
    width: 300px;
    height: 40px;
    border: 1px solid ${({ theme }) => theme.orange};
    background-color: ${({ theme }) => theme.brown};
    color: ${({ theme }) => theme.white};
    font-family: ${({ theme }) => theme.font.family.montserrat};
    font-weight: 600;
  }
  p {
    color: ${({ theme }) => theme.white};
    font-family: ${({ theme }) => theme.font.family.montserrat};
    font-weight: 400;
    padding-top: 30px;
    text-align: center;
    font-size: ${({ theme }) => theme.font.size.xxs};
  }
  ${({ theme }) => theme.media.desktop} {
    p {   
      color: ${({ theme }) => theme.white};
      font-family: ${({ theme }) => theme.font.family.montserrat};
      font-weight: 400;
      padding-top: 20px;
      font-size: ${({ theme }) => theme.font.size.xxs};
    }
  }
`;

export const StyledTitleSection = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 40px;
  padding-top: 0;
  justify-content: center;
  position: relative;
 
  &::after {
    position: absolute;
    content: "";
    width: 80px;
    height: 80px;
    clip-path: polygon(0 12%, 0 0, 100% 0, 100% 100%, 88% 100%, 88% 12%);
    background-color: ${({ theme }) => theme.orange};
    right: 15px;
    top: 15px;
  }
  ${({ theme }) => theme.media.desktop} {
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    position: relative;

    &::after {
      position: absolute;
      content: "";
      width: 100px;
      height: 100px;
      clip-path: polygon(0 12%, 0 0, 100% 0, 100% 100%, 88% 100%, 88% 12%);
      background-color: ${({ theme }) => theme.orange};
      right: 30px;
      top: 29px;
    }
  }
`;

export const StyledTitle = styled.div`
  width: 200px;
  height: auto;
  margin: 55px 0 10px 0;
  color: ${({ theme }) => theme.white};
  font-family: ${({ theme }) => theme.font.family.gilda};
  font-weight: 400;
  display: grid;
  place-items: center;

  ${({ theme }) => theme.media.desktop} {
    width: 200px;
    height: auto;
    margin: 40px 0 10px 0;
    color: ${({ theme }) => theme.white};
    font-family: ${({ theme }) => theme.font.family.gilda};
    font-weight: 400;
    display: flex;
    justify-content: center;
    position: relative;
  }

`;

export const H1 = styled.p`
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
    right: 49%;
    top: calc(-${({ theme }) => theme.font.size.m} / 7);

  }

  ${({ theme }) => theme.media.desktop} {
    font-size: ${({ theme }) => theme.font.size.xxl};

    &::before {
      min-width: 150px;
      height: calc(${({ theme }) => theme.font.size.xxl} * 1.4);
      right: 48%;
      top: calc(-${({ theme }) => theme.font.size.xxl} / 7);

    }

  }
`;
