const links = document.querySelectorAll("li");
icons.addEventListener("click", () => {
  nav.classList.toggle("active");
});

links.forEach((link) => {
    link.addEventListener("click", () => {
    nav.classList.remove("active")
    })
})

// AJOUT DE L'EFFET ECRITURE EN PAGE D'ACCUEIL
const ecriture = document.querySelector("#ecriture")
textContent = "Je suis Yaya BALDE EN FORMATION DE DEVELOPEMENT WEB"
let index = 0
function typeText() {
  ecriture.textContent = textContent.slice(0, index);
  index++;

  if (index <= textContent.length) {
      setTimeout(typeText, 100); // ajustez la vitesse de frappe en millisecondes
  }
}
typeText()