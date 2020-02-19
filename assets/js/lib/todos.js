// check off todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//Create new To-do
$("input[type='text']").keypress(function(event){
    if(event.which===13)
    {
    //Getting new todo text from input 
      var todotext = $(this).val();
      $(this).val("");
      $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todotext + "</li>")  
      
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});
