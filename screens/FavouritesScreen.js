import React from "react";
import { StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const FavouritesScreen = props => {
    return <MealList meals = {MEALS} { ...props} />
}
FavouritesScreen.navigationOptions = {
    title: "Favourites!"
}

export default FavouritesScreen;