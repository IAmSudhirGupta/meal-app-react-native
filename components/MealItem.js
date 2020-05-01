import React from "react";
import { Card, CardItem, Text, Icon, Left, Body, Right } from "native-base";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Rating } from "react-native-ratings";
import Colors from "../data/Constants";

const MealItem = (props) => {
  const ratingCompleted = (rating) => {
    console.log("Rating is: " + rating);
  };
  return (
    <Card>
      <CardItem style={{ marginLeft: 0 }}>
        <Left style={{ marginLeft: 0 }}>
          <Body>
            <Text style={{ marginLeft: 0 }}>{props.meal.title}</Text>
          </Body>
        </Left>
        <Right>
          <Rating
            type="star"
            startingValue={props.meal.ratings}
            ratingCount={5}
            imageSize={20}
            //   showRating
            onFinishRating={ratingCompleted}
            //   style={{ paddingVertical: 10 }}
          />
        </Right>
      </CardItem>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <CardItem cardBody>
          <Image
            source={{ uri: props.meal.imageUrl }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
      </TouchableOpacity>
      <CardItem>
        <Left>
          <Text>
            {props.meal.isVegan ? (
              <Icon
                active
                name="chatbubbles"
                style={{ color: Colors.infoColor }}
              />
            ) : (
              <Icon
                active
                name="thumbs-up"
                style={{ color: Colors.infoColor }}
              />
            )}
          </Text>
        </Left>
        <Body>
          <Text>
            {props.meal.isVegetarian ? (
              <Icon
                active
                name="chatbubbles"
                style={{ color: Colors.infoColor }}
              />
            ) : (
              <Icon
                active
                name="thumbs-up"
                style={{ color: Colors.infoColor }}
              />
            )}
          </Text>
        </Body>
        <Right>
          <Text>{props.meal.duration}</Text>
        </Right>
      </CardItem>
    </Card>
  );
};

export default MealItem;
