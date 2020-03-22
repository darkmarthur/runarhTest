import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  Switch,
  ScrollView,
  Button
} from "react-native";

const TaskItem = props => {
  return (
    <View style={styles.taskItem}>
      <Switch
        style={styles.toggle}
        value={props.data.status}
        onValueChange={() => {
          props.updateTodos(props.index);
          // console.log(props.data.id);
        }}
      />
      <ScrollView style={styles.taskContent} horizontal={true}>
        <Text>{props.data.content}</Text>
      </ScrollView>
      <Button
        style={styles.deleteBtn}
        title="X"
        onPress={() => {
          props.deleteTodos(props.index);
        }}
      />
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10
  },
  taskContent: {
    flex: 1,
    alignSelf: "stretch",
    textAlign: "left",
    marginVertical: 10,
    marginHorizontal: 10
    // backgroundColor: "green"
  },
  toggle: {
    // backgroundColor: "blue"
  },
  deleteBtn: {
    marginVertical: 10,
    marginHorizontal: 10
    // backgroundColor: "red"
  }
});
