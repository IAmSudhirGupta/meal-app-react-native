import Category from "../models/Category";
import Meal from "../models/Meal";

export const CATEGORIES = [
    new Category("c1", "Italian", "#ADTG76J"),
    new Category("c2", "Indian", "#ADTG76J"),
    new Category("c3", "Summer", "#ADTG76J"),
    new Category("c4", "Chinese", "#ADTG76J"),
    new Category("c5", "German", "#UITG76J"),
    new Category("c6", "French", "#ADTG76J"),
    new Category("c7", "Breakfast", "#DSTG76J")
];

export const MEALS = [
    new Meal("m1", "c1", "Italian Pizza", "Yes", "NA", "https://i.picsum.photos/id/161/150/150.jpg", "45 minutes", "NA", "", "Yes", "Yes", "No", "No"),
    new Meal("m2", "c3", "Italian Pizza", "Yes", "NA", "https://i.picsum.photos/id/162/150/150.jpg", "45 minutes", "NA", "", "Yes", "Yes", "No", "No"),
    new Meal("m3", "c5", "Italian Pizza", "Yes", "NA", "https://i.picsum.photos/id/163/150/150.jpg", "45 minutes", "NA", "", "Yes", "Yes", "No", "No"),
    new Meal("m4", "c1", "Italian Pizza", "Yes", "NA", "https://i.picsum.photos/id/164/150/150.jpg", "45 minutes", "NA", "", "Yes", "Yes", "No", "No"),
    new Meal("m5", "c2", "Italian Pizza", "Yes", "NA", "https://i.picsum.photos/id/165/150/150.jpg", "45 minutes", "NA", "", "Yes", "Yes", "No", "No"),
    new Meal("m6", "c1", "Italian Pizza", "Yes", "NA", "https://i.picsum.photos/id/166/150/150.jpg", "45 minutes", "NA", "", "Yes", "Yes", "No", "No"),
    new Meal("m7", "c7", "Italian Pizza", "Yes", "NA", "https://i.picsum.photos/id/167/150/150.jpg", "45 minutes", "NA", "", "Yes", "Yes", "No", "No"),
    new Meal("m8", "c6", "Italian Pizza", "Yes", "NA", "https://i.picsum.photos/id/168/150/150.jpg", "45 minutes", "NA", "", "Yes", "Yes", "No", "No"),
    new Meal("m9", "c4", "Italian Pizza", "Yes", "NA", "https://i.picsum.photos/id/169/150/150.jpg", "45 minutes", "NA", "", "Yes", "Yes", "No", "No"),
    new Meal("m10", "c4", "Italian Pizza", "Yes", "NA", "https://i.picsum.photos/id/170/150/150.jpg", "45 minutes", "NA", "", "Yes", "Yes", "No", "No"),
    new Meal("m11", "c5", "Italian Pizza", "Yes", "NA", "https://i.picsum.photos/id/171/150/150.jpg", "45 minutes", "NA", "", "Yes", "Yes", "No", "No"),
    new Meal("m12", "c6", "Italian Pizza", "Yes", "NA", "https://i.picsum.photos/id/172/150/150.jpg", "45 minutes", "NA", "", "Yes", "Yes", "No", "No")
]