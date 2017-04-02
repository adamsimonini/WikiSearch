

$( document ).ready(function(){

var hasReturned = false;

  // Affix user input to variable and set URL
  $('#searchInput').keydown(function(event){
      if (event.keyCode == 13){
        hasReturned = true;
        userInput = $('#searchInput').val();
        wikiURL = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + userInput + "&format=json";
        $('#searchInput').val("");
        $('#searchInput').replaceWith('<input id="searchInput" class="form-style-4" type="text" style="text-align:center" placeholder="search again?" name="field1" required="true" />');

        //Reset the value of input field to blank


        //Make AJAX Request to Media Wiki
        $.ajax({
          type:"GET",
          url: wikiURL,
          async: false,
          dataType: "jsonp",
          success: function(data){
            console.log(data);

           }
         });
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
