import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;
  padding: 30px 0;

  h1 {
    font-style: normal;
    font-weight: bold;
    color: #ffffff;
    text-shadow: -1px 1px 10px #0074ff;
  }
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 100%;
  height: 100%;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  width: 320px;
  height: 410px;
  padding: 20px;
  background: #2a2a2a;
  box-shadow: -20px 20px 30px #000000;

  h2 {
    font-weight: bold;
    text-align: center;
    color: #ffffff;
    text-shadow: -1px 1px 10px #0074ff;
  }

  span {
    font-weight: bold;
    font-size: 16px;
    color: #ffffff;
  }
`;
export const BoxImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  min-height: 130px;

  img {
    height: 130px;
  }

  img#code {
    margin-top: -15px;
  }
  svg {
    font-size: 110px;
    transition: fill 0.3s ease;
    fill: url(#gradient);
  }
`;
