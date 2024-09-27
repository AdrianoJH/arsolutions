import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 30px 50px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;
  padding: 30px 50px;
  background: #2a2a2a;
  box-shadow: -20px 20px 30px #000000;

  h1 {
    font-style: normal;
    font-weight: bold;
    color: #ffffff;
    text-shadow: -1px 1px 10px #0074ff;
  }

  span {
    font-weight: bold;
    font-size: 16px;
    color: #ffffff;
  }
`;
