import React from "react";
import { Container, Content, List} from 'native-base';
import MealItem from "../components/MealItem";

const MealList = (props) => {
    return (
        <Container>
            <Content>
                <List>
                    {
                        props.meals.map(meal => <MealItem key={meal.id} meal = {meal} onSelectMeal = {() =>{
                            props.navigation.navigate("MealDetail", {
                                meal: meal
                            });
                        }} />)
                    }
                </List>
            </Content>
        </Container>
    )
}

export default MealList;