import React from "react";
import { View, Text } from "native-base";
import { StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { Ionicons } from "@expo/vector-icons";

const MealDetailScreen = props => {
    const meal = props.navigation.getParam("meal");
    return (
        <View style = {styles.screen}>
            <Text>{meal.title}</Text>
        </View>
    )
}

MealDetailScreen.navigationOptions = (navigationData) =>{
    const meal = navigationData.navigation.getParam("meal");
    return {
        title: meal.title,
        headerRight: () => (<HeaderButtons HeaderButtonComponent = {HeaderButton} >
            <Item title = "Fav" iconName = "ios-star" onPress = {()=>{
                console.log("Header Btn title");
            }} />
        </HeaderButtons>)
    };
}

const styles = StyleSheet.create({
    screen :{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default MealDetailScreen;