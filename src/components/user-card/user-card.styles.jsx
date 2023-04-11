import { View, Image } from "react-native";
import { SvgXml } from "react-native-svg";

import styled from "styled-components/native";

export const IMAGE_URL =
  "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg";

export const UserCardContainer = styled(View)`
  elevation: 3;
  width: 95%;
  margin-top: 5px;
  padding: 5px;
  flex-direction: row;
  align-content: space-between;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const UserInfoCard = styled(View)`
  flex: 1;
  flex-direction: column;
  margin: 5px;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  elevation: 5;
`;

export const PicContainer = styled.View`
  padding: 5px;
  margin: 10px;
  elevation: 5;
  border-width: 0;
`;
export const UserPic = styled(Image)`
  width: 90px;
  height: 120px;
`;

export const UserName = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.text.heading};
`;

export const UserEmail = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.text.email};
`;

export const UserStarSvg = styled(SvgXml)`
  width: 15px;
  height: 15px;
`;

export const Rating = styled.View`
  flex-direction: row;
  padding: 5px;
`;
