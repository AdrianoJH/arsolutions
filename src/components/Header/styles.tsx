import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 0 30px;
  z-index: 999999;

  button#btn-mobile {
    display: none;
  }

  .visible {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .hidden {
    display: none;
  }

  div#button {
    display: none;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;

    div#button {
      display: flex;
      justify-content: start;
      align-items: end;
      width: 100%;
      height: 10px;
    }

    button#btn-menu-mobile {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 22px;
      height: auto;
      border: none;
      background: none;
      z-index: 99999;

      svg#open {
        position: absolute;
        width: 18px;
        height: 18px;
        top: 18px;
        left: 10px;
        color: #fff;
      }

      svg#close {
        position: absolute;
        width: 18px;
        height: 18px;
        top: 10px;
        left: 5px;
        color: #fff;
      }
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1110px) {
    padding: 0 10px;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  width: 60%;
  height: 100%;
  top: 0px;
  left: 0;
  padding: 0 20px;
  background: linear-gradient(180deg, #000000 0%, #171717 60%);
  z-index: 10000;

  ul {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    width: 100%;
    top: 30px;

    li {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      list-style: none;
      margin-top: 25px;
      color: #fff;

      a {
        width: 100%;
        text-decoration: none;
        text-align: start;
        font-size: 16px;
        font-weight: bold;
        color: #fff;
      }

      svg {
        margin-right: 10px;
        font-size: 20px;
      }

      &.active {
        svg {
          transition: fill 0.3s ease;
          fill: url(#gradient);
        }
        a {
          position: relative;
          width: auto;
          background: linear-gradient(
            270deg,
            #043b8f 0%,
            #0074ff 51%,
            #043b8f 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;

          &::after {
            position: absolute;
            width: 100%;
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
        }
      }
    }
  }

  a#boxImgLogo {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    min-height: 200px;
    margin-bottom: -30px;
  }

  img#logo-menu-mobile {
    width: 150px;
    height: 150px;
  }
`;

export const ImgBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding-top: 50px;

  img#logo {
    width: 120px;
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    img#logo {
      margin-left: 10px;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1110px) {
    img#logo {
      width: 180px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 70%;
  height: 100%;

  ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 50px;
    width: 100%;

    li {
      list-style: none;

      a {
        position: relative;
        text-decoration: none;
        font-size: 20px;
        font-weight: bold;
        color: #fff;
        cursor: pointer;

        &:hover {
          background: linear-gradient(
            270deg,
            #043b8f 0%,
            #0074ff 51%,
            #043b8f 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
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

      &.active {
        a {
          position: relative;
          background: linear-gradient(
            270deg,
            #043b8f 0%,
            #0074ff 51%,
            #043b8f 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;

          &::after {
            position: absolute;
            width: 100%;
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
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 769px) and (max-width: 1110px) {
    width: 60%;

    ul {
      gap: 20px;
      width: 100%;

      li {
        a {
          font-size: 16px;
        }
      }
    }
  }
`;

export const BoxSocialIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
  width: 15%;
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

  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    gap: 10px;
    width: auto;

    a {
      svg {
        font-size: 16px;
      }
    }
  }
`;

export const BoxSocialIconsMobile = styled.div`
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
