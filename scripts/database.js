const database = {
    food: [
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
    flavors: [
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
    order: {
        order: [
            {id: 1,
            foodId: 1,
            drinkId: 1,
            flavorId: 1,
            toyId: 1,
            locationId: 1}
        ]
    },
    transientState: {}
}

export const getFood = () => {
    return database.food.map(f => ({...f}))
}

export const getDrinks = () => {
    return database.drinks.map(f => ({...f}))
}

export const getFlavors = () => {
    return database.flavors.map(f => ({...f}))
}

export const getToys = () => {
    return database.toys.map(f => ({...f}))
}

export const getLocations = () => {
    return database.locations.map(f => ({...f}))
}


export const setFood = (id) => {
    database.transientState.foodId = id
}

export const setDrink = (id) => {
    database.transientState.drinkId = id
}

export const setFlavor = (id) => {
    database.transientState.flavorId = id
}

export const settoy = (id) => {
    database.transientState.toyId = id
}


export const setLocation = (locationId) => {
    database.transientState.selectedLocation = locationId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}



export const completeOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.transientState}

    // Add a new primary key to the object
    const lastIndex = database.order.order.length - 1
    newOrder.id = database.order.order[lastIndex].id + 1

    // Add the new order object to custom orders state
    database.order.order.push(newOrder) 

    // Reset the temporary state for user choices
    database.transientState = {}

    // Broadcast custom event to entire documement so that the
    // application can re-render and update state
    document.dispatchEvent( new CustomEvent("stateChanged") )
}
