console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

/**
 * Adds item to basket
 * @param {string} item The item to add to the basket.
 * @returns {boolean} True if the addition was successful, otherwise false.
 */
function addItem( item ) {
    let basketLength = basket.length;
    console.log(`Adding ${item1} to basket.`);
    if (!isFull()) {
        basket.push(item);
        console.log("Item successfully added.")
        return true;
    }
    console.log("Item failed to be added to cart.")
    return false;
}

/**
 * Prints all items in basket to console.
 */
function listItems() {
    console.log("Basket items: ")
    for (let i = 0; i < basket.length; i ++) {
        console.log(basket[i]);
    }
}

/**
 * Assigns global basket variable to empty array.
 */
function empty() {
    console.log("Emptying basket.")
    basket = [];
    listItems();
}

/**
 * Checks if basket length is equal to maxItems const variable.
 * @returns {boolean} False if basket length is less than maxItems const variable, otherwise true
 */
function isFull() {
    if (basket.length < maxItems) {
        return false;
    }
    return true;
}

/**
 * Removes given item from the basket array.
 * @param {string} item The item to be removed from the array.
 * @returns The item that was removed if it was found within the array, otherwise null.
 */
function removeItem( item ) {
    let index = basket.indexOf(item);
    if (index != -1) {
        console.log(`Removing ${item} from basket.`);
        basket.splice([index], 1);
        return item;
    }
    console.log("Item not found.");
    return null;
}


//testing
let item1 = "bananas"
addItem(item1);
listItems();
empty();

for (let i = 0; i < 7; i ++) {
    addItem(item1);
}
listItems();
removeItem(item1);
listItems();