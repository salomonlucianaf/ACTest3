$( document ).ready(function() {

  var res = new Respuestas (0);
  var totalquestion = 0;
   $(".divpregunta").each(function() {
         totalquestion = totalquestion + 1;
         if (totalquestion>1){
           $('#q'+totalquestion).hide();
         }
      });

var inputs = document.querySelectorAll('input[name="question1"]');
  var max =0;
    for (var i = 0; i < inputs.length; ++i) {
      max =  Math.max(max , parseInt(inputs[i].value));         
        }
    
maxValue = max * totalquestion 

console.log(max)
console.log(maxValue)

scoreIsabelle =  ((19 / 100) * maxValue).toFixed();
scoreBlathers = ((39 / 100) * maxValue).toFixed();
scoreTomNook = ((59 / 100) * maxValue).toFixed();
scoreKK = ((79 / 100) * maxValue).toFixed();

  $('#ResCanela').hide();
  $('#ResTomNook').hide();
  $('#ResBlathers').hide();
  $('#ResKK').hide();
  $('#ResCeleste').hide();
  $('#reiniciar').hide();


  $("#enviar").click(function(){ 
  $('#reiniciar').fadeIn();
  res.pa = res.pa +1
  var resaux = res.pa+1
  var radioSelected = 'question' + res.pa
  var ultima = $("#q"+res.pa ).data("ultima")
  var opcion = $("input[name='"+radioSelected+"']:checked").val(); //chequea que siempre haya algo tildado
  res.score = res.score + parseInt(opcion)



  console.log("la pregunta anterior es igual a " + res.pa + " y el puntaje actual es " + res.score)
  
  $('#q'+res.pa).fadeOut(function () {


    if (ultima=="yes"){ 
      $("#enviar").fadeOut();    
      $("#reiniciar").fadeOut();
      $('.titulo').fadeOut();

  switch (true) {
      case res.score <= scoreIsabelle:
        $('#ResCanela').fadeIn();
          break;

      case (res.score <= scoreBlathers) && (res.score > scoreIsabelle):
        $('#ResBlathers').fadeIn();
          break;

      case (res.score <= scoreTomNook ) && (res.score > scoreBlathers):
        $('#ResTomNook').fadeIn();
          break;

      case (res.score <= scoreKK) && (res.score > scoreTomNook):
        $('#ResKK').fadeIn();
          break;

      case (res.score > scoreKK) && (res.score <= maxValue):
        $('#ResCeleste').fadeIn();
          break;
  }
  
        } else {
          $('#q'+resaux).fadeIn();
        }
      });
    });
  });
  
 
  


  function Respuestas (pa) { //pa= pregunta actual
    this.pa = 0;
    this.score = 0;
  }


