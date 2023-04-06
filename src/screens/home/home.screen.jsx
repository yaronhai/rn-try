import { SafeArea } from "../../components/safe-area/safe-area.component";
import { Searchbar } from "react-native-paper";
import {Text} from 'react-native';
import { HomeContainer, HomeTitle } from "./home.styles";
import { UserCard } from "../../components/user-card/user-card";
import { USERS } from "../../users/users";

export const HomeScreen = () => {
    return(
      <SafeArea>
        <HomeContainer>
          <Searchbar />
          <HomeTitle>Home</HomeTitle>
          <UserCard user={USERS.user1}/>
          <UserCard user={USERS.user2}/>
        </HomeContainer>
      </SafeArea>
    )
  }