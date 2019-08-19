import { observable } from 'mobx'

export class Item {
    @observable name
    @observable completed = false
    @observable location
    constructor(name) {
        this.name = name
        this.location = "Super Sell"
    }
}


// Add in a location property to your Item class. By default, set this property to "Super Sell"



// Edit your App.js to render the location next to the item name.

