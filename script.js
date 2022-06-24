const para = document.getElementById("para");

window.addEventListener("keyup", function(e) {
    console.log(e.keyCode);
    number = e.keyCode;
    para.innerHTML = number;
});