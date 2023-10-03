import { getFlavors, setFlavor } from "./database.js"

const flavors = getFlavors()

export const Flavors = () => {
    let html = ""
    html += `<select name="flavors" id="resource">`
    html += `<option value="0">Ice Cream Flavors</option>`
    const arrayOfOptions = flavors.map( (flavor) => {
            return `<option value="${flavor.id}">${flavor.type}</option>`
        }
    )
    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}





