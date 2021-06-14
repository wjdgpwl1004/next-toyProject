import React from "react";
import styled, { css } from "styled-components";
import palette from "../../styles/palette";

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 0 15px;
  border: 0;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 700;
  outline: none;
  cursor: pointer;

  svg {
    margin-right: 12px;
  }
`;

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const Button: React.FC<IProps> = ({ children, ...props }) => {
    return <Container {...props}>{children}</Container>;
};

export default React.memo(Button);