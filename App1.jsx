import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function DateSelector() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    setShow(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View style={styles.container}>
      <Button title="Select Date" onPress={showDatepicker} style={styles.button} />
      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
      <Text style={styles.text}>{date.toLocaleDateString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  button: {
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
});