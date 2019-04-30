var images = document.getElementById("images");
var weaknesses = document.getElementById("weaknesses");

dragElement(images, "img");
dragElement(weaknesses, "weak");

function dragElement(elmnt, name) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        if(name=="img" &&
        ((elmnt.offsetLeft - pos1) > 10 &&
         (elmnt.offsetLeft - pos1) < 40 &&
         (elmnt.offsetTop - pos2) > 260 &&
         (elmnt.offsetTop - pos2) < 300)){
            elmnt.style.top = 280 + "px";
            elmnt.style.left = 30 + "px";
        }
        if(name=="weak" &&
        ((elmnt.offsetLeft - pos1) > ($(window).width()*0.875) &&
         (elmnt.offsetLeft - pos1) < ($(window).width()*0.885) &&
         (elmnt.offsetTop - pos2) > 0 &&
         (elmnt.offsetTop - pos2) < 40)){
            elmnt.style.top = 30 + "px";
            elmnt.style.left = 88 + "%";
        }
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}