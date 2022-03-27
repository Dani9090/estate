import styled, { css } from "styled-components"

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

export const StyledForm = styled.div`
  width: 80%;
  margin: 50px 0;
  position: relative;
`
export const StyledPerson = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  justify-content: center;
  gap: 40px 20px;
`
export const StyledSection = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
`

export const StyledInner = styled.form`
  width: auto;
  display: flex;
  justify-content: flex-start;
  position: relative;
  z-index: 1;
  color: ${({ theme }) => theme.white};

  input {
    min-width: 450px;
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
          top: -33px;
          font-size: 16px;
        }
      `}
  }

  p {
    width: auto;
    height: 20px;
    padding: 0 5px;
    position: absolute;
    top: -25px;
    left: 10px;
    color: ${({ theme }) => theme.orange};
    font-family: ${({ theme }) => theme.font.family.montserrat};
    font-size: ${({ theme }) => theme.font.size.xs};
    background: linear-gradient(
      to top,
      ${({ theme }) => theme.brown} 50%,
      ${({ theme }) => theme.black} 0%
    );
    z-index: 9;
  }

  .error {
    z-index: 999;
    color: red;
  }
`

export const StyledRadioWrapper = styled.div`
  width: 450px;
  display: flex;
  justify-content: space-between;
`

export const StyledRadio = styled.form`
  max-width: 270px;
  width: auto;
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
    background: linear-gradient(
      to top,
      ${({ theme }) => theme.brown} 50%,
      ${({ theme }) => theme.black} 0%
    );
    z-index: 9;
  }
`
export const P = styled.p`
  width: auto;
  padding: 0 10px;
`
export const StyledController = styled.div`
  background-color: ${({ theme }) => theme.black};
  border: 1px ${({ theme }) => theme.black} solid;
  position: relative;

  p {
    width: auto;
    height: 20px;
    padding: 0 5px;
    position: absolute;
    top: -25px;
    left: 50px;
    color: ${({ theme }) => theme.orange};
    font-family: ${({ theme }) => theme.font.family.montserrat};
    font-size: ${({ theme }) => theme.font.size.xs};
    background: linear-gradient(
      to top,
      ${({ theme }) => theme.brown} 50%,
      ${({ theme }) => theme.black} 0%
    );
    z-index: 9;
  }

  .css-1jwi8f4-singleValue {
    color: ${({ theme }) => theme.white};
  }
`
