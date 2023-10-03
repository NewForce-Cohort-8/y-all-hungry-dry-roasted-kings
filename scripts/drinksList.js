import { getDrinks } from "./database.js";
let drinks = getDrinks();



export let drinksListFunction = () => {
    let html =""
    html += '<select name="drinks" id="drinks">'
    html += `<option value="0">Drinks</option>`
    html += `<option value="5">None</option>`

    let drink = drinks.map(x => {
return `<option value="${x.id}"> ${x.type} </option>`
    })
    
    html += drink.join("")
    html += "</select>"
    return html
}