console.log('Loaded!');

//moving image

leftMargin=0;
var img = document.getElementById('img');
function moveRight(){
    leftMargin = leftMargin+10;
    img.style.marginLeft = leftMargin+'px'
}
img.onclick = function(){
    var interval = setInterval(moveRight,10);
}