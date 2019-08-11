import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Alert, TextInput, ScrollView, ImageBackground, KeyboardAvoidingView } from 'react-native'
import { TODOS } from '../utils/data';

const TodoItem = props => {
  const statusStyle = {
    backgroundColor: props.todo.status === 'Done' ? 'green' : 'gray'
  };
  const onLongPress = todo => {
    const prompt = `"${todo.body}"`;
    Alert.alert(
      'Delete your todo?',
      prompt,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => props.onDeleteTodo(todo.id) }
      ],
      { cancelable: true }
    );
  };

  const { todo, onToggleTodo,idx} = props;
  return (
    <TouchableOpacity
      key={todo.body}
      style={[styles.todoItem, statusStyle]}
      onPress={() => onToggleTodo(todo.id)}
      onLongPress={() => onLongPress(todo)}
    >
      <Text style={styles.todoText}>
        {idx + 1}: {todo.body}
      </Text>
    </TouchableOpacity>
  );
};



export default function ToDoScreen(props) {

  const [todoList, setTodoList] = useState(TODOS);
  const [todoBody, setTodoBody] = useState('');

  const onToggleTodo = (id) => {
    const todo = todoList.find(todo => todo.id === id);
    todo.status = todo.status === 'Done' ? 'Active' : 'Done';

    const foundIndex = todoList.findIndex(todo => todo.id === id);
    todoList[foundIndex] = todo;

    const newTodoList = [...todoList];
    setTodoList(newTodoList);

    setTimeout(() => {
      props.navigation.navigate("SingleTodo", {
        updatedTodo: todo
      });
    }, 2000);
  };

  const onDeleteTodo = id => {
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  };

  const onSubmitTodo = () => {
    const newTodo = {
      body: todoBody,
      status: 'Active',
      id: todoList.length + 1
    };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
    setTodoBody('');
  };


  return (
    <ImageBackground style={styles.container} source={require('../assets/images/background2.jpg')}>
      <KeyboardAvoidingView
        enabled
        behavior="padding"
        style={styles.container}
      >
        <ScrollView >
          <View style={styles.container}>
            {todoList.map((todo, idx) => {
              return <TodoItem
                key={todo.body}
                todo={todo}
                idx={idx}
                onToggleTodo={onToggleTodo}
                onDeleteTodo={onDeleteTodo}
              />;
            })}
            <View style={styles.inputContainer}>
              <TextInput
                value={todoBody}
                style={styles.todoInput}
                onChangeText={text => setTodoBody(text)}
                placeholder="Add New Todo Here!"
                placeholderTextColor="red"
                returnKeyType={'done'}
              />
              <TouchableOpacity style={styles.button}
                onPress={onSubmitTodo}
              >
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}
ToDoScreen.navigationOptions = {
  title: 'All Todos'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  todoItem: {
    margin: 5,
    padding: 10,
    width: '95%',
    minHeight: 20,
    color: 'white',
    borderRadius: 5,
    flexWrap: 'wrap'
  },
  todoText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  todoInput: {
    width: '95%',
    minHeight: 40,
    color: 'black',
    fontSize:16,
    fontWeight:'bold',
    borderWidth: 1,
    marginTop: '10%',
    marginBottom: '5%',
    borderColor: 'grey',
    borderRadius: 20,
    paddingLeft:10,
  },
  inputContainer: {
    flex: 1,
    width: '90%',
    marginTop: 20,
    marginBottom: '10%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    height: 50,
    width: '50%',
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'mediumseagreen',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
})
