import { View , Image} from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const IMAGE_URL =
  "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg";

export const UserCardContainer = styled(View)`
  padding:10px;
  flex-direction: row;
  align-content:space-between;
  background-color: white;
  box-shadow: 10px 10px grey;
`;

export const UserInfoCard = styled(Card)`
  flex:1;
  flex-direction:row;
  margin: 5px;
  padding: 10px;
  background-color: whitesmoke;
  justify-content: space-between;
`;

export const UserPic = styled(Card.Cover)`
  margin: 10px;
  width: 90px;
  height: 120px;
  box-shadow: 10px 10px grey;
  border-width: 0.5px;
`;

export const UserName = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.fontSizes.title};
`;

export const UserEmail = styled.Text`
  color: ${(props) => props.theme.colors.text.email};
`;
