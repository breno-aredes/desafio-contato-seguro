import styled from "styled-components";

import { StyledButtonProps } from "../../types/Button";

const possibleColors = {
  blue: {
    "background-color": "#4a90e2",
    border: `1px solid #4a90e2 `,
    color: "white",
    "&:hover": {
      backgroundColor: "#2f79ce",
    },
  },
  disabled: {
    "background-color": "gray",
    border: `1px solid gray`,
    color: "#333",
  },
  transparent: {
    "background-color": "transparent",
    border: `1px solid #4a90e2 `,
    color: "#4a90e2",
    "&:hover": {
      backgroundColor: "#e8f0fa",
    },
  },
};

const possibleSizes = {
  sm: {},
  md: {
    width: "200px",
    borderRadius: "10px",
    fontSize: "14px",
  },
};

export const StyledButton = styled.button<StyledButtonProps>(
  ({ color, size, disabled }) => ({
    ...possibleColors[
      disabled ? "disabled" : (color as keyof typeof possibleColors)
    ],
    ...possibleSizes[size as keyof typeof possibleSizes],
    fontWeight: "500",

    padding: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "0.2s",
    svg: {
      fontSize: "20px",
    },
  })
);
