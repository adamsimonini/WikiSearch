
$('#searchInput').keydown(function(event){
    if (event.keyCode == 13){
      userInput = $('#searchInput').val();
      wikiURL = "http://example.org/w/index.php?action=opensearch&Search=" + userInput + "&format=-json&callBack=?";
    }

});

function userInput(terms) {
    if(event.keyCode == 13) {
        alert(terms.value);
    }
}


//Auto Expand Text Area

  function adjust_textarea(h) {
      h.style.height = "20px";
      h.style.height = (h.scrollHeight)+"px";
  }



  /*
          $.ajax({
            type:"GET",
            url: wikiURL,
            async: false,
            dataType: "json",
            success: function(data){
              console.log(data);

              for(i=0; i < listOfArticles.length;i++){
              var articleStr = listOfArticles[i];
                var url = 'http://wikipedia.org/wiki/' + articleStr;
                $("#results").append('<li> <a href"' + url + '">' )
              }

            }
            error: function(errorMessage){
              alert("Could not complete request");
            }
          });
  */
