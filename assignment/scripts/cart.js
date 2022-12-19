console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem( item ) {
    let basketLength = basket.length;
    basket.push(item);
    if (basketLength < basket.length) {
        return true;
    }
    return false;
}
let item1 = "bananas"
console.log(`Adding ${item1} to basket:`, addItem(item1));
console.log(`New basket contents: ${basket}`)