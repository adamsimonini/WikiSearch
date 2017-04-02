

$( document ).ready(function(){

var hasReturned = false;
var wikiURL = "";

//Make AJAX Request to Media Wiki
  function APICall(){
          $.ajax({
            type:"GET",
            url: wikiURL,
            async: false,
            dataType: "jsonp",
            success: function(data){
            $("#searchResults").append("<a href='" + data[3][0] + "'>" + data[0] + "</a>");
            $("#searchResults").append("<p>" + data[2][0] + "</p>");
            $("#searchResults").append("<p>" + data[3][0] + "</p>");
            }
           });
  }

//Affix user input to variable and set URL
    $('#searchInput').keydown(function(event){
      if (event.keyCode == 13){
        hasReturned = true;
        userInput = $('#searchInput').val();
        wikiURL = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + userInput + "&format=json";

        //Reset the value of input field to "search again?"
        $('#searchInput').val("");
        $('#searchInput').replaceWith('<input id="searchInput" class="form-style-4" type="text" style="text-align:center" placeholder="search again?" name="field1" required="true" />');

        APICall();
        }else{
          return;
        }
    });
    
//Randomizer Button JS
    $('#randomizer').click(function(){
      wikiURL = "https://en.wikipedia.org/w/api.php?action=query&list=random&rnlimit=5";
      APICall();
    });
  });

//Auto Expand Text Area For Style

  function adjust_textarea(h) {
      h.style.height = "20px";
      h.style.height = (h.scrollHeight)+"px";
  }
