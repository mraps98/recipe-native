import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Recipe({ recipe }) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("RecipeDetails", {recipe: recipe})}>
            <Image style={styles.image} source={{ uri: recipe.imageUrl }} />
            <View style={styles.container_right}>
                <Text style={styles.title}>{recipe.title}</Text>
                <Text style={styles.time}>{recipe.time} minutes</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "hsla(250, 50%, 50%, 0.3)",
        marginVertical: 10,
        marginHorizontal: 5,
        borderRadius: 10,
        padding: 10,
        flexDirection: "row",
        padding: 12,
    },
    image: {
        width: 70,
        height: 70,
        marginRight: 10,
        borderRadius: 10,
    },
    title: {
        fontSize: 30,
    },
    time: {
        color: "#555"
    }
});

export default Recipe;