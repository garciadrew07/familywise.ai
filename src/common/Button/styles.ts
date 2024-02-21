import styled from "styled-components";

export const StyledButton = styled("button")<{ color?: string }>`
  background: ${(p) => p.color || "#4484F0"};
  color: ${(p) => (p.color ? "#4484F0" : "#fff")};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 1px solid #edf3f5;
  border-radius: 12px;
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid #0053B7;
    background-color: #0053B7;
  }
`;

export const Button2 = styled.button`
  overflow: visible;
  border-style: solid;
  border-width: 2px;
  border-color: rgb(17, 20, 45);
  border-radius: 12px;
  padding: 0px;
  opacity: 1;
  transition: background 200ms ease 0s;
  cursor: pointer;
  align-self: center;
  min-width: 222px;
  max-width: 222px;
  order: 4;
  min-height: 58px;
  max-height: 58px;
  width: 222px;
  flex-grow: 1;
  height: 58px;
  margin: 0px;
  z-index: 66;
  background: none transparent;
  
  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid #0053B7;
    background-color: rgb(17, 20, 45) ;
  }
`;
