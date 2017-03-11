	$("#search").on("click", function() {
		// Built by LucyBot. www.lucybot.com
		var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
		var apikey = "c04d522e56c94530aaee7cb136cc0cd9";

		var searchTerm = $("#searchTerm").val();
		var numRecords = $("#numRecords").val();
		var startYear = $("#startYear").val(); 
		var endYear = $("#endYear").val(); 

		var param;

		param = "'api-key':" + apikey;
		param = param + ", 'q': " + searchTerm;
		param = param + ", 'begin_date': " + startYear + "0101";
		param = param + ", 'end_date': " + endYear + "1231";


     	 url = url + "api-key=" + apikey +
        "&q=" + searchTerm + "&begin_date=" + startYear + "0101&end_date=" + endYear + "1231";


        console.log(url);


		// url += '?' + $.param({
		//   'api-key': "c04d522e56c94530aaee7cb136cc0cd9",
		//   'q': "lincoln",
		//   'begin_date': "",
		//   'end_date': ""
		// });



		$.ajax({
		  url: url,
		  method: 'GET',
		}).done(function(response) {
		  		for(var i=1; i<=numRecords; i++){


				var articleInfoDiv = $("<div class='articleinfo'>");

				var results = response.response.docs;


	        // Make a paragraph tag with jQuery and store it in a variable named p.
	         // Set the inner text of the paragraph to the rating of the image in results[i].
	         var h3 = $("<h3>").text(i);

	         console.log(results);

	         var h5main = $("<h5>").text(results[i].headline.main);

	         var h5by = $("<h5>").text(results[i].byline.original);

	          var h5section = $("<h5>").text(results[i].section_name);

	          var h5pub_date = $("<h5>").text(results[i].pub_date);

	          var ahrefurl = $("<a>").text(results[i].web_url);
	          ahrefurl.attr("href", results[i].web_url);


	        // Append the p variable to the animalDiv variable.
	        articleInfoDiv.append(h3);
	        articleInfoDiv.append(h5main);
	        articleInfoDiv.append(h5by);
	        articleInfoDiv.append(h5section);
	        articleInfoDiv.append(h5pub_date);
	        articleInfoDiv.append(ahrefurl);


				$("#results").append(articleInfoDiv);
			}


		}).fail(function(err) {
		  throw err;
		});

	});
