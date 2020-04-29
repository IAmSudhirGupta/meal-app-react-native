import React, { useState, useEffect, useCallback } from "react";
import { View, Text, List, ListItem, Left, Button, Body, Switch, Right, Icon } from "native-base";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const FiltersScreen = props => {
    const { navigation } = props;
    const [isGluttenFree, setIsGluttenFree] = useState(true);
    const [isVegeterian, setIsVegetarian] = useState(false);

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            isVegeterian: isVegeterian,
            isGluttenFree: isGluttenFree
        }
    }, [isVegeterian, isGluttenFree]);

    useEffect(()=>{
        navigation.setParams({savedFilters: saveFilters})
    }, [saveFilters]);

    return (
        <View>
            {/* <Text> <Title>Available Filters</Title></Text> */}
            <List>
                <ListItem>
                    <Left>
                        {/* <Button style={{ backgroundColor: "#FF9501" }}>
                            <Icon active name="airplane" />
                        </Button> */}
                        <Text>Glutten Free</Text>
                    </Left>
                    <Body>
                        {/* <Text>Airplane Mode</Text> */}
                    </Body>
                    <Right>
                        <Switch value={isGluttenFree} onValueChange = {val =>setIsGluttenFree(val)} />
                    </Right>
                </ListItem>
                <ListItem>
                    <Left>
                        {/* <Button style={{ backgroundColor: "#FF9501" }}>
                            <Icon active name="airplane" />
                        </Button> */}
                        <Text>Only Vegetarian</Text>
                    </Left>
                    <Body>
                        {/* <Text>Airplane Mode</Text> */}
                    </Body>
                    <Right>
                        <Switch value={isVegeterian} onValueChange = {val =>setIsVegetarian(val)} />
                    </Right>
                </ListItem>
            </List>
        </View>
    )
}

FiltersScreen.navigationOptions = (navigationData) => {
    return {
        title: 'Meal Filters',
        headerLeft: () =>  (<HeaderButtons HeaderButtonComponent = {HeaderButton} >
        <Item title = "Menu" iconName = "ios-menu" onPress = {()=>{
            navigationData.navigation.toggleDrawer();
        }} />
    </HeaderButtons>),
    headerRight: () =>  (<HeaderButtons HeaderButtonComponent = {HeaderButton} >
        <Item title = "Menu" iconName = "ios-save" onPress = {()=>{
            console.log("Header filter save is clicked...", navigationData.navigation.getParam("savedFilters")());
        }} />,
        </HeaderButtons>)
    }
  };

export default FiltersScreen;