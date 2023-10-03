import { getFood, getDrinks, getFlavors, getLocations, getOrders } from "./database.js";

const foods = getFood();
const drinks = getDrinks();
const flavors = getFlavors();
const locations = getLocations();

const buildOrderListItem = (order) => {

    const foundFood = foods.find(
        (food) => food.id === order.foodId
    )

    const foundDrink = drinks.find(
        (drink) => drink.id === order.drinkId
    )

    const foundFlavors = flavors.find(
        (flavor) => flavor.id === order.flavorId
    )

    const foundLocations = locations.find(
        (location) => location.id === order.locationId
    )
    
return `<ul>
        <li> You're picking up your order at our ${foundLocations.address} location.</li>}
        <li>${foundFood.name}</li>
        <li>${foundDrink.name}</li>
        <li>${foundFlavors.name}</li>
        </ul>`
}

export const Order = () => {
    const orders = getOrders();

    let html = "<div>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</div>"

    return html
}