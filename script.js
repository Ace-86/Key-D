const para = document.getElementById("para");

window.addEventListener("keyup", function(e) {
    console.log(e);
    buttonPress = e.key;
    number = e.keyCode;
    para.innerHTML = number;
    para2.innerHTML = buttonPress;
});

