import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { actionTypes } from '../reducers/RecipesReducer';

function AddRecipe() {
        const [title, setTitle] = useState("");
        const [time, setTime] = useState("");
        const [imageUrl, setImageUrl] = useState("");
        const [subIngredient, setSubIngredient] = useState("");
        const [subStep, setSubStep] = useState("");
        const [ingredients, setIngredients] = useState([]);
        const [steps, setSteps] = useState([]);
        const navigation = useNavigation();
        const dispatch = useDispatch();

        return (
            <View style={styles.container}>
                <ScrollView style={styles.contaier__form}>
                    <TextInput placeholder="Recipe Title" style={styles.input} value={title} onChangeText={text=>setTitle(text)}/>
                    <TextInput placeholder="Recipe Time Taken (minutes)
                    " style={styles.input} value={time} onChangeText={text=>setTime(text)}/>
                    <TextInput style={styles.input} placeholder="Image Url" value={imageUrl} onChangeText={text=>setImageUrl(text)} />

                    <View style={styles.ingredients}>
                        {
                            ingredients.length > 0 ? (
                                <View style={styles.subIngredients}>
                                    {ingredients.map(ingredient => (
                                        <Text style={styles.subIngredient}>{ingredient}</Text>
                                    ))}
                                </View>
                            ) : (
                                    <Text>No ingredients added yet</Text>
                                )

                        }
                        <View style={styles.subIngredientsInput}>
                            <TextInput value={subIngredient} placeholder="Add Ingredient" style={styles.input} onChangeText={(text) => { setSubIngredient(text) }} />
                            <TouchableOpacity style={styles.btn} onPress={() => {
                                if (subIngredient !== "") {
                                    setIngredients([...ingredients, subIngredient])
                                    setSubIngredient("");
                                }
                            }}>
                                <Text style={styles.btn__text}>Add</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.steps}>
                        {
                            steps.length > 0 ? (
                                <View style={styles.subSteps}>
                                    {steps.map(step => (
                                        <Text style={styles.subStep}>{step}</Text>
                                    ))}
                                </View>
                            ) : (
                                    <Text>No steps added yet</Text>
                                )

                        }
                        <View style={styles.subStepsInput}>
                            <TextInput value={subStep} placeholder="Add Step" style={styles.input} onChangeText={(text) => { setSubStep(text) }} />
                            <TouchableOpacity style={styles.btn} onPress={() => {
                                if (subStep !== "") {
                                    setSteps([...steps, subStep])
                                    setSubStep("");
                                }
                            }}>
                                <Text style={styles.btn__text}>Add</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity style={styles.btn__addContainer} onPress={
                    () => {
                        dispatch({
                            type: actionTypes.ADD_RECIPE,
                            payload: {
                                title: title,
                                time: time,
                                ingredients: ingredients,
                                steps: steps,
                                imageUrl: imageUrl!==""? imageUrl : "https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg",
                            }
                        });
                        navigation.navigate("Home");
                        alert("Recipe successfully added")
                    }
                }>
                    <Text style={styles.btn__addText}>Add Recipe</Text>
                </TouchableOpacity>
            </View>

        )
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contaier__form: {
        padding: 20,
    },
    input: {
        backgroundColor: "white",
        padding: 10,
        marginVertical: 10,
    },
    btn: {
        backgroundColor: "hsla(250, 50%, 50%, 0.5)",
        padding: 15,
        flexDirection: "row",
        justifyContent: "center",
    },
    btn__text: {
        fontWeight: "bold",
    },
    ingredients: {
        marginTop: 20,
    },
    subIngredients: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    subIngredient: {
        color: "black",
        margin: 5,
        backgroundColor: "hsla(250, 50%, 60%, 0.5)",
        padding: 15,
        borderRadius: 15,
        color: "white"
    },
    steps: {
        marginTop: 20,
    },
    subStep: {
        marginTop: 10,
        fontSize: 20,
        backgroundColor: "hsla(250, 50%, 80%, 0.5)",
        borderRadius: 10,
        padding: 15,
        color: "black"
    },
    btn__addContainer: {
        position: "relative",
        backgroundColor: "hsla(250, 50%, 50%, 0.5)",
        padding: 20,
        alignItems: "center"
    },
    btn__addText: {
        color: "white",
        fontSize: 25,
    }
});

export default AddRecipe;