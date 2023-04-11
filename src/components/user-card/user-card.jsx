import { Text } from "react-native";
import star from "../../assets/star";
import {
  PicContainer,
  UserCardContainer,
  UserInfoCard,
  UserPic,
  IMAGE_URL,
  UserName,
  UserEmail,
  UserStarSvg,
  Rating,
} from "./user-card.styles";

export const UserCard = ({ user }) => {
  const ratingArray = Array.from(new Array(Math.floor(user.rating)));
  return (
    <UserCardContainer>
      <UserInfoCard>
        <>
          <Rating>
            {ratingArray.map(() => (
              <UserStarSvg xml={star} />
            ))}
          </Rating>
          <UserName>{user.name}</UserName>
          <Text>{user.mobile}</Text>
          <UserEmail>{user.email}</UserEmail>
        </>
      </UserInfoCard>
      <PicContainer>
        <UserPic
          src={IMAGE_URL}
          alt={"user picture"}
          resizeMode={"stretch"}
          width={90}
          height={120}
        />
      </PicContainer>
    </UserCardContainer>
  );
};
