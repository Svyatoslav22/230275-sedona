var link = document.querySelector(".search-header");
var popup = document.querySelector(".search-ul");
link.addEventListener("click", function (event) {
    popup.classList.toggle("hidden-block");
    popup.classList.toggle("search-ul");
});
