import { getFood } from "./database.js";
let foods = getFood();



export let foodListFunction = () => {
    let html =""
    html += '<select name="food" id="food">'
    html += `<option value="0">Food Items</option>`
    html += `<option value="5">None</option>`

    let food = foods.map(x => {
return `<option value="${x.id}"> ${x.type} </option>`
    })
    
    html += food.join("")
    html += "</select>"
    return html
}