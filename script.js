var player = document.getElementById("player");

var interval;

function moveUp(){
    var up = parseInt(window.getComputedStyle(player).getPropertyValue("up"));
    if(up>0){
        player.style.up = up - 2 + "px"; 
    }
}

document.addEventListener("keydown", event => {
    if(event.key==="ArrowUp"){
        interval = setInterval(moveUp, 1);
    }
    if(event.key==="ArrowDown"){
        interval = setInterval(moveDown, 1);
    }
});

document.addEventListener("keyup", event =>{
    clearInterval(interval);
});