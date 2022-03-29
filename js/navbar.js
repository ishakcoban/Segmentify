
function fillNavbar(userCategories) {

    let count = 0;
    userCategories.forEach(element => {

        const linkWrapper = window.document.createElement("div");
        const activeLink = window.document.createElement("div");
        const eachLink = window.document.createElement("div");

        linkWrapper.classList.add("each-link-wrapper");
        linkWrapper.setAttribute('id', 'elw')
        activeLink.classList.add("active-link");
        eachLink.classList.add("each-link");

        linkWrapper.appendChild(activeLink)
        linkWrapper.appendChild(eachLink)


        eachLink.innerText = element;
        window.document.getElementById("left-navbar").appendChild(linkWrapper);

        /* First tap activating when page opens*/
        if (count == 0) {
            $(".active-link").addClass("active")
            $(".each-link").addClass("active")
        }
        count++;

    })

        /* Navbar controlling selecting and hovering taps*/ 
        $(".each-link-wrapper").click(function () {

            $(".active-link").removeClass("active")
            $(".each-link").removeClass("active")
            $(".active-link").addClass("disableactive")
            $(this)[0].children[0].className = "active-link active"
            $(this)[0].children[1].className = "each-link active"
          })
      

}

