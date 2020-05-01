import React from "react";
import {
  Container,
  Content,
  List,
} from "native-base";
import { StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Category from "../components/Category";
const CategoriesScreen = (props) => {
  return (
    <Container>
      <Content>
        <List>
          {CATEGORIES.map((category) => {
            return <Category key= {category.id} category = {category} onCategorySelect = {() => {
                // console.log("Go to Meals button Pressed...", props);
                props.navigation.navigate({
                  routeName: "CategoryMeals",
                  params: {
                    categoryId: category.id,
                  },
                });
              }}/>
          })}
        </List>
      </Content>
    </Container>
  );
};
CategoriesScreen.navigationOptions = (navigationData) => {
  return {
    title: "Meal Categories",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Fav"
          iconName="ios-menu"
          onPress={() => {
            console.log("Nav Drawer Clicked..");
            navigationData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
