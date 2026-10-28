// 1. texte du debut
const message = document.getElementById("message");
document.addEventListener("click", function () { message.classList.add("cache"); });


// 2. Affiche le texte au clic
const textehistoire = document.getElementById("textehistoire");
document.addEventListener("click", function () { textehistoire.classList.remove("cache"); });