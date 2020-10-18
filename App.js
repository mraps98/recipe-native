import { DefaultTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import MainStackNavigator from "./navigation/MainStackNavigator";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { RecipesReducer } from "./reducers/RecipesReducer";

export default function App() {
  const store = createStore(RecipesReducer);


  return (
    <Provider store={store}>
      <MainStackNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
