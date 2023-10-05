import { getDesserts} from "./database.js"
import { setDessert } from "./database.js";
import { getCurrentOrder } from "./database.js";
import { getDessertsLocationStock } from "./database.js";
import { database } from "./database.js";
import { setLocation } from "./database.js";

let desserts = getDesserts();
//new event listener for customOrders
document.addEventListener("change", e => {
    if (e.target.name === "flavors") {
        setDessert(parseInt(e.target.value))
    }
})

export const dessertsListFunction = () => {
    let selectedLocationId = getCurrentOrder().locationId;
    let desserts = getDesserts();
    desserts = desserts.filter((dessert) => {
        let ItemInStock = database.dessertsLocationStock.some((item) => item.dessertId === dessert.id && item.locationId === selectedLocationId && item.quantity > 0);
        return ItemInStock;
    })
    
    let html = ""
    html += `<select name="flavors" id="resource">`
    html += `<option value="0">Desserts</option>`
    html += `<option value="5">None</option>`
    
    let dessert = desserts.map((dessert) => {
        const stockItem = database.dessertsLocationStock.find(
            (item) => item.dessertId === dessert.id && item.locationId === selectedLocationId
        );

    return `<option value="${dessert.id}"> ${dessert.type} - ${stockItem.quantity} </option>`;
    });
    
    html += dessert.join("")
    html += "</select>"
    return html
}





