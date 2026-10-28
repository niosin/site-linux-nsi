// 1. texte du debut
const message = document.getElementById("message");
message.addEventListener("click", function () { message.classList.add("cache"); });

// 2. Affiche le texte au clic
const textedistributions = document.getElementById("textedistributions");
message.addEventListener("click", function () { textedistributions.classList.remove("cache"); });