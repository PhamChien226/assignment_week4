import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

const SingleTodoScreen = props => {
    const { id, status, body } = props.navigation.state.params.updatedTodo;
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>
                {id}. {status}
            </Text>
            <Text style={styles.bodyText}>{body}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => props.navigation.navigate('Complete')}
            >
                <Text style={styles.textButton}>
                    Go to Complete
                </Text>
            </TouchableOpacity>
        </View>
    );
};

SingleTodoScreen.navigationOptions = {
    title: 'SingleTodoScreen'
};

export default SingleTodoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerContainer: {
        flexDirection: 'row'
    },
    headerText: {
        fontSize: 20
    },
    bodyText: {
        fontSize: 30,
        color:'green'
    },
    button:{
        height:40,
        width:200,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'mediumseagreen',
        color:'white',
        borderRadius:10,
    },
    textButton:{
        fontSize:16,
        fontWeight:'bold',
        color:'white',
        margin:5
    }

});