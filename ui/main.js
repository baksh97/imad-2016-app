var button = document.getElementById('button');
var counter = 0;
var span =document.getElementById('count');
    span.innerHTML="counter.toString()";
button.onClick = function(){
    counter=counter+1;
    
};