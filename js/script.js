/*global $*/

$(document).ready(function(){
$("#shoot").click(function(){
var playChoice=["Rock","Paper","Scissors"];
var cpuChoice=["Rock","Paper","Scissors"];

var origin=Math.random();
var choice=origin*3;
var player= $("input").val();
var cpu=Math.floor(choice);
 
  if(cpu===0){
         
         $("#it").text(cpuChoice[0]);
         console.log(cpuChoice[0]);
}
  else if(cpu===1){
          
          $("#it").text(cpuChoice[1]);
          console.log(cpuChoice[1]);
          
}

  else if (cpu===2){
          
          $("#it").text(cpuChoice[2]);
          console.log(cpuChoice[2]);
}



   if(player==="Rock" || player==="rock"){
           
           $("#you")
   } 
});
});