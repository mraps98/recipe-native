import React from "react";
import Home from "../screens/Home";
import RecipeDetails from "../screens/RecipeDetails";
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddRecipe from "../screens/AddRecipe";


const Stack = createStackNavigator();

const headerStyle = {
    backgroundColor: "hsla(250, 50%, 50%, 0.5)",
}

const MainStackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{title: "Recipes", headerStyle: headerStyle}}/>
                <Stack.Screen name="RecipeDetails" component={RecipeDetails} options={{title: "Recipe Details", headerStyle: headerStyle}}/>
                <Stack.Screen name="AddRecipe" component={AddRecipe} options={{title: "Add Recipe", headerStyle: headerStyle}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator;