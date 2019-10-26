var topics = ["capybara", "bugs bunny", "rick and morty", "dancing"];

      function displaygifInfo() {

        var gif = $(this).text();
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=r3h8jdHJHdZEPmBDKE12DCTXynTZ8f1s&limit=10";
        newDiv = $("<div>");

         $("#gifs-view").empty();
         $("#gifs-view").css("display", "grid");

        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {


        for (let i = 0; i < response.data.length; i++) {
            
            newDiv.append("<span class='gifspan'><p>Rating: " + response.data[i].rating + "</p><img src='" + response.data[i].images.downsized.url + "'id='displayed-gif'></span>");
            $("#gifs-view").prepend(newDiv);
        }
          
             console.log(response);

        });
        $(this).text();
      }

      function renderButtons() {

        $("#buttons-view").empty();

        for (var i = 0; i < topics.length; i++) {

          var a = $("<button>");
          a.addClass("gif");
          a.attr(topics[i]);
          a.text(topics[i]);
          $("#buttons-view").append(a);
        }
      }

      $("#add-gif").on("click", function(event) {
        event.preventDefault();
        var gif = $("#gif-input").val().trim();

        if (gif === "") {
            alert("Please enter something first");
        } else {

        topics.push(gif);

        renderButtons();
        }
      });

      $(document).on("click", ".gif", displaygifInfo);



      renderButtons();