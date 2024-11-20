var main_reg = document.getElementById('form_reg');

main_reg.onclick = function() {
    fade_registr.style.display = "block";
    reg_main.style.display = "block";
}

var back = document.getElementById('return_reg');

back.onclick = function() {
    fade_registr.style.display = "none";
    reg_main.style.display = "none";
}

