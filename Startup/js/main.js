"use strict";

//Navigation

const navList = document.querySelectorAll(".nav__menu_list li"),
      service = document.querySelector(".servises"),
      about = document.querySelector(".about"),
      works = document.querySelector(".works"),
      blogs = document.querySelector(".contact"),
      clients = document.querySelector(".clients"),    
      contact = document.querySelector(".footer");

navList.forEach((item, index, array) => {
    item.addEventListener("click", (event) => {
        event.preventDefault();



        if (index == 1) {
            service.scrollIntoView(true);
        } else if (index == 2) {
            about.scrollIntoView(true);
        } else if (index == 3) {
            works.scrollIntoView(true);
        } else if (index == 4) {
            blogs.scrollIntoView(true);
        } else if (index == 5) {
            clients.scrollIntoView(false);
        } else if (index == 6) {
            contact.scrollIntoView(false);
        } 
    });
});

//Works

const worksMenu = document.querySelectorAll(".list li"),
      worksBlock = document.querySelectorAll(".works__block_img");

function hideWorksImg() {
    worksBlock.forEach(item => {
        if (item.classList.contains("show")) {
            item.classList.remove("show");
        }
        item.classList.add("hide"); 
    });

    worksMenu.forEach(item => {
        item.classList.remove("works__list_active");
    });
}

function showWorksImg(i = 0) {
    worksBlock.forEach(item => {
        if (item.classList.contains("hide")) {
            item.classList.remove("hide");
        }
        item.classList.add("show"); 

    });

    worksMenu[i].classList.add("works__list_active");
}

function clickShowWorksImg(o, ...index) {
    index.forEach(item => {
        if (worksBlock[item].classList.contains("hide")) {
            worksBlock[item].classList.remove("hide");
        }

        worksBlock[item].classList.add("show");
    })

    worksMenu[o].classList.add("works__list_active");
}

hideWorksImg();
showWorksImg();

worksMenu.forEach((item, i) => {
    item.addEventListener("click", (event) => {
        event.preventDefault();
        
        if (i == 1) {
            hideWorksImg();
            clickShowWorksImg(1, 1, 8);
        } else if (i == 2) {
            hideWorksImg();
            clickShowWorksImg(2, 3, 5, 7);
        } else if (i == 3) {
            hideWorksImg();
            clickShowWorksImg(3, 0, 2, 5);
        } else if (i == 4) {
            hideWorksImg();
            clickShowWorksImg(4, 2, 5, 6);
        } else if (i == 0) {
            hideWorksImg();
            showWorksImg();
        }
    });
});

//Clider
const sliderBody = document.querySelectorAll(".clients.conteiner");


