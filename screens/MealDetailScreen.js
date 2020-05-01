import React from "react";
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Title,
  List,
  ListItem,
} from "native-base";
import { Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Utils from "../data/Utils";
import { Rating } from "react-native-ratings";
import Colors from "../data/Constants";

const MealDetailScreen = (props) => {
  const ratingCompleted = (rating) => {
    console.log("Rating is: " + rating);
  };
  const meal = props.navigation.getParam("meal");
  console.log(meal);
  return (
    <Container>
      <Content>
        <Card>
          <CardItem style={{ marginLeft: 0 }}>
            <Left style={{ marginLeft: 0 }}>
              <Body>
                <Text style={{ marginLeft: 0 }}>{meal.title}</Text>
              </Body>
            </Left>
            <Right>
              <Rating
                type="star"
                startingValue={meal.ratings}
                ratingCount={5}
                imageSize={20}
                //   showRating
                onFinishRating={ratingCompleted}
                //   style={{ paddingVertical: 10 }}
              />
            </Right>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{ uri: meal.imageUrl }}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </CardItem>
          <CardItem>
            <Text>{meal.description}</Text>
          </CardItem>
          <CardItem>
            <Left>
              <Text>
                {meal.isVegan ? (
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
                {meal.isVegetarian ? (
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
              <Text>{meal.duration}</Text>
            </Right>
          </CardItem>
          <CardItem>
            <List>
              <ListItem itemDivider>
                <Text>Ingredients</Text>
              </ListItem>
            </List>
          </CardItem>
          <CardItem>
            <List>
              {meal.ingredients.map((indegrient) => {
                return (
                  <ListItem>
                    <Text>{indegrient}</Text>
                  </ListItem>
                );
              })}
            </List>
          </CardItem>
          <CardItem>
          <List>
              <ListItem itemDivider>
                <Text>Steps</Text>
              </ListItem>
            </List>
          </CardItem>
          <CardItem>
            <List>
              {meal.steps.map((indegrient, idx) => {
                return (
                  <ListItem key={idx}>
                    <Text>{indegrient}</Text>
                  </ListItem>
                );
              })}
            </List>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const meal = navigationData.navigation.getParam("meal");
  return {
    title: Utils.textTruncate(meal.title, 20, "..."),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Fav"
          iconName="ios-star"
          onPress={() => {
            console.log("Header Btn title");
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default MealDetailScreen;
