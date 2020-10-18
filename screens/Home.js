import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Recipes from "../components/Recipes";
import AddRecipe from "./AddRecipe";
import { useNavigation } from "@react-navigation/native";

function Home() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Recipes />
            <TouchableOpacity style={styles.btn__container} onPress={() => navigation.navigate("AddRecipe")}>
                <Text style={styles.btn}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btn__container: {
        position: "relative",
        backgroundColor: "hsla(250, 50%, 50%, 0.5)",
        padding: 20,
        alignItems: "center"
    },
    btn: {
        fontSize: 25,
        color: "white"
    }
});

export default Home;
