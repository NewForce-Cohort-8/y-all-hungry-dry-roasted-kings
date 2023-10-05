import { foodListFunction} from "./foodsList.js";
import { locationsListFunction } from "./locationsList.js";
import { drinksListFunction } from "./drinksList.js";
import { toyListFunction } from "./toysList.js";
import { dessertsListFunction} from "./dessertsList.js"
import { Orders } from "./orders.js";
import { addCustomOrder } from "./database.js";
import { getCurrentOrder } from "./database.js";
import { getFoodsLocationStock } from "./database.js";///probably didnt need all these but..
import {  setLocation } from "./database.js";// added all these imports just to be safe. look at database for more context of what these imports are 


//new event listener for customOrders
document.addEventListener("click", (event) => {
    if (event.target.id === "orderButton") {
    
        addCustomOrder();
    }
});

export let forMain = () => {
return `<h1>Y'all Hungry?</h1>

<article class="choices">

    <section class="choices__locations options">
    
            <!-- insert locations function  here -->
            ${locationsListFunction()}
    </section>

            <section class="choices__foods options">
                    
                        ${foodListFunction()}
            </section>

    
                    <section class="choices__drinks options">
                
                                <!-- insert drinks function here -->
                                ${drinksListFunction()}
                    </section>
                    <section class="choices__toys options">
                                            
                    <!-- insert toys function here -->
                    ${toyListFunction()}
    </section>
                                <section class="choices__desserts options">
                                    
                                                <!-- insert desserts function here -->
                                                ${dessertsListFunction()}
                                </section>
    </article>


    <article class="customOrders">

                                  <h2> Orders</h2>
                     <p id="selectedLocation">  </p>
                     <p id="selectedFood">   </p>
                     <p id="selectedDrink">  </p>
                     <p id="selectedToy">  </p>
                     <p id="selectedFlavor">  </p>
                     
    </article>


    <article>
                    <button id="orderButton"> Place Order </button>
                    ${Orders()} <!-- insert dynamic orders function here -->
    </article>


`

};
document.addEventListener('change', e => {
    if (e.target.id === 'food') {
        const selectedFood = document.querySelector('#food');
        const selectedFoodName = selectedFood.options[selectedFood.selectedIndex].text;
        document.querySelector('#selectedFood').innerText = ` ${selectedFoodName}`;
    }
});
//new 
//1. set location
document.addEventListener('change', e => {
    if (e.target.id === 'location') {
        
        const selectedLoc = document.querySelector('#location');
        
        const selectedLocId = parseInt(selectedLoc.value); //stores the location id as integer in new variable 
        
        const selectedLocName = selectedLoc.options[selectedLoc.selectedIndex].text;

        document.querySelector('#selectedLocation').innerText = `You're Picking Up Your Order At Our ${selectedLocName} Location`;


        setLocation(selectedLocId);// Set the selected location in the orderBuilder using setLocation function 
        
        const foodsSection = document.querySelector('.choices__foods');//store targeted class area in html structure
        foodsSection.innerHTML = foodListFunction();
        
        const drinksSection = document.querySelector('.choices__drinks');
        drinksSection.innerHTML = drinksListFunction();

        // Update desserts dropdown
        const dessertsSection = document.querySelector('.choices__desserts');
        dessertsSection.innerHTML = dessertsListFunction();

        // Update toys dropdown
        const toysSection = document.querySelector('.choices__toys');
        toysSection.innerHTML = toyListFunction();
    }
});

document.addEventListener('change', e => {
    if (e.target.id === 'drinks') {
        const selectedDrink = document.querySelector('#drinks');
        const selectedDrinkName = selectedDrink.options[selectedDrink.selectedIndex].text;
        document.querySelector('#selectedDrink').innerText = ` ${selectedDrinkName}`;
    }
});
document.addEventListener('change', e => {    
if (e.target.id === 'toy') {
        const selectedToy = document.querySelector('#toy');
        const selectedToyName = selectedToy.options[selectedToy.selectedIndex].text;
        document.querySelector('#selectedToy').innerText = `${selectedToyName}`;
    }
});
document.addEventListener('change', e => {
    if (e.target.id === 'resource') {
        const selectedDessert = document.querySelector('#resource');
        const selectedDessertName = selectedDessert.options[selectedDessert.selectedIndex].text;
        document.querySelector('#selectedFlavor').innerText = `${selectedDessertName}`;
    }
});