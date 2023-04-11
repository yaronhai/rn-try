import React from "react";

import { StatusBar as ExopStatusBar } from "expo-status-bar";

import { MobileCamera } from "./src/utils/camera/camera";
import { NavigationContainer } from "@react-navigation/native";
import { MyTabs } from "./src/components/navigation/navigation";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme/index";
import { useFonts as useOwwald, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";


const isAndroid = Platform.OS === "android";

export default function App() {
  const [oswaldLoaded] = useOwwald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  
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
