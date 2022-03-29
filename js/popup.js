function addCartButton(){

    const cartPopupWrapper = window.document.createElement("div");
    cartPopupWrapper.classList.add("cart-popup-wrapper")
    const cartPopupImg = window.document.createElement("img");
    cartPopupImg.classList.add("cart-popup-img")
    cartPopupImg.src = "./images/cart-popup-tick.png"
    cartPopupImg.setAttribute('lazy','loading')
    const cartPopupTextWrapper = window.document.createElement("div");
    cartPopupTextWrapper.classList.add("cart-popup-text-wrapper")
    const cartPopupText = window.document.createElement("div");
    cartPopupText.classList.add("cart-popup-text")
    cartPopupText.innerText = "Ürün sepete eklendi."
    const cartPopupTextAnchor = window.document.createElement("a");
    cartPopupTextAnchor.classList.add("cart-popup-text-anchor")
    cartPopupTextAnchor.innerText = "Sepete Git"
    const cartPopupCross = window.document.createElement("button");
    cartPopupCross.classList.add("cart-popup-cross")
    cartPopupCross.innerText = "X"
  
    cartPopupWrapper.appendChild(cartPopupImg);
    cartPopupWrapper.appendChild(cartPopupTextWrapper);
    cartPopupTextWrapper.appendChild(cartPopupText);
    cartPopupTextWrapper.appendChild(cartPopupTextAnchor);
    cartPopupWrapper.appendChild(cartPopupCross);
    window.document.getElementsByClassName("wrapper")[0].appendChild(cartPopupWrapper);
    
  }