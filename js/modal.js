// modal

document.getElementById("openModalBtn").onclick = function () {
  document.getElementById("myModal").style.display = "block";
};

document.getElementsByClassName("close")[0].onclick = function () {
  document.getElementById("myModal").style.display = "none";
};

window.onclick = function (event) {
  if (event.target == document.getElementById("myModal")) {
    document.getElementById("myModal").style.display = "none";
  }
};
