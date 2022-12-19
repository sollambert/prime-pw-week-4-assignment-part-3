console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

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

function listItems() {
    console.log("Basket items: ")
    for (let i = 0; i < basket.length; i ++) {
        console.log(basket[i]);
    }
}

function empty() {
    console.log("Emptying basket.")
    basket = [];
    listItems();
}

function isFull() {
    if (basket.length < maxItems) {
        return false;
    }
    return true;
}

function removeItem( item ) {
    let index = basket.indexOf(item);
    if (index != -1) {
        console.log(`Removing ${item} from basket.`);
        basket.splice[index];
        return item;
    }
    console.log("Item not found.");
    return null;
}

let item1 = "bananas"
addItem(item1);
listItems();
empty();
removeItem(item1);