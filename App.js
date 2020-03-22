import React from "react";

import { StyleSheet } from "react-native";
import Administrator from "./Logic/Administrator";

export default function App() {
  return <Administrator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
