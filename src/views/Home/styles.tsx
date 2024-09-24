import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 0px 50px;
  background-image: url("/src/assets/images/bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
  padding-top: 120px;
  width: 100%;
  height: 100%;
`;

export const BoxTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-top: 70px;

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    color: #ffffff;
    text-shadow: -1px 1px 10px #0074ff;
  }
`;

export const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  span {
    font-weight: bold;
    font-size: 16px;
    color: #ffffff;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 50px;
  background: linear-gradient(90deg, #043b8f 0%, #0074ff 51.5%, #043b8f 100%);
  box-shadow: -10px 15px 30px #000000;
  border-radius: 15px;
  border: none;
  font-weight: bold;
  font-size: 30px;
  color: #ffffff;
  text-shadow: -2px 2px 20px #000000;
  cursor: pointer;
  z-index: 9999999999999;
`;

export const BoxImg = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
`;
