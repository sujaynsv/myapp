import React from "react";
import { View } from "react-native";
import DateSelector from "./components/DateSelector";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <DateSelector />
    </View>
  );
}