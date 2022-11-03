import { Types } from "libs/shared/ui-web/src";
import { darken } from "polished";
import styled, { CSSProp, StyledComponent, StyledComponentBase } from "styled-components";

export const Container = styled.textarea<Types.UiWebTextAreaProps>`
  padding: 4px 11px;
  font-size: 16px;
  border-radius: 6px;
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  transition: all 0.5s;
  resize: none;
  &:focus {
    border-color: #40a9ff;
    outline: 0;

  }
  &:hover {
    border-color: ${(props) => darken(0.1, "#40a9ff")}; */
  }
`;
