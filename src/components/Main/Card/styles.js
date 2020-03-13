import styled from "styled-components";

const shadow = "rgba(0, 0, 0, 0.25)";
const formWidth = 260;

export const Button = styled.button`
  border: none;
  border-radius: 4px;
  background-color: ${props => props.bg || "white"};
  padding: 8px 12px;
  margin-right: 12px;
  box-shadow: inset 2px 2px 2px ${shadow};
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  width: ${formWidth - 24}px;
  padding: 12px;
  bottom: 0;
  left: 0;
`;

export const Container = styled.div`
  position: relative;
  color: white;
  background-color: #f2f2f2;
  border-radius: 4px;
  border: 2px solid #515252;
  padding: 16px 0 0;
  width: 280px;
  text-align: center;
  margin: 12px 0;
  box-shadow: inset 0 0 100px 90px black, 0 4px 14px black;
`;

export const Form = styled.div`
  position: absolute;
  text-align: left;
  background-color: #696969;
  border-radius: 4px;
  border-top-left: 4px;
  border-bottom-left: 4px;
  top: 0;
  right: 100%;
  transition: width 500ms;
  width: ${props => (props.editActive ? `${formWidth}px` : "0")};
  height: 100%;
  overflow: hidden;
`;

export const FormInner = styled.div`
  width: ${formWidth - 24}px;
  margin: 12px;
`;

export const Input = styled.input`
  display: inline-block;
  border-radius: 4px;
  padding: 4px;
  box-shadow: inset 2px 2px 2px ${shadow};
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const Label = styled.label``;

export const Name = styled.p`
  padding-bottom: 16px;
  font-size: 24px;
  margin: 12px 0 0;
`;

export const PlayerImg = styled.img``;

export const Team = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
  margin: 0;
  height: 48px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: inset 0 6px 24px 0 #868282;
  font-weight: 800;
`;
