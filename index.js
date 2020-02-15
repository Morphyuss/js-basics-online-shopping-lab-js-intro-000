var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
   var itemObject = {
      itemName:`${item}`,
      itemPrice: Math.floor(Math.random()*100)
    }
      cart.push(itemObject)
        return itemObject["itemName"] + " has been added to your cart."
}


function viewCart() {
  if (cart.length===0){
      return "Your shopping cart is empty."
      
  } else if (cart.length === 1) {
      var itemObject = cart[0]
      return `In your cart, you have ${itemObject.itemName} at $${itemObject.itemPrice}.`
        
  } else if (cart.length === 2) {
      var string = "In your cart, you have " 
        for (var i = 0; i < cart.length; i++){
          if (i === 0){
             string += `${cart[i].itemName} at $${cart[i].itemPrice}, and `
           } else {
                string += `${cart[i].itemName} at $${cart[i].itemPrice}.`
           }
        }                  
        return string
  }
        
   else if (cart.length >= 3) {
        string = "In your cart, you have "
         for (i = 0; i < cart.length; i++){
            if (i < 2){
              string+= `${cart[i].itemName} at $${cart[i].itemPrice}, ` 
            }   else {
               string+= `and ${cart[i].itemName} at $${cart[i].itemPrice}.`                  
            } 
         }
   return string
   }
   
}


function total() {
  const arrSum = arr => arr.reduce((a,b) => a + b, 0)
   arrSum
   return arrSum
  
  
  
  /*var sum = function(num) {
    var total = 0;
    for (var i = 0; i < num.length; i++) {
        if (typeof i == "number") {
            total += num[i];
        }
    }
    return total
} */
  
  
  
  
  
  
  
  
   /*var sum = 
for (index = 0; index < array.length; index++){ 
} 
  return sum */
  
  //reduce(function(a, b) { return a + b }, 0) 
  
  /*var sum = Math.abs(cart)
  return sum*/
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}