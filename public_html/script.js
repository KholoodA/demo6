var beverages={"apple_juice":{"color":"chocolate","bubbles":false,"price":8,"smoke":false},
      "coca_cola":{"color":"maroon","bubbles":true,"price":7,"smoke":false}
      ,"fanta":{"color":"orange","bubbles":true,"price":6,"smoke":false}
      ,"coffee":{"color":"#591100","bubbles":false,"price":15,"smoke":true}
    };
  
  
  
  function animate_beverage(){
      
      var selected_id="";
      for(var key in beverages){
          if($('#'+key).is(":checked"))
              selected_id=key;
      }
    
     var color=beverages[selected_id]["color"];
     var bubbles=beverages[selected_id]["bubbles"];
     var smoke=beverages[selected_id]["smoke"];
     var price=beverages[selected_id]["price"];
     
     $("#liquid").css("background-color",color);
     $("#liquid").css("border-color",color);
     $("#price").text(price+" AED");
     
    if(bubbles){
        $(".bubble").show();
    }
    else{
        $(".bubble").hide();
    }
    if(smoke){
        $("#smoke-container").show();
    }
    else{
        $("#smoke-container").hide();
    }   
  
  
  $('#liquid').animate({height: '170px'}, 2500);
  $('.foam').delay(2500).animate({bottom: '200px'}, 2500);
  
  
  }