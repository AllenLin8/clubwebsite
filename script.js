function dropdown() {
    document.getElementById("dropdown").classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropDown = document.getElementById("dropdown");
        if(myDropDown.classList.contains('show')) {
            myDropDown.classList.remove('show');
        }
    }
    
    
}