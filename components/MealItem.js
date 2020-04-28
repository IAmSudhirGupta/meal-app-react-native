import React from "react";
import { ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { TouchableOpacity } from "react-native-gesture-handler";

const MealItem = props => {
    return(
        <TouchableOpacity onPress = { props.onSelectMeal}>
            <ListItem avatar>
                <Left>
                    <Thumbnail square source={{ uri: props.meal.imageUrl }} />
                </Left>
                <Body>
                    <Text>{props.meal.title}</Text>
                    <Text note>{props.meal.ingredients}</Text>
                </Body>
                <Right>
                    <Text note>{props.meal.duration}</Text>
                </Right>
            </ListItem>
            </TouchableOpacity>
    )
}

export default MealItem;