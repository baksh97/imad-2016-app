var button = document.getElementById("button");
button.onClick = function(){
    counter = 0;
    counter=counter+1;
    var span =document.getElementById("count");
    span.innerHTML=counter.toString();
}  