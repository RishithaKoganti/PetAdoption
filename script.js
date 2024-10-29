let homeservice = document.querySelector(".homeservice");
let navButtonsBars = document.querySelector(".navButtonsBars");

navButtonsBars.addEventListener("mouseover", function() {
    homeservice.style.display = 'flex';
});

homeservice.addEventListener("mouseout", function() {
    homeservice.style.display = 'none';
});

homeservice.addEventListener("mouseover", function() {
    homeservice.style.display = 'flex';
});