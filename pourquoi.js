// 1. texte du debut
const message = document.getElementById("message");
message.addEventListener("click", function () { message.classList.add("cache"); });

// 2. Affiche le texte au clic
const textepourquoi = document.getElementById("textepourquoi");
message.addEventListener("click", function () { textepourquoi.classList.remove("cache"); });