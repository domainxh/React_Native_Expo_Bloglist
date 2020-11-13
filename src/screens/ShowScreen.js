import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({navigation}) => {
    const { state } = useContext(Context)
    const id = navigation.getParam('id')
    const blogPost = state.find((blogPost) => blogPost.id === id ) 

    return (
        <View>
            <Text style={styles.title}>{blogPost.title}</Text>
            <Text style={styles.content}>{blogPost.content}</Text>
        </View>
    );
}

export default ShowScreen;

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
                <EvilIcons name="pencil" size={35} />
            </TouchableOpacity>
        )
    };
}

const styles = StyleSheet.create({
    title: {
        fontSize: 15,
    },
    content: {

    }
})

{/* <TouchableOpacity onPress={ () => navigation.navigate("Show", {id: item.id})}> */}