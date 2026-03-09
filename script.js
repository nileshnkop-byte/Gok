let cart = [];
let total = 0;

function addCart(item,price){

cart.push(item);
total += price;

alert(item + " Added");

}

function checkout(){

alert("Order Placed Total ₹" + total);

}
