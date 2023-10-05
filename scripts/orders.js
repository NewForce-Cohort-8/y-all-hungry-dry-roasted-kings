import { getCustomOrders, getFoods, getDrinks, getDesserts, getToys} from "./database.js";
///copied from kneel diamonds chapters 8-9 only difference is i removed the timestamp date that kneel diamonds had but is not requiredd for yall hungry
const buildOrderListItem = (order) => {
    const foods = getFoods();
    const foundFoods = foods.find((food) => {
        return food.id === order.foodId;
    });
    const foodPrice = foundFoods.price;

    const drinks = getDrinks();
    const foundDrinks = drinks.find((drink) => {
        return drink.id === order.drinkId;
    });
    const drinkPrice = foundDrinks.price;

    const desserts = getDesserts();
    const foundDesserts = desserts.find((dessert) => {
        return dessert.id === order.dessertId;
    });
    const dessertPrice = foundDesserts.price;

    const toys = getToys();
    const foundToys = toys.find((toy) => {
        return toy.id === order.toyId;
    });
    const toyPrice = foundToys.price;

    const totalCost = foodPrice + drinkPrice + dessertPrice + toyPrice;

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    });

    return `<li>
        Order #${order.id} cost ${costString} was placed 
    </li>`;

};

export const Orders = () => {
    const orders = getCustomOrders();

    let html = "<ul>";

    const listItems = orders.map(buildOrderListItem);

    html += listItems.join("");
    html += "</ul>";

    return html;
};
