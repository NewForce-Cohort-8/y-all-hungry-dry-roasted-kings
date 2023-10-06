import { getFoods } from "./database.js";//added all these imports just in case 
import { setFood } from "./database.js";
import { getCurrentOrder } from "./database.js";
import {getFoodsLocationStock } from "./database.js";
import { database } from "./database.js";
import { setLocation } from "./database.js";

//new for setfood in Current Order object
document.addEventListener("change", e => {
    if (e.target.name === "food") {
        setFood(parseInt(e.target.value))
    }
})



export let foodListFunction = () => {
    //start of new additions to function to update dropbox
    
    const selectedLocationId = getCurrentOrder().locationId;// this gets locationId inside CurrentOrder in database 
    let foods = getFoods();// gets all the data of foods from the database.
        //next involk foods  and set it equal to foods.filter() ".filter" is similar to .map(). makes a copy of what u want.in this case foods data is now copied and avaialable for use within function  
    foods = foods.filter((food) => {// "food" is what the the copied foods data is called 
        //.filter is similar to .map cuz it also has a return where we can use to complete a task. aka in this case we're gonna check if the current food item is in stock at the selected location with another method called .some()
        
      let ItemInStock = database.foodsLocationStock.some( //  ".some()" is cool cuz its also like .filter and .map : it copies an array  and the return can be a conditional. " foodsLocationStock" is an array in database and we want to  add conditional to to find in stock items
        (item) => item.foodId === food.id && item.locationId === selectedLocationId && item.quantity > 0
      );// 'item' is now a copied "foodsLocationStock" array. the return is the conditional successfully checking  what food is in stock by comparing "foodId" to "Id of food" AND "locationId to selcetedID 
      // Include the food item only if it's in stock at the selected location by returning .
      return ItemInStock; //this return is inside .filter()
    });
  //still inside foodListFunction, this code below was not touched 
    let html = "";
    html += '<select name="food" id="food">';
    html += `<option value="0">Food Items</option>`;
    html += `<option value="5">None</option>`;
  
    let food = foods.map((food) => {//UPDATED RETURN FOR QUANTITY COUNT
       // new 
       const stockItem = database.foodsLocationStock.find(// i didnt need to use .find(), similar to .some() but .find() works with finding the first element in the copied array , so no need for "&& item.quantity > 0" in conditional
        (item) => item.foodId === food.id && item.locationId === selectedLocationId
    );

    // new
    return `<option value="${food.id}"> ${food.type} - ${stockItem.quantity} Left </option>`;
    });
  
    html += food.join("");
    html += "</select>";
    return html;
  };
