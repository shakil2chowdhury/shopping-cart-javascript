const firstPrice = parseFloat(document.getElementById("firstPrice").innerText);
const secondPrice = parseFloat(document.getElementById("secondPrice").innerText);

//after clicking Plus sign increase the quantity
const firstIncrease = document.getElementById("firstIncrease").addEventListener("click", function(){
    const updatePrice = increaseQty("firstQuantity", firstPrice);
    document.getElementById("firstPrice").innerText = updatePrice;
    totalPrice();
})

const secondIncrease = document.getElementById("secondIncrease").addEventListener("click", function(){
    const updatePrice = increaseQty("secondQuantity", secondPrice);
    document.getElementById("secondPrice").innerText = updatePrice;
    totalPrice();
})

// clicking minus sign decrease the quantity
const firstDecrease = document.getElementById("firstDecrease").addEventListener("click", function(){
    const updatePrice = decreaseQty("firstQuantity", firstPrice);
    document.getElementById("firstPrice").innerText = updatePrice;
    totalPrice();
})

const secondDecrease = document.getElementById("secondDecrease").addEventListener("click", function(){
    const updatePrice = decreaseQty("secondQuantity", secondPrice);
    document.getElementById("secondPrice").innerText = updatePrice;
    totalPrice();
})

// function for counting and displaying subtotal and total
function totalPrice(){
    const firstPrice = parseFloat(document.getElementById("firstPrice").innerText);
    const secondPrice = parseFloat(document.getElementById("secondPrice").innerText);
    const tax = parseFloat(document.getElementById("totalTax").innerText);
    const subTotal = firstPrice+secondPrice;
    const grandTotal = tax + subTotal;
    document.getElementById("subTotal").innerText = subTotal;
    document.getElementById("grandTotal").innerText = grandTotal;
}

//function for increasing quantity
function increaseQty(id, price){
    const firstQuantity = parseFloat(document.getElementById(id).value);
    const updateQuantity = firstQuantity+1;
    document.getElementById(id).value = updateQuantity;
    const updatePrice = price * updateQuantity;
    return updatePrice;
}

//function for decreasing quantity
function decreaseQty(id, price){
    const firstQuantity = parseFloat(document.getElementById(id).value);
    const updateQuantity = firstQuantity - 1;
    document.getElementById(id).value = updateQuantity;
    const updatePrice = price * updateQuantity;
    return updatePrice;
}




