$(function(){
  
  $(".form-control").on('focus', function(){
    
    $(this).parents(".form-group").addClass('focused');

  });

  $(".form-control").on('blur', function(){
    
    $(this).parents(".form-group").removeClass('focused');

  });

});

document.querySelector("#join").addEventListener("click", function(){
  document.querySelector(".popup").classList.add("popup");
});
document.querySelector(".popup .close").addEventListener("click", function(){
  document.querySelector(".popup").classList.remove("popup");
});

