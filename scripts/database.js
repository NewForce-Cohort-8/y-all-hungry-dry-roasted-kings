export const database = {
    foodsLocationStock: [///i just made one foodId in stock for each Location according to Id 
        { id: 1, foodId: 1, locationId: 1, quantity: 9 },
        { id: 2, foodId: 2, locationId: 2, quantity: 10 },
        { id: 3, foodId: 3, locationId: 3, quantity: 10 },
        { id: 4, foodId: 4, locationId: 4, quantity: 10 },
        
    ],
    drinksLocationStock: [///i just made one foodId in stock for each Location according to Id 
        { id: 1, drinkId: 1, locationId: 1, quantity: 10 },
        { id: 2, drinkId: 2, locationId: 2, quantity: 10 },
        { id: 3, drinkId: 3, locationId: 3, quantity: 10 },
        { id: 4, drinkId: 4, locationId: 4, quantity: 10 },
        
    ],
    toysLocationStock: [///i just made one foodId in stock for each Location according to Id 
    { id: 1, toyId: 1, locationId: 1, quantity: 10 },
    { id: 2, toyId: 2, locationId: 2, quantity: 10 },
    { id: 3, toyId: 3, locationId: 3, quantity: 10 },
    { id: 4, toyId: 4, locationId: 4, quantity: 10 },
    
],
dessertsLocationStock: [///i just made one foodId in stock for each Location according to Id 
    { id: 1, dessertId: 1, locationId: 1, quantity: 10 },
    { id: 2, dessertId: 2, locationId: 2, quantity: 10 },
    { id: 3, dessertId: 3, locationId: 3, quantity: 10 },
    { id: 4, dessertId: 4, locationId: 4, quantity: 10 },
    
],
  foods: [
      {id: 1, type: "Hot Dog", price: 3.50},
      {id: 2, type: "Hamburger", price: 4.00},
      {id: 3, type: "Cheeseburger", price: 4.50},
      {id: 4, type: "Pizza", price: 5.00},
  ],
  drinks: [
      {id: 1, type: "Water", price: 1.25},
      {id: 2, type: "Soda", price: 1.50},
      {id: 3, type: "Beer", price: 2.75},
      {id: 4, type: "Wine", price: 3.00},
  ],
  desserts: [
      {id: 1, type: "Chocolate", price: 2.75},
      {id: 2, type: "Vanilla", price: 0.75},
      {id: 3, type: "Strawberry", price: 0.75},
      {id: 4, type: "Mint", price: 1.75},
  ],
  toys: [
      {id: 1, type: "Stuffed Animal", price: 5.00},
      {id: 2, type: "Action Figure", price: 4.00},
      {id: 3, type: "Cards", price: 6.00},
      {id: 4, type: "Hat", price: 10.00},
  ],
  locations: [
      {id: 1, name: "Nashville North", address: "8422 Johnson Pike"},
      {id: 2, name: "Nashville South", address: "209 Emory Drive"},
      {id: 3, name: "Nashville East", address: "8932 Nolensville Road"},
      {id: 4, name: "Nashville West", address: "1234 Charlotte Pike"},
  ],
    orderBuilder: {//added null for all properties so they would change 
        locationId: null,
        foodId: null,
        drinkId: null,
        dessertId: null,
        toyId: null
    },
    customOrders: [
        {
            id:1,
            locationId: 1,
            foodId: 1,
            drinkId: 1,
            dessertId: 1,
            toyId: 1

        }
    ]
}
  
export const getFoodsLocationStock = () => {//this makes a copy of this state to use data in foodListfunction and in yallhungry for the change eventlistener
    return database.customOrders.map(customOrder => ({...customOrder}))
}
export const getDrinksLocationStock = () => {//this makes a copy of this state to use data in foodListfunction and in yallhungry for the change eventlistener
    return database.customOrders.map(customOrder => ({...customOrder}))
}
export const getToysLocationStock = () => {//this makes a copy of this state to use data in foodListfunction and in yallhungry for the change eventlistener
    return database.customOrders.map(customOrder => ({...customOrder}))
}
export const getDessertsLocationStock = () => {//this makes a copy of this state to use data in foodListfunction and in yallhungry for the change eventlistener
    return database.customOrders.map(customOrder => ({...customOrder}))
}
export const getCustomOrders = () => { //make a copy of this state to use data in foodListfunction and in yallhungry for the change eventlistener
    return database.customOrders.map(customOrder => ({...customOrder}))
}
////////////////////////////////////
 export let getFoods = () => {
    return database.foods.map( food =>({...food}))
}

export let getLocations = () => {
    return database.locations.map(location =>({...location}))
}
export const getDrinks = () => {
    return database.drinks.map(d => ({...d}))
}

export const getToys = () => {
    return database.toys.map(t => ({...t}))
}
export const getDesserts = () => {
    return database.desserts.map(fl => ({...fl}))
}

////
export let setLocation = (id) => {
    database.orderBuilder.locationId = id
 }
export let setFood = (id) => {
    database.orderBuilder.foodId = id
 }
export let setDrink = (id) => {
    database.orderBuilder.drinkId = id
 }
 export let setDessert = (id) => {
    database.orderBuilder.dessertId = id
 }
export let setToy = (id) => {
    database.orderBuilder.toyId = id
 }

//////////////////////////////////
export let getCurrentOrder = () => {//  We need  all the data from OrderBuilder for modified foodList function. So this function returns orderbuilder. import it to listmodule and 
    return database.orderBuilder
   }
////////////////////////////////////////
 export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1


    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
