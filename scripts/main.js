import { forMain } from "./yall_hungry.js";
let mainContainer = document.querySelector("#container")

let renderAllHTML = () => {
    mainContainer.innerHTML = forMain()
}
renderAllHTML()