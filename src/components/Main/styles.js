import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-family: "Roboto", sans-serif;
`;

export const Title = styled.p`
  font-size: 48px;
  font-weight: 800;
  padding-bottom: 32px;
  text-align: center;
  color: white;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 280px;
`;

export const Button = styled.button`
  padding: 12px;
  background-color: black;
  color: white;
  font-size: 16px;
`;
