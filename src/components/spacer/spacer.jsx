import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const TopSmall = styled.View`
  margin: 4px;
`;
const TopMedium = styled.View`
  margin: 8px;
`;
const TopLarge = styled.View`
  margin: 16px;
`;
export const Spacer = ({ variant }) => {
  switch (variant) {
    case "top.medium":
      return <TopMedium />;
    case "top.large":
      return <TopLarge />;
    default:
      return <TopSmall />;
  }
};
