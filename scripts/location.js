import { getLocations, setLocation } from "./database.js";

const locations = getLocations()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "location") {
            const locationId = parseInt(event.target.value)
            setLocation(locationId)
        }
    }
)

export const Location = () => {
    let html = "<select>"
    html += "<option value='0'>Select a location</option>"

    const listItems = locations.map((location) => {
        return `<option value="${location.id}">${location.name}</option>`
    })

    html += listItems.join("")
    html += "</select>"

    return html
}