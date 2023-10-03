import { Flavors } from "./Flavors.js"
import { Food } from "./Food.js"
import { Drinks } from "./Drinks.js"
import { HappyToys } from "./HappyToys.js"

export const YallHungry = () => {
    return ` 
    <h1>Ya'll Hungry</h1>

    <article class="choices">
        <section class="choices__food options">
            <h2>Food</h2>
            ${Food()}
        </section>
        <section class="choices__drinks options">
            <h2>Drinks</h2>
            ${Drinks()}
        </section>
        <section class="choices__dessert options">
            <h2>Dessert</h2>
            ${Flavors()}
        </section>
        <section class="choices__toys options">
            <h2>Happy Toys</h2>
            ${HappyToys()}
        </section>
    </article>
        `
}