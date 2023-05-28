const button = document.getElementById("modal--teste");
const modal = document.getElementById("modal--div");

button.onclick = function () { 
  modal.style.display = "block";
}

const closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
	modal.style.display = "none";
}