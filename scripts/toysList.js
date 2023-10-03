import { getToys } from "./database.js"
let toys = getToys();



export let toyListFunction = () => {
    let html =""
    html += '<select name="toy" id="toy">'
    html += `<option value="0">Toys!</option>`
    // html += `<option value="5">None</option>`

    let toy = toys.map(x => {
return `<option value="${x.id}"> ${x.type} </option>`
    })
    
    html += toy.join("")
    html += "</select>"
    return html
}