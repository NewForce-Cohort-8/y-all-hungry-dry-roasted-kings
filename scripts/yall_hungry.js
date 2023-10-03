import { drinksListFunction } from "./drinksList.js";
import { foodListFunction} from "./foodsList.js";


export let forMain = () => {
return `<h1>Y'all Hungry?</h1>

<article class="choices">

    <section class="choices__locations options">
    
            <!-- insert locations function  here -->
    </section>

            <section class="choices__foods options">
                    
                        ${foodListFunction()}
            </section>

    
                    <section class="choices__drinks options">
                
                                ${drinksListFunction()}
                    </section>

                                <section class="choices__desserts options">
                                    
                                                <!-- insert desserts function here -->
                                </section>
    </article>


    <article class="customOrders">

                                  <h3> Orders</h3>
                     <p id="selectedFood"> Selected Food: None </p>
                     <p id="selectedDrink"> Selected Drink: None </p>
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