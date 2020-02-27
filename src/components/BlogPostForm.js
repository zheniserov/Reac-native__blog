import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';


const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Enter Title: </Text>
            <TextInput
                value={title}
                onChangeText={text => setTitle(text)}
                style={styles.input}
            />
            <Text style={styles.label}>Enter Content: </Text>
            <TextInput
                value={content}
                onChangeText={text => setContent(text)}
                style={styles.input}
            />
            <Button
                title="Add New Post"
                onPress={() => {
                    onSubmit(title, content)
                }}
            />
        </View>
    );
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        borderRadius: 4,
        marginBottom: 10
    },
    label: {
        fontSize: 20,
        marginBottom: 10
    },

});

export default BlogPostForm;