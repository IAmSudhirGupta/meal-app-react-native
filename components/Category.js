import React from "react";
import {
  List,
  ListItem,
  Text,
  Left,
  Right,
  Thumbnail,
  Body,
  Badge,
} from "native-base";
import { TouchableOpacity } from "react-native";
const Category = (props) => {
  const category = props.category;
  console.log(category);
  return (
    <TouchableOpacity key={category.id}>
      <List>
        <ListItem thumbnail key={category.id} onPress={props.onCategorySelect}>
          <Left>
            <Thumbnail square source={{ uri: category.imageUrl }} />
          </Left>
          <Body>
            <Text>{category.title}</Text>
            <Text note>{category.description}</Text>
          </Body>
          <Right>
            <Badge info>
              <Text>{category.totalCount}</Text>
            </Badge>
          </Right>
        </ListItem>
      </List>
    </TouchableOpacity>
  );
};

export default Category;
