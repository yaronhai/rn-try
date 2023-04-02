import React from "react";

import { StatusBar as ExopStatusBar } from "expo-status-bar";

import { MobileCamera } from "./src/utils/camera/camera";
import { NavigationContainer } from "@react-navigation/native";
import { MyTabs } from "./src/components/navigation/navigation";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  //SafeAreaView,
  Platform,
} from "react-native";

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
          
          
            <MyTabs /> 
          

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    //backgroundColor: "blue",
  },
});
