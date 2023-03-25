const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector("ul");

hamburger.addEventListener("click", () => {
  if (navbar.style.display === "none") {
    navbar.style.display = "block";
  } else {
    navbar.style.display = "none";
  }
  console.log("clicked");
});
