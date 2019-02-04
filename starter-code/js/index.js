function deleteItem(e) {

}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {

}

function createQuantityInput() {

}

function createDeleteButton() {

}

function createQuantityNode() {

}

function createItemNode(dataType, itemData) {

}

function createNewItemRow(itemName, itemUnitPrice) {

}

function createNewItem() {

}

// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };


//  CALCULATE PRICES BUTTON
document.getElementById("calc-prices-button").addEventListener("click", function () {
  for (i = 0; i < document.getElementsByClassName("quantity").length; i++) {

    let quant = document.getElementsByClassName("quantity")[i].value;
    let numString = document.getElementsByClassName("price")[i].innerText;
    let realPrice = Number(numString.replace(/[^0-9.-]+/g, ""));
    document.getElementsByClassName("total-item-price")[i].innerText = "$" + quant * realPrice;
  }
  let addedPrices = function () {
    let total = 0;
    for (i = 0; i < document.getElementsByClassName("quantity").length; i++) {
      let temp = document.getElementsByClassName("total-item-price")[i].innerText;
      let num = Number(temp.replace(/[^0-9.-]+/g, ""));
      total += num;
    }
    return total;
  }
  document.getElementById("total-price").querySelector("h2 span").innerText = addedPrices();
});

//  DELETE BUTTON
for (let i = 0; i < document.getElementsByClassName("delete-btn").length; i++) {

  // Listen to Delete Button
  document.getElementsByClassName("delete-btn")[i].addEventListener("click", function () {

    // Remove row on Delete Button
    document.getElementsByClassName("product")[i].remove();
  });
}


// ADD Product Button
document.getElementById("add-new").addEventListener("click", function () {
  let newProductName = document.getElementById("product-name").value;
  let newProductPrice = document.getElementById("product-quantity").value;

  // Call create product function
  createProduct(newProductName, newProductPrice);
})

// Execute create product function
function createProduct(newProductName, newProductPrice) {
  let newHTMLString =
    `
  <div class="product">
    <div class="item-name">
      <span>${newProductName}</span>
    </div>
    <div class="price">
      $<span>${newProductPrice}</span>
    </div>
    <div class="qty">
      <label>QTY</label>
      <input class= "quantity" type="number" value="">
    </div>
    <div class="total-item-price">
      $<span>0.00</span>
    </div>
    <div class="delete-btn">
      <button class="btn btn-delete">Delete</button>
    </div>
  </div>
`
  document.getElementById("success-btn-container").insertAdjacentHTML("beforebegin", newHTMLString);

  // Add Delete Event Listener
  var productNumber = document.getElementsByClassName("delete-btn").length - 1

  document.getElementsByClassName("delete-btn")[productNumber].addEventListener("click", function () {
    document.getElementsByClassName("product")[productNumber].remove();
  })

}

// function update() {
//   addButton();
//   deleteButton();

// }