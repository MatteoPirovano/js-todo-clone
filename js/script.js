$(document).ready(function() {
  // var source = document.getElementById("entry-template").innerHTML;
  var source = $('#entry-template').html();
  var template = Handlebars.compile(source);

  var list = [
    "Fare l' esercitazione pomeridiana",
    "Ripassare jQuery",
    "Fare la spesa",
    "Guardare video su YouTube"
  ]
  for (var i = 0; i < list.length; i++) {
    var context = {
      list: list[i]
    };
    var html = template(context);
    $('#page').append(html);
  }

  $(document).on('click', '.check',
  function(){
    $(this).parent().remove();
  });

  $("input").keypress(function(event){
    if(event.which==13){
      var newTask = $('imput').val();
      var context = {
         text: newTask
      };
      var html = template(context);
      $('#page').append(html);
    }
  });
});
