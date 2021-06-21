import React from "react";
import styled, { css } from "styled-components";
import palette from "../../styles/palette";

//* 버튼 색상 구하기
const getButtonColor = (color: string) => {
    switch (color) {
        case "dark_cyan":
            return css`
        background-color: ${palette.dark_cyan};
        color: white;
      `;
        case "bittersweet":
            return css`
        background-color: ${palette.bittersweet};
        color: white;
      `;
        case "amaranth":
            return css`
        background-color: ${palette.amaranth};
        color: white;
      `;
        default:
            return css`
        background-color: white;
        color: ${palette.black};
        border: 1px solid ${palette.gray_c4};
      `;
    }
};

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
  ${(props) => getButtonColor(props.color || "")};

  svg {
    margin-right: 12px;
  }
`;

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const Button: React.FC<IProps> = ({ children, color, ...props }) => {
    return <Container {...props} color={color}>{children}</Container>;
};

export default React.memo(Button);