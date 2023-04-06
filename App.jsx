import React from "react";

import { StatusBar as ExopStatusBar } from "expo-status-bar";

import { MobileCamera } from "./src/utils/camera/camera";
import { NavigationContainer } from "@react-navigation/native";
import { MyTabs } from "./src/components/navigation/navigation";
import { ThemeProvider } from "styled-components/native";
import {theme} from './src/theme/index';


const isAndroid = Platform.OS === "android";

export default function App() {
  return (
    <>

          {/* <View style={styles.search}>
            <Searchbar />
          </View>
          <View style={styles.list}>
            <Text>Yaron's list</Text>
          </View>
          <MobileCamera />*/}
          
      <ThemeProvider theme={theme}>
        <MyTabs /> 
      </ThemeProvider>    
    </>
  );
}

