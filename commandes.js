// 1. texte du debut
const message = document.getElementById("message");
message.addEventListener("click", function () { message.classList.add("cache"); });

// 2. Affiche le texte au clic
const textecommandes = document.getElementById("textecommandes");
message.addEventListener("click", function () { textecommandes.classList.remove("cache"); });