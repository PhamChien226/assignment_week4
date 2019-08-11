import React from 'react';
import { ScrollView, StyleSheet,View, Text,TouchableOpacity,ImageBackground } from 'react-native';
import { TODOS } from '../utils/data';

const TodoDone = props =>{

  const{todo,index} = props;
  let todoText;
  if (todo.status === 'Done') {
    todoText =
      <View style={styles.todoItem}>
        <Text style={styles.todoText}>
          {index + 1}: {todo.body}
        </Text>
      </View>
  }

   return(
    <TouchableOpacity
       key={todo.body}
       >
      {todoText}
    </TouchableOpacity>
  )
}

export default class CompleteTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList:TODOS
    }
  }
  
  render() {
    const{todoList} =  this.state
    return (
      <ImageBackground style={styles.container} source={require('../assets/images/background2.jpg')}>
        <View style={styles.container}>
          {todoList.map((todo, index) => {
            return <TodoDone
              key={todo.body}
              todo={todo}
              index={index}
            />
          })}
        </View>
      </ImageBackground>
    );
  }
}

CompleteTodo.navigationOptions = {
  title: 'Complete',
  headerTintColor: '##f4511e',
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    alignItems:'center',
    
  },
  todoItem: {
    margin: 5,
    padding: 10,
    width: 300,
    backgroundColor:'green',
    minHeight: 20,
    borderRadius: 5,
  },
  todoText:{
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'
  },

});
