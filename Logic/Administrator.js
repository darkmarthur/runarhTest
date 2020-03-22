import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
  Switch,
  FlatList,
  SafeAreaView,
  ActivityIndicator
} from "react-native";
import TaskItem from "./TaskItem";
import AddTaskItem from "./AddTaskItem";
import { DATA } from "./DATA";

const Administrator = props => {
  const [todos, setTodos] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    todos ? setLoading(false) : getTodos();
    console.table(todos);
  });

  getTodos = async () => {
    setLoading(true);
    setTodos(DATA);
  };

  const addTodos = newTask => {
    newTask = { id: todos.length, ...newTask };
    setTodos([...todos, newTask]);
    // console.table(todos);
    // console.log(newTask);
  };

  const updateTodos = index => {
    // let updatedList = [...todos];
    // updatedList[index].status = !updatedList[index].status;
    // setTodos(updatedList);
    console.log(index);
    // console.table(todos);
  };

  const deleteTodos = index => {
    console.log(index);
    let updatedList = [...todos];

    updatedList.splice(index, 1);
    console.table(updatedList);

    // updatedList[index].status = !updatedList[index].status;
    // setTodos(updatedList);
    // console.table(todos);
  };

  const renderAdministrator = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>TODOS</Text>
        <AddTaskItem addTodos={addTodos} />
        <FlatList
          data={todos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) =>
            item.active ? (
              <TaskItem
                key={item.id}
                index={item.id}
                data={item}
                updateTodos={updateTodos}
                deleteTodos={deleteTodos}
              />
            ) : null
          }
        ></FlatList>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      {isLoading ? (
        <ActivityIndicator style={{ flex: 1 }} size="large" />
      ) : (
        renderAdministrator()
      )}
    </SafeAreaView>
  );
};

export default Administrator;

const styles = StyleSheet.create({
  container: {
    flex: 1
    // alignItems: "center",
    // justifyContent: "center"
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginVertical: 50
  },
  title: {
    fontWeight: "bold",
    fontSize: 32
  }
});
