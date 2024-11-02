let homeservice = document.querySelector(".homeservice");
    let navButtonsBars = document.querySelector(".navButtonsBars");

    navButtonsBars.addEventListener("mouseover", function() {
        homeservice.style.display = 'flex';
        setTimeout(() => {
            homeservice.classList.add("active");
        }, 100);
    });

    homeservice.addEventListener("mouseover", function() {
        homeservice.classList.add("active");
        homeservice.style.display = 'flex';
    });

    homeservice.addEventListener("mouseout", function() {
        homeservice.style.display = 'none';
            homeservice.classList.remove("active");
    });