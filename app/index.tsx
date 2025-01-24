import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View>
      <Text>index</Text>
      <Button title="Press me" onPress={() => console.log("Pressed")} />
      <Link href={"/"}>
        <Text>Go to account</Text>
      </Link>
      <Link href={` ${String}: /Account`}>
        <Text> Go to Explore </Text>
      </Link>
      <Link href={` ${String}: /Account`}>
        <Text>Go to Foryou </Text>
      </Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
