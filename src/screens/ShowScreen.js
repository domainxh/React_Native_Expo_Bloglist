import { View, Text, StyleSheet} from 'react-native'
import React, { useContext } from 'react';
import { Context } from '../context/BlogContext';

const ShowScreen = ({navigation}) => {
    const { state } = useContext(Context)
    const id = navigation.getParam('id')
    const blogPost = state.find((blogPost) => blogPost.id === id ) 

    return (
        <View>
            <Text>{blogPost.title}</Text>
        </View>
    );
}

export default ShowScreen;

const styles = StyleSheet.create({
    
})