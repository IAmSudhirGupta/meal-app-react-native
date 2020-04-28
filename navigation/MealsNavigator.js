import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealsScreen";
import MeanDetailScreen from "../screens/MealDetailScreen";
import FavouritesScreen from "../screens/FavouritesScreen"
import { createAppContainer } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../data/Constants";
import MealDetailScreen from "../screens/MealDetailScreen";

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealScreen,
    MealDetail: {
        screen: MeanDetailScreen
    }
});
const FavNavigator = createStackNavigator({
    Favourites: FavouritesScreen,
    MealDetail: MealDetailScreen
});
const TabNavigator = createBottomTabNavigator({
    Meals: { 
        screen: MealsNavigator,
        navigationOptions : {
            tabBarLabel: "Meals!",
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-restaurant" size = {25} color={tabInfo.tintColor}/>
            } 
        }
    },
    Favourites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarLabel: "Favourites!",
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-star" size = {25} color={tabInfo.tintColor}/>
            } 
        }
    }
},{
    tabBarOptions: {
        activeTintColor: Colors.infoColor
    }
});

export default createAppContainer(TabNavigator);