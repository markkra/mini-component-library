import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <IconInputWrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper id={icon} size={SIZES[size].iconSize} />
      <TextInput
        type="text"
        placeholder={placeholder}
        size={size}
        width={width}
      ></TextInput>
    </IconInputWrapper>
  );
};

const SIZES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
    padding: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
    padding: 36,
  },
};

const IconInputWrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }

  &:focus-within {
    color: ${COLORS.primary};
  }
`;

const TextInput = styled.input`
  height: ${(p) => SIZES[p.size].height}px;
  width: ${(p) => p.width}px;
  border: none;
  border-bottom: ${(p) => SIZES[p.size].borderThickness}px solid ${COLORS.black};
  color: inherit;
  font-weight: 700;
  font-size: ${(p) => SIZES[p.size].fontSize / 16}rem;
  padding-inline-start: ${(p) => SIZES[p.size].padding}px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const IconWrapper = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
`;

export default IconInput;
