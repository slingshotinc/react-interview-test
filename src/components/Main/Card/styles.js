import styled from "styled-components";

export const Container = styled.div`
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
