import {UserCardContainer, UserInfoCard, UserPic, IMAGE_URL, UserName,UserEmail} from "./user-card.styles";
import { Text } from 'react-native-paper';


export const UserCard = ({user}) => {

    return(
        <UserCardContainer> 
            <UserInfoCard elevation={5}>
                <>
                    <UserName>{user.name}</UserName>
                    <UserEmail>{user.email}</UserEmail>
                </>
            </UserInfoCard>
                <UserPic
                    source={{uri:IMAGE_URL}} 
                    alt={ 'user picture'}
                    resizeMode ={'stretch'}
                />
        </UserCardContainer>     
    )
}