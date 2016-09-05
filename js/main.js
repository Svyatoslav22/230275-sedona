var link = document.querySelector(".main-ul button");
var popup = document.querySelector(".search-ul");
link.addEventListener("click", function (event) {
    popup.classList.toggle("hidden-block");
});
