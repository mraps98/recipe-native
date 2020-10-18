import React from 'react';
import {View, Text, StyleSheet} from "react-native"; 
import Header from "../components/Header";

function Loading() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recipes</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "hsla(250, 50%, 70%, 0.5)",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        color: "white",
        fontSize: 40,
        fontFamily: "sans-serif",
        fontWeight: "bold"
    }
});

export default Loading;
