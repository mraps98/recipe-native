import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Recipe from "./Recipe";
import { useSelector } from "react-redux";

function Recipes() {
        const recipes = useSelector(state=>state);
        return (
            <ScrollView style={styles.container}>
                <FlatList
                    keyExtractor={recipe => recipe.id}
                    data={recipes}
                    renderItem={({ item }) => (
                        <Recipe recipe={item} />
                    )}
                />
            </ScrollView>
        )
    }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10
    },
});

export default Recipes;
