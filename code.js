// JQuery Document

$(function(){

$("#paja").draggable({
  /*stop: function(event){$(this).html("¡BIEN HECHO!")},*/
  cursor: "move",
  revert: "invalid"


  });
    $("#casa-paja").droppable({
      drop: function(event){$(this).fadeTo(500, 1)},
      tolerance: "pointer" 
  });
    $("#casa-paja").droppable("option", "accept", "#paja"); 

 $("#madera").draggable({
 /* stop: function(event){$(this).html("¡BIEN HECHO!")},*/
  cursor: "move",
  revert: "invalid"
  });
    $("#casa-madera").droppable({
      drop: function(event){$(this).fadeTo(500, 0.4)},
      tolerance: "pointer"
    });
     $("#casa-madera").droppable("option", "accept", "#madera");
    
   $("#ladrillo").draggable({
  /*stop: function(event){$(this).html("¡BIEN HECHO!")},*/
  cursor: "move",
  revert: "invalid"
  });
    $("#casa-ladrillo").droppable({
     drop: function(event){$(this).fadeTo(500, 0.4)},
      tolerance: "pointer"
    });
     $("#casa-ladrillo").droppable("option", "accept", "#ladrillo");


});