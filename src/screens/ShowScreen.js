import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const blogPost = state.find(blogPost => blogPost.id === navigation.getParam('id'));
    return (
        <View style={styles.container}>
            <Text style={styles.title} >{blogPost.title}</Text>
            <Text style={styles.content} >{blogPost.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({navigation}) => {
    return{
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})} >
                <MaterialCommunityIcons name="pencil" size={30} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    content: {
        fontSize: 16
    }
});

export default ShowScreen;
