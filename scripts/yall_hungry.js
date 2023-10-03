import { Location } from "./location.js";
import { drinksListFunction } from "./drinksList.js";
import { foodListFunction } from "./foodsList.js";
import { Flavors } from "./Flavors.js"
import { toyListFunction } from "./toysList.js";



export let forMain = () => {
return `<h1>Y'all Hungry?</h1>

<article class="choices">

    <section class="choices__locations options">
    
            ${Location()}
    </section>

<section class="choices__foods options">
                    
            ${foodListFunction()}
            </section>

    
                    <section class="choices__drinks options">
                
                                ${drinksListFunction()}
                    </section>

                                <section class="choices__desserts options">
                        ${Flavors()}
                                </section>

                                        <section class="choices__toys options">
                                            
                                                        <!-- insert toys function here -->
                                                        ${toyListFunction()}
                                        </section>
    </article>


    <article class="customOrders">

                                  <h3>Orders</h3>
                     <p id="selectedFood"> Selected Food: None </p>
                     <p id="selectedDrink"> Selected Drink: None </p>
                     <p id="selectedFlavor"> Selected Ice Cream Flavor:
                     <p id="selectedToy"> Selected Toy: None </p>
    </article>


    <article>
                    <button id="orderButton"> Place Order </button>
    </article>


`

};
document.addEventListener('change', e => {
    if (e.target.id === 'food') {
        const selectedFood = document.querySelector('#food');
        const selectedFoodName = selectedFood.options[selectedFood.selectedIndex].text;
        document.querySelector('#selectedFood').innerText = `Selected Food: ${selectedFoodName}`;
    }
});

document.addEventListener('change', e => {
    if (e.target.id === 'drinks') {
        const selectedDrink = document.querySelector('#drinks');
        const selectedDrinkName = selectedDrink.options[selectedDrink.selectedIndex].text;
        document.querySelector('#selectedDrink').innerText = `Selected Drink: ${selectedDrinkName}`;
    }
});
document.addEventListener('change', e => {    
if (e.target.id === 'toy') {
        const selectedToy = document.querySelector('#toy');
        const selectedToyName = selectedToy.options[selectedToy.selectedIndex].text;
        document.querySelector('#selectedToy').innerText = `Selected Toy: ${selectedToyName}`;
    }
});
document.addEventListener('change', e => {
    if (e.target.id === 'resource') {
        const selectedDessert = document.querySelector('#resource');
        const selectedDessertName = selectedDessert.options[selectedDessert.selectedIndex].text;
        document.querySelector('#selectedFlavor').innerText = `Selected Dessert: ${selectedDessertName}`;
    }
});