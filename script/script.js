       $(document).ready(function(){
          
    $(".btn-primary").click(function(){
        if ($(this).parent().children().is("span")) {
           
            alert("Already added to cart!");
       }else{
         
        $(this).parent().prepend("<span class='infoSpan'>Added to cart</span>");
       }
    
    });
});
    