import { getToys } from "./database.js"
import { setToy } from "./database.js";
import { getCurrentOrder } from "./database.js";
import {getToysLocationStock } from "./database.js";
import { database } from "./database.js";
import { setLocation } from "./database.js";



let toys = getToys();
//new event listener for customOrders
document.addEventListener("change", e => {
    if (e.target.name === "toy") {
        setToy(parseInt(e.target.value))
    }
})


export let toyListFunction = () => {
    let selectedLocationId = getCurrentOrder().locationId;
    let toys = getToys();
    toys = toys.filter((toy) => {
        let ItemInStock = database.toysLocationStock.some((item) => item.toyId === toy.id && item.locationId === selectedLocationId && item.quantity > 0);
        return ItemInStock;
    });
    
    let html =""
    html += '<select name="toy" id="toy">'
    html += `<option value="0">Toys!</option>`
    html += `<option value="5">None</option>`

    let toy = toys.map((toy) => {

        let stockItem = database.toysLocationStock.find(
            (item) => item.toyId === toy.id && item.locationId === selectedLocationId)
    
    return `<option value="${toy.id}"> ${toy.type} - ${stockItem.quantity} Left</option>`
    });
    
    html += toy.join("")
    html += "</select>"
    return html
}