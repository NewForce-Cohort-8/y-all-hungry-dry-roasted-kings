import { foodListFunction } from "./foodsList.js";
import { Flavors } from "./Flavors.js"
import { toyListFunction } from "./toysList.js";



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
                
                                <!-- insert drinks function here -->
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
    if (e.target.id === 'toy') {
        const selectedToy = document.querySelector('#toy');
        const selectedToyName = selectedToy.options[selectedToy.selectedIndex].text;
        document.querySelector('#selectedToy').innerText = `Selected Toy: ${selectedToyName}`;
    }
});
