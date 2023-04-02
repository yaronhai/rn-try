import { SafeArea } from "../../components/safe-area/safe-area.component";
import { Searchbar } from "react-native-paper";
import {Text} from 'react-native';
import { HomeContainer, HomeTitle } from "./home.styles";


export const HomeScreen = () => {
    return(
      <SafeArea>
        <HomeContainer>
          <Searchbar />
          <HomeTitle>Home</HomeTitle>
        </HomeContainer>
      </SafeArea>
    )
  }