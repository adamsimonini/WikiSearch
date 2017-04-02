

$( document ).ready(function(){

var hasReturned = false;

  // Affix user input to variable and set URL
  $('#searchInput').keydown(function(event){
      if (event.keyCode == 13){
        hasReturned = true;
        userInput = $('#searchInput').val();
        wikiURL = "https://en.wikipedia.org/w/api.php?action=query&titles=god" + userInput + "&format=json";
        console.log("Help");
         $('#searchInput').val("");
        /*
        $.ajax({
          type:"GET",
          url: wikiURL,
          async: false,
          dataType: "json",
          success: function(data){
            alert(data);

           }
         });*/
      }else{
          return;
      }
    });
  });
/*
   // Use URL to perform AJAX GET Request
      if(hasReturned){

          $.ajax({
            type:"GET",
            url: wikiURL,
            async: false,
            dataType: "json",
            success: function(data){
              alert(data);

             }
           });
       }else{
          return;
       }
     });
});
*/
//Auto Expand Text Area For Style

  function adjust_textarea(h) {
      h.style.height = "20px";
      h.style.height = (h.scrollHeight)+"px";
  }
