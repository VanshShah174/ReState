import { Link } from "expo-router";
import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text className="font-bold text-3xl font-rubik my-10">Welcome to Restate</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
