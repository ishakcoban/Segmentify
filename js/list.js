function fillList(data,firstInitialize,txt){


    let category;
  
    if(firstInitialize == true){
      category = data.responses[0][0].params.recommendedProducts["Size Özel"]
  
    }else{
      category = data.responses[0][0].params.recommendedProducts[txt]
  
  
    }
  
    category.forEach(element => {
  
      const splide = window.document.createElement("li");
      splide.classList.add('splide__slide')
      
      
      const slideEachContentWrapper = window.document.createElement("div");
      slideEachContentWrapper.classList.add('slide-each-content-wrapper')
      
      const slideEachContent = window.document.createElement("div");
      slideEachContent.classList.add('slide-each-content')
      slideEachContentWrapper.appendChild(slideEachContent);
      slideEachContentWrapper.classList.add("lazy-loading")
      splide.appendChild(slideEachContentWrapper)
      /**/
      const slideImgWrapper = window.document.createElement("div");
      const slideImg = window.document.createElement("img");
      
      slideImgWrapper.classList.add("slide-img-wrapper");
      
      slideImg.classList.add("slide-img");
      slideImg.setAttribute("loading","lazy");
      slideImg.setAttribute('src',element.image);
      slideImgWrapper.appendChild(slideImg)
      
      
      /**/
      const productName = window.document.createElement("div");
      if (element.name.length > 32) {
        productName.innerText = element.name.slice(0, 32) + "...";
      
      } else {
        productName.innerText = element.name
      }
      
      
      productName.classList.add("product-name");
      
      
      /**/
      const priceWrapper = window.document.createElement("div");
      const price = window.document.createElement("div");
      
      priceWrapper.classList.add("price-wrapper");
      price.classList.add("price");
      price.innerText = element.priceText;
      priceWrapper.appendChild(price)
      
      
      /**/
      const freeShippingWrapper = window.document.createElement("div");
      const freeShippingImage = window.document.createElement("img");
      const freeShippingContent = window.document.createElement("div");
      
      freeShippingWrapper.classList.add("free-shipping-wrapper");
      freeShippingImage.classList.add("free-shipping-image");
      freeShippingImage.src = "./images/freeShipping.png";
      freeShippingContent.innerText = "Ücretsiz Kargo";
      freeShippingContent.classList.add('free-shipping-content')
      freeShippingWrapper.appendChild(freeShippingImage)
      freeShippingWrapper.appendChild(freeShippingContent)
      
      
      
      /**/
      const addToCartButton = window.document.createElement("button");
      addToCartButton.innerText = "Sepete Ekle";
      
      addToCartButton.classList.add("add-to-cart-button");
      
      
      
      
      slideEachContent.appendChild(slideImgWrapper);
      slideEachContent.appendChild(productName);
      slideEachContent.appendChild(priceWrapper);
      slideEachContent.appendChild(freeShippingWrapper);
      slideEachContent.appendChild(addToCartButton);
      window.document.getElementById("EachProductWrapper").appendChild(splide);
      if (element.params.shippingFee != "FREE") {
        freeShippingWrapper.style.opacity = "0"
      }
      
      
      
      })
      var splidee = new Splide(".splide", {
      type: "loop",
      perPage: data.responses[0][0].params.recommendedProducts["Size Özel"].length,
      perMove: 1,
      
      
      });
      
      splidee.mount();

      /* added to cart button disabling*/
$(".wrapper").on("click", ".cart-popup-cross", function () {
    if(window.document.getElementsByClassName("wrapper")[0].children[1]){
    window.document.getElementsByClassName("wrapper")[0].removeChild(window.document.getElementsByClassName("wrapper")[0].children[1])
    }
  })
  /* added to cart button enabling*/
  $(".wrapper").on("click", ".add-to-cart-button", function () {
    if(window.document.getElementsByClassName("wrapper")[0].children[1]){
      window.document.getElementsByClassName("wrapper")[0].removeChild(window.document.getElementsByClassName("wrapper")[0].children[1])
  
    }
  
    addCartButton();
  
  })
  
  
  
      
  }
  
  
  