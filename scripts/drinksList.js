import { getDrinks } from "./database.js";
import { setDrink } from "./database.js";
import { getCurrentOrder } from "./database.js";
import {getDrinksLocationStock } from "./database.js";
import { database } from "./database.js";
import { setLocation } from "./database.js";

let drinks = getDrinks();
//new event listener for customOrders
document.addEventListener("change", e => {
    if (e.target.name === "drinks") {
        setDrink(parseInt(e.target.value))
    }
})

export let drinksListFunction = () => {
    const selectedLocationId = getCurrentOrder().locationId;
    let drinks = getDrinks();
    drinks = drinks.filter((drink) => {
        let ItemInStock = database.drinksLocationStock.some((item) => item.drinkId === drink.id && item.locationId === selectedLocationId && item.quantity > 0);
        return ItemInStock
    });
    
    
    
    let html =""
    html += '<select name="drinks" id="drinks">'
    html += `<option value="0">Drinks</option>`
    html += `<option value="5">None</option>`

    let drink = drinks.map(drink => {
const stockItem = database.drinksLocationStock.find((item)=> item.drinkId === drink.id && item.locationId === selectedLocationId)
      return `<option value="${drink.id}"> ${drink.type} - ${stockItem.quantity}Left</option>`
    })
    
    html += drink.join("")
    html += "</select>"
    return html
}