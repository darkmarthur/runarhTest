import React, { useState } from "react";

import { View, Text, StyleSheet, Button, TextInput } from "react-native";

const AddTaskItem = props => {
  const [newTask, setNewTask] = useState({
    content: "",
    status: false,
    active: true
  });

  return (
    <View style={styles.row}>
      <TextInput
        style={styles.txtInput}
        placeholder="Insert new task here..."
        onChangeText={value => {
          setNewTask({ ...newTask, content: value });
        }}
      />
      <Button
        style={styles.btn}
        disabled={newTask.content.length == 0 ? true : false}
        title="Add"
        onPress={() => {
          props.addTodos(newTask);
        }}
      />
    </View>
  );
};

export default AddTaskItem;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10
  },
  btn: {
    flex: 1
  },
  txtInput: {
    flex: 1,
    borderColor: "#BEBEBE",
    borderWidth: 1,
    borderRadius: 60,
    paddingVertical: 10,
    paddingHorizontal: 15
  }
});
