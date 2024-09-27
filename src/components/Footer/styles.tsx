import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  padding-bottom: 10px;
  z-index: 10;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 100%;

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    color: #ffffff;
  }
`;

export const BoxSocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
  height: 100%;

  a {
    position: relative;
    svg {
      font-size: 18px;
      color: #fff;
      transition: fill 0.3s ease;

      &:hover {
        fill: url(#gradient);
      }
    }

    &::after {
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -5px;
      left: 0;
      content: " ";
      background: linear-gradient(
        270deg,
        #043b8f 0%,
        #0074ff 51%,
        #043b8f 100%
      );
      transition: 0.5s ease-in-out;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;
