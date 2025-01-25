import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Slot } from "expo-router";

const _layout = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "gray" }}>
      <View style={{ height: "90%" }}>
        <Slot />
      </View>
      <Link href={"/"}> Home</Link>
      <Link href="/ExplorePage">
        <Text>Explore</Text>
      </Link>
      <Link href="/Foryou">
        <Text>Home</Text>
      </Link>
      <Link href="/Account">
        <Text>Account</Text>
      </Link>
    </SafeAreaView>
  );
};

export default _layout;

const styles = StyleSheet.create({});
