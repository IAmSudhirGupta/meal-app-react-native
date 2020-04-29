import React from "react";
import { StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const FavouritesScreen = props => {
    return <MealList meals = {MEALS} { ...props} />
}

FavouritesScreen.navigationOptions = (navigationData) => {
    return {
        title: 'Favourites',
        headerLeft: () =>  (<HeaderButtons HeaderButtonComponent = {HeaderButton} >
        <Item title = "Fav" iconName = "ios-menu" onPress = {()=>{
            console.log("Nav Drawer Clicked from Fav screen..");
            navigationData.navigation.toggleDrawer();
        }} />
    </HeaderButtons>)
    }
  };

export default FavouritesScreen;