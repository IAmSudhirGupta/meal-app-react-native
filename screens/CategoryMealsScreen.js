import React from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealScreen = props => {
    const categoryId = props.navigation.getParam("categoryId");
    // const categoryDetail = CATEGORIES.find(cat => cat.id == categoryId);
    const meals = MEALS.filter(meal => meal.categoryIds == categoryId);
    return <MealList meals = {meals} { ...props} />
}
CategoryMealScreen.navigationOptions = (navigationData) => {
    const categoryId = navigationData.navigation.getParam("categoryId");
    const categoryDetail = CATEGORIES.find(cat => cat.id == categoryId);
    return {
        title: categoryDetail.title
    };
}


export default CategoryMealScreen;