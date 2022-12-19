console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem( item ) {
    let basketLength = basket.length;
    console.log(`Adding ${item1} to basket.`);
    basket.push(item);
    console.log(`New basket contents: ${basket}`);
    if (basketLength < basket.length) {
        return true;
    }
    return false;
}

let item1 = "bananas"
addItem(item1);

function listItems() {
    console.log("Basket items: ")
    for (let i = 0; i < basket.length; i ++) {
        console.log(basket[i]);
    }
}
listItems();