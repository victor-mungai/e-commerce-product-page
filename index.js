let modalContainer = document.querySelector('.modal-container');
let closeButton = document.querySelector('.close-button');
let thumbnail = document.querySelector(".thumbnails");
let background = document.querySelector("body");
let mobileMenu = document.querySelector(".menu_icon");
let mobileNav = document.querySelector(".mobile_nav");
let mobileClose = document.querySelector(".mobile_close");
thumbnail.addEventListener("click",function(){
    modalContainer.style.display = 'block';
    background.classList.add('blur-background');
  })
  closeButton.addEventListener('click', function() {
    modalContainer.style.display = 'none';
    background.classList.remove('blur-background');
  });
  modalContainer.addEventListener('click', function(e) {
    if (e.target === modalContainer) {
      modalContainer.style.display = 'none';
      background.classList.remove('blur-background');
    }
  });
  mobileMenu.addEventListener("click",function(){
    mobileNav.style.display = 'block';
    background.classList.add('blur-background');
  })
  mobileClose.addEventListener('click', function() {
    mobileNav.style.display = 'none';
    background.classList.remove('blur-background');
  });
  modalContainer.addEventListener('click', function(e) {
    if (e.target === modalContainer) {
      modalContainer.style.display = 'none';
      background.classList.remove('blur-background');
    }
  });

  var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
let displayNumber = document.querySelector(".starting_number");
let cartCount = document.querySelector(".profile_img");
let addToCart = document.querySelector(".add_to_cart");
let cartContent = document.querySelector(".cart_content");
let checkout = document.querySelector(".checkout");
let startingNumber = 0;
let active = false;
let deleted = false;
function addCart(){
    
    let totalCost = 125 * displayNumber.textContent;
    cartContent.innerHTML = `
    <div>
    <img class="cart_product_img" src="images/image-product-1.jpg" alt="">
</div>
<div class="product_info">
        <div>Fall Limited Edition Sneakers </div>
        <div>$125.00 *<span class="product_count">${displayNumber.textContent}</span> <span class="total_price">$${totalCost}.00</span></div> 
</div>
<div>
 <img class="delete_icon" src="images/icon-delete.svg" alt="">
</div>
    `
    checkout.innerHTML = `
    <button class="checkout_btn">Checkout</button>
    `
    let deleteBtn = document.querySelector(".delete_icon");
    deleteBtn.addEventListener("click",function(){
      cartContent.innerHTML = `
      <div class="empty_cart">Your cart is empty</div>
      `;
      checkout.innerHTML =``;
      deleted == true;
      if(deleted ==true){
       cartNumber.style.opacity = "0";
     }
     })
     if(displayNumber.textContent>0){
      cartCount.innerHTML += `
      <div class="cart_count">${displayNumber.textContent}</div>
      `;
     }
    let cartNumber = document.querySelector(".cart_count");
 }
 
function increaseNumber(){
    startingNumber += 1;
    return startingNumber;
}
addToCart.addEventListener("click", function(){
  addCart();
})
function increase(){
    increaseNumber();
    displayNumber.textContent = startingNumber;
    return displayNumber.textContent;
}
function reduceNumber(){
    startingNumber -= 1;
    return startingNumber;
}
function reduce(){
    reduceNumber();
    displayNumber.textContent = startingNumber;
    return displayNumber.textContent;
}
let count = 2;
let cartBtn = document.querySelector(".cart_logo");
let cartCheckout = document.querySelector(".cart_checkout");
cartBtn.addEventListener("click",function(){
  cartCheckout.style.display = "block";
  count += 1;
  if (count % 2 == 0 ){
     cartCheckout.style.display = "none";
 }
 console.log("button clicked");
})