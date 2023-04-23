function contClose(){
    document.getElementById('contact-us').style.display = "none";
    document.getElementById('overlay').style.display = "none";
}

function contOpen(){
    document.getElementById('overlay').style.display = "block";
    document.getElementById('contact-us').style.display = "flex";
}

function regOpen(){
    document.getElementById('overlay').style.display = "block";
    document.getElementById('form').style.display = "flex";
}

function menuOpen(){
    if (document.getElementById("menu").style.right == "-250px") {
         document.getElementById("overlay").style.display = "block";
         document.getElementById("menu").style.right = "0";
     } else {
         document.getElementById("menu").style.right = "-250px";
         document.getElementById("overlay").style.display = "none";
     }
 }