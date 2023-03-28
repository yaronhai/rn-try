import React from "react";
import { StatusBar as ExopStatusBar } from 'expo-status-bar';
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={{ padding:16, backgroundColor:"green"}}>
          <Text>search</Text>
        </View>
        <View style={{flex:1, padding:16, backgroundColor:"blue"}}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExopStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,     
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight +5 : 0,
  }
});
