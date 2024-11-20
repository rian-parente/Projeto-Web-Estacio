function togglecard() {
  var card = document.getElementById("infocard");
  var overlay = document.getElementById("overlay");
  var isVisible = card.style.display === "block";

  card.style.display = isVisible ? "none" : "block";
  overlay.style.display = isVisible ? "none" : "block";
}

function toggleDetalhes(id) {
const detalhes = document.getElementById(id);
detalhes.classList.toggle('show'); 
}

