import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recipes</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "hsla(250, 50%, 50%, 0.5)",
        paddingTop: 40,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    title:{
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "sans-serif"
    }
});
export default Header;
