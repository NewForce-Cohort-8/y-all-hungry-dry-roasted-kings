import {getLocations } from "./database.js";
let locations = getLocations();

export let locationsListFunction = () => {
    let html =""
    html += '<select name="location" id="location">'
    html += `<option value="0">Locations</option>`

    let location = locations.map(x => {
return `<option value="${x.id}"> ${x.name} </option>`
    })
    
    html += location.join("")
    html += "</select>"
    return html
}