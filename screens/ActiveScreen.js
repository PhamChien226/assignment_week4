import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity,ImageBackground } from 'react-native';
import { TODOS } from '../utils/data';

const TodoActive = props => {

  const { todo, index } = props;
  let todoText;
  if (todo.status === 'Active') {
    todoText =
      <View style={styles.todoItem}>
        <Text style={styles.todoText}>
          {index + 1}: {todo.body}
        </Text>
      </View>
  }

  return (
    <TouchableOpacity
      key={todo.body}
    >
      {todoText}
    </TouchableOpacity>
  )
}

export default class ActiveScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList: TODOS
    }
  }

  render() {
    const { todoList } = this.state
    return (
      <ImageBackground style={styles.container} source={require('../assets/images/background2.jpg')}>
        <View style={styles.container}>
          {todoList.map((todo, index) => {
            return <TodoActive
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

ActiveScreen.navigationOptions = {
  title: 'Active',
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    alignItems: 'center'
  },
  todoItem: {
    margin: 5,
    padding: 10,
    width: 300,
    backgroundColor: 'gray',
    minHeight: 20,
    borderRadius: 5,
  },
  todoText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'
  },

});



// import React from 'react';
// import { ScrollView, StyleSheet, View, Text } from 'react-native';
// import { TODOS } from '../utils/data';
// import { TouchableOpacity } from 'react-native-gesture-handler';


// const TodoActive = props => {
//   // const isDone = props.todo.status === 'Active' ? true : false;
//   const { todo, index } = props;
  
//   let todoText;
  
//   if(todo.status === 'Done'){
//     todoText = 
//     <Text style={styles.todoText}>
//       {index + 1}: {todo.body}
//     </Text>
//   }

//   return (

//     <TouchableOpacity
//       key={todo.body}
//       style={styles.todoItem}
//     >
//       {/* {isDone ? (
//         <Text style={styles.todoText}>
//           {index + 1}: {todo.body}
//         </Text>
//       ) : (
//           <Text></Text>
//         )} */}
//       {todoText}
//     </TouchableOpacity>
//   )

// }

// export default class ActiveScreen extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       todoList: TODOS

//     }
//   }
//   // newTodoList = todoList.fitter(todo => todo.status === 'Active')
  
  
  
//   render() {
//     const { todoList } = this.state
//     return (
//       <View style={styles.container}>
//         {TodoList.map((todo, index) => {
//           return <TodoActive
//             key={todo.body}
//             todo={todo}
//             index={index}
//           />
//         })}
//       </View>
//     );

//   }
// }

// ActiveScreen.navigationOptions = {
//   title: 'Active',
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 15,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   todoItem: {
//     margin: 5,
//     padding: 10,
//     width: '95%',
//     minHeight: 20,
//     borderRadius: 5,
//     flexWrap: 'wrap',
//     backgroundColor: 'green'
//   },
//   todoText: {
//     fontSize: 20,
//     color: 'white',
//     fontWeight: 'bold'
//   },
// });



