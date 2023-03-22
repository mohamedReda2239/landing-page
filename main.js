/* header */
    // select the button
    let headerButton = document.querySelector(".icon");
    //select list
    let linksList = document.querySelector(".links");
    // select the header 
    let header = document.querySelector("header");
    // select all links
    let allLinks = document.querySelectorAll(".links li");

    // add active class to the list when click button
    headerButton.addEventListener("click" ,function () {
        if (!linksList.classList.contains("active")) {
            linksList.classList.add("active");
            // adjust header height to push the sections below
            header.style.height = `${linksList.getBoundingClientRect().bottom + 15}px` ;
        } else {
            linksList.classList.remove("active");
            // reset header height
            header.style.removeProperty("height");
        }
    } );

    // when click in any link the list disappear
    allLinks.forEach( function (link) {
        link.addEventListener("click" , function () {
            linksList.classList.remove("active");
            // reset header height
            header.style.removeProperty("height");
        });
    });
/* header */