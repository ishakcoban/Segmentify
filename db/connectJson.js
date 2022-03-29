
/* Connecting JSON file  */
fetch('../product-list.json')
  .then(response => response.json())
  .then(data => {

    /* Listing the navbar */
    fillNavbar(data.responses[0][0].params.userCategories)

  /* First recommandation list shows when page opens*/ 
    fillList(data,true,null)

  /* When user clicks a navbar button, related products are listed on page*/ 
    $(".wrapper").on("click", ".each-link-wrapper", function () {
      var txt = $('i', this).length ? $('i', this).text() : $(this).text();

      const elements = document.getElementsByClassName("splide__slide");
      while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
      }

       /* Show products*/ 
      fillList(data,false,txt)

    });

  });

