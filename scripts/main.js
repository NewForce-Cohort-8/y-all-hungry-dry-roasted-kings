import { forMain } from "./yall_hungry.js";
let mainContainer = document.querySelector("#container")

let renderAllHTML = () => {
    mainContainer.innerHTML = forMain()
}
renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})