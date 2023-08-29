document.addEventListener("DOMContentLoaded", function () {
    const openItemModalButtons = document.querySelectorAll(".itempic");
    const itemModal = document.getElementById("item-modal");
    const closeItemModal = document.getElementById("close-item-modal");
    const itemOrderForm = document.getElementById("item-order-form");
    const itemQuantityInput = document.getElementById("item-quantity");
  
    openItemModalButtons.forEach(button => {
        button.addEventListener("click", function () {
            itemModal.style.display = "block";
        });
    });
  
    closeItemModal.addEventListener("click", function () {
        itemModal.style.display = "none";
    });
  
    itemOrderForm.addEventListener("submit", function (event) {
        event.preventDefault();
  
        const selectedItemText = document.querySelector(".item-description").textContent;
        const quantity = itemQuantityInput.value;
  
        const order = {
            item: selectedItemText,
            quantity: quantity,
        };
  
        addToCart(order);
        itemModal.style.display = "none";
    });
  
    function addToCart(order) {
        // Implement your cart functionality here
    }
  
    // ... (Checkout functionality and cart modal code, as provided earlier) ...
  });
  