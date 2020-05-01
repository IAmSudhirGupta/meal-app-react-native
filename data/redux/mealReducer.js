import { MEALS } from "../dummy-data";

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favouriteMeals: []
};

const mealReducer = (state = initialState, action) => {
    return state;
}

export default mealReducer;