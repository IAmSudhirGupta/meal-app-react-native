import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealsScreen";
import MeanDetailScreen from "../screens/MealDetailScreen";
import FavouritesScreen from "../screens/FavouritesScreen"
import { createAppContainer } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../data/Constants";
import MealDetailScreen from "../screens/MealDetailScreen";
import FiltersScreen from "../screens/FiltersScreen";

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

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
});

const TabNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
          tabBarIcon: tabInfo => {
            return (
              <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
            );
          },
          tabBarColor: Colors.primaryColor
        }
      },
      Favorites: {
        screen: FavNavigator,
        navigationOptions: {
          tabBarIcon: tabInfo => {
            return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
          },
          tabBarColor: Colors.accentColor
        }
      }
},{
    tabBarOptions: {
        activeTintColor: Colors.infoColor
    }
});

const MainNavigator = createDrawerNavigator(
    {
      MealsFavs: {
        screen: TabNavigator,
        navigationOptions: {
          drawerLabel: 'Meals'
        }
      },
    //   MealsFavs: TabNavigator,
      Filters: FiltersNavigator
    },
    {
      contentOptions: {
        activeTintColor: Colors.warningColor,
        labelStyle: {
        //   fontFamily: 'open-sans-bold'
        }
      }
    }
  );

export default createAppContainer(MainNavigator);