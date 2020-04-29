import React from "react";
import { Container, Header, Content, List, ListItem, Text, Button, View } from 'native-base';
import { StyleSheet, TouchableOpacity } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
const CategoriesScreen = props => {
    return (
        // <View style = {styles.screen}>
        //     <Text>The Categories Screen !!</Text>
        //     <Button primary onPress = {()=>{
        //         // console.log("Go to Meals button Pressed...", props);
        //         props.navigation.navigate({routeName: "CategoryMeals"});
        //     }}><Text> Go To Meals </Text></Button>
        // </View>
        <Container>
        {/* <Header /> */}
        <Content>
          <List>
              {
                  CATEGORIES.map( (category) => {
                        return(
                            <TouchableOpacity key={category.id}>
                                <ListItem key={category.id} onPress = {()=>{
                                    // console.log("Go to Meals button Pressed...", props);
                                    props.navigation.navigate({routeName: "CategoryMeals", params: {
                                        categoryId: category.id
                                    }});
                                }}>
                                <Text>{category.title}</Text>
                                </ListItem>
                            </TouchableOpacity>
                        )
                  })
              }
          </List>
        </Content>
      </Container>
    )
}
CategoriesScreen.navigationOptions = (navigationData) => {
    return {
        title: 'Meal Categories',
        headerLeft: () =>  (<HeaderButtons HeaderButtonComponent = {HeaderButton} >
        <Item title = "Fav" iconName = "ios-menu" onPress = {()=>{
            console.log("Nav Drawer Clicked..");
            navigationData.navigation.toggleDrawer();
        }} />
    </HeaderButtons>)
    }
  };
const styles = StyleSheet.create({
    screen :{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default CategoriesScreen;