import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;
  padding: 30px 50px;

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
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  height: 100%;
  padding: 30px 50px 0 50px;
  background: #2a2a2a;
  box-shadow: -20px 20px 30px #000000;
`;
export const BoxAdress = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  height: 100%;

  span {
    display: flex;
    align-items: flex-end;
    gap: 5px;
    font-weight: bold;
    font-size: 18px;
    color: #ffffff;
  }

  svg {
    font-size: 22px;
    transition: fill 0.3s ease;
    fill: url(#gradient);
  }
`;
export const BoxImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 308px;

  img {
    width: 225px;
  }
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;

  form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    width: 100%;
    height: 100%;
  }

  input {
    width: 100%;
    height: 30px;
    padding-left: 10px;
    border: none;
    font-weight: bold;
    font-size: 16px;
    color: #000000;
    background: #b4b6b9;
    box-shadow: -5px 5px 10px #000000;

    &:focus {
      outline: none;
    }

    &::placeholder {
      font-weight: bold;
      color: #676767;
    }
  }

  textarea {
    width: 100%;
    height: 150px;
    padding: 10px;
    border: none;
    font-weight: bold;
    font-size: 16px;
    color: #000000;
    background: #b4b6b9;
    box-shadow: -5px 5px 10px #000000;

    &:focus {
      outline: none;
    }

    &::placeholder {
      font-weight: bold;
      color: #676767;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    font-size: 26px;
    color: #ffffff;
    background: linear-gradient(90deg, #043b8f 0%, #0074ff 51%, #043b8f 100%);
    box-shadow: -10px 15px 30px #000000;
    cursor: pointer;
  }
`;
