// JQuery Document

$(function(){

$("#paja").draggable({
  /*stop: function(event){$(this).html("¡BIEN HECHO!")},*/
  cursor: "move",
  revert: "invalid"


  });
    $("#casa-paja").droppable({
      drop: function(event){$(this).fadeTo(500, 0.4)},
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

   /*$(function newDoc() {
      window.location.assign("index.html")
    });
  
/*LABERINTO*/
$("#pieza1").click(function(){
    $("#pieza1").animate(
    { deg: 90 },
    {
      duration: 300,
      step: function(go) {
        $(this).css({ transform: 'rotate(' + go + 'deg)' });
      }
    }
  );
  });

  $("#pieza2").click(function(){
    $("#pieza2").animate(
    { deg: 90 },
    {
      duration: 300,
      step: function(go) {
        $(this).css({ transform: 'rotate(' + go + 'deg)' });
      }
    }
  );
  });

  $("#pieza3").click(function(){
    $("#pieza3").animate(
    { deg: 90 },
    {
      duration: 300,
      step: function(go) {
        $(this).css({ transform: 'rotate(' + go + 'deg)' });
      }
    }
  );
  });

  $("#pieza4").click(function(){
    $("#pieza4").animate(
    { deg: 90 },
    {
      duration: 300,
      step: function(go) {
        $(this).css({ transform: 'rotate(' + go + 'deg)' });
      }
    }
  );
  });

$("#pieza4").click(function(){
    $("#pieza4").animate(
    { deg: 90 },
    {
      duration: 300,
      step: function(go) {
        $(this).css({ transform: 'rotate(' + go + 'deg)' });
      }
    }
  );
  });

$("#pieza5").click(function(){
    $("#pieza5").animate(
    { deg: 90 },
    {
      duration: 300,
      step: function(go) {
        $(this).css({ transform: 'rotate(' + go + 'deg)' });
      }
    }
  );
  });

$("#pieza6").click(function(){
    $("#pieza6").animate(
    { deg: 90 },
    {
      duration: 300,
      step: function(go) {
        $(this).css({ transform: 'rotate(' + go + 'deg)' });
      }
    }
  );
  });

$("#pieza7").click(function(){
    $("#pieza7").animate(
    { deg: 90 },
    {
      duration: 300,
      step: function(go) {
        $(this).css({ transform: 'rotate(' + go + 'deg)' });
      }
    }
  );
  });

$("#pieza8").click(function(){
    $("#pieza8").animate(
    { deg: 90 },
    {
      duration: 300,
      step: function(go) {
        $(this).css({ transform: 'rotate(' + go + 'deg)' });
      }
    }
  );
  });

$("#pieza9").click(function(){
    $("#pieza9").animate(
    { deg: 90 },
    {
      duration: 300,
      step: function(go) {
        $(this).css({ transform: 'rotate(' + go + 'deg)' });
      }
    }
  );
      /*alert('¡BIEN HECHO!' );*/

  });

/*complete: function(){ alert('done') }
  $(function newDoc() {
      window.location.assign("index.html")
    });*/

});

