import { getFlavors, setFlavor } from "./database.js"

const flavors = getFlavors()

export const Flavors = () => {
    let html = "<h2>Ice Cream Flavors</h2>"
    html += `<select name="flavors" id="resource">
    <option value="0">Ice Cream Flavors</option>`
    const arrayOfOptions = flavors.map( (flavor) => {
            return `<option value="${flavor.id}">${flavor.type}</option>`
        }
    )
    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}





