import temples from '../data/temples.mjs';

document.addEventListener("DOMContentLoaded", function () {

    const hamburgerMenu = document.querySelector("#navButton");
    const navElement = document.querySelector(".menuLinks");
    const navElements = document.querySelectorAll(".menuLinks li");

    // Hamburger Menu Toggle
    hamburgerMenu.addEventListener("click", () => {
        navElement.classList.toggle("open");
        hamburgerMenu.classList.toggle("open");
        if (hamburgerMenu.classList.contains("open")) {
            hamburgerMenu.textContent = "X";
        } else {
            hamburgerMenu.textContent = "=";
        }
    });

    // Nav Items Toggle 'current-menu-item' Class
    navElements.forEach(element => {
        element.addEventListener("click", () => {
            let currentPage = document.querySelector(".current-menu-item");
            currentPage.classList.toggle("current-menu-item");
            element.classList.toggle("current-menu-item");
        });
    });

    createTemples(temples);

    const old_temples = document.querySelector("#old");
    const new_temples = document.querySelector("#new");
    const large_temples = document.querySelector("#large");
    const small_temples = document.querySelector("#small");

    old_temples.addEventListener("click", function () {
        const filtered = temples.filter(temple => {
            const year = parseInt(temple.dedicated.split(",")[0]);
            const current = document.querySelector('.current-menu-item');

            current.classList.remove("current-menu-item");
            old_temples.classList.add("current-menu-item");
    
            console.log(year);
            return year < 1900;
        });
        createTemples(filtered);
    });
    
    new_temples.addEventListener("click", function () {
        const filtered = temples.filter(temple => {
            const year = parseInt(temple.dedicated.split(",")[0]);
            const current = document.querySelector('.current-menu-item');

            current.classList.remove("current-menu-item");
            new_temples.classList.add("current-menu-item");
    
            return year > 2000;
        });
        createTemples(filtered);
    });
    
    large_temples.addEventListener("click", function () {
        const filtered = temples.filter(temple => temple.area > 90000);
        const current = document.querySelector('.current-menu-item');
        current.classList.remove("current-menu-item");
        large_temples.classList.add("current-menu-item");
        createTemples(filtered);
    });
    
    small_temples.addEventListener("click", function () {
        const filtered = temples.filter(temple => temple.area < 10000);
        const current = document.querySelector('.current-menu-item');

        current.classList.remove("current-menu-item");
        small_temples.classList.add("current-menu-item");

        createTemples(filtered);
    });
    
});


function createTemples(temples) {
    const temple_container = document.querySelector("#card-container");
    temple_container.innerHTML = "";
    
    // Create Temple Cards
    temples.forEach(temple => {
        const temple_name = document.createElement("h2");
        const location = document.createElement("span");
        const dedicate_date = document.createElement("span");
        const size = document.createElement("span");
        const image = document.createElement("img");
        const card = document.createElement("div");
        card.classList.add("card");
        
        temple_name.textContent = `${temple.templeName}`;
        location.textContent = `Location: ${temple.location}`;
        dedicate_date.textContent = `Dedicated: ${temple.dedicated}`;
        size.textContent = `Size: ${temple.area} sq ft`;
        image.src = temple.imageUrl;
        image.alt = `${temple.templeName}`;
        image.loading = "lazy";

        card.appendChild(temple_name);
        card.appendChild(location);
        card.appendChild(dedicate_date);
        card.appendChild(size);
        card.appendChild(image);

        temple_container.appendChild(card);
    });
}