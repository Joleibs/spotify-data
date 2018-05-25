// Spotify Data-Viz-API Project -- By Josh Leibsohn

var clientId = "0bcef9d9b3314325932f6e8e1f4e70f2";
var clientSecret = "cefeb025fde0413495133cb917d47547";
var callback = "http://localhost:8888/callback/";

//features call
var api = "https://api.spotify.com/v1/audio-features/";
// track call
// var api = "https://api.spotify.com/v1/tracks/";
var track = "06AKEBrKUckW0KREUWRnvT";
var key = "Authorization: Bearer BQBfB8oL5ndMo7tDdO9RLbyC_5C3U8xTnOpWsUlRjqVxrUrGsCfZfVd9ajpPqx1m924sZhM1mu5Kx0NQltNPPE5BBu-l96lePtVFt_ZpJVsST3T0_k4ajrzp9U3R7_QztnDnx0vSOA_6u3Q";

var url = api + track + key;
var harRun = 0;

//_____________ Make donut chart function

function donutChart1 (id, data, color) {
  var width = 200;
	  var height = 200;
	  var radius = 100;
	  var greyColor = '#e8e8e8';
	  var dataColor = color;
	  var red
	  var colors = d3.scaleOrdinal([dataColor, greyColor]);
	
	var piedata1 = [{name: "one", value: 1 - data}, {name: "two", value: data}];

	// donut chart arc
	var arc1 = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - 50);

	// generate pie chart and donut chart
	var pie1 = d3.pie()
    .sort(null)
    .value(function(d) { return d.value });

	// define the svg for pie chart
	var svg1 = d3.select(id).append("svg")
    .attr("width", width)
    .attr("height", height)
  	.append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  // "g element is a container used to group other SVG elements"
  var g1 = svg1.selectAll(".arc1")
      .data(pie1(piedata1))
    	.enter().append("g")
      .attr("class", "arc1");

  // append path 
  g1.append("path")
      .attr("d", arc1)
      .style("fill", function(d, range) {
      return colors(range);
  		})
    	// transition 
    	.transition()
      .ease(d3.easeLinear)
      .duration(2000)
      .attrTween("d", tweenDonut1);

	function tweenDonut1(b) {
	  b.innerRadius = 0;
	  var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
	  return function(t) { return arc1(i(t)); };
	};
};

function donutChart2 (id, data, color) {
  var width = 200;
	  var height = 200;
	  var radius = 100;
	  var greyColor = '#e8e8e8';
	  var dataColor = color;
	  var red
	  var colors = d3.scaleOrdinal([dataColor, greyColor]);
	
	var piedata2 = [{name: "one", value: 1 - data}, {name: "two", value: data}];

	// donut chart arc
	var arc2 = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - 50);

	// generate pie chart and donut chart
	var pie2 = d3.pie()
    .sort(null)
    .value(function(d) { return d.value });

	// define the svg for pie chart
	var svg2 = d3.select(id).append("svg")
    .attr("width", width)
    .attr("height", height)
  	.append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  // "g element is a container used to group other SVG elements"
  var g2 = svg2.selectAll(".arc2")
      .data(pie2(piedata2))
    	.enter().append("g")
      .attr("class", "arc2");

  // append path 
  g2.append("path")
      .attr("d", arc2)
      .style("fill", function(d, range) {
      return colors(range);
  		})
    	// transition 
    	.transition()
      .ease(d3.easeLinear)
      .duration(2000)
      .attrTween("d", tweenDonut2);

	function tweenDonut2(b) {
	  b.innerRadius = 0;
	  var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
	  return function(t) { return arc2(i(t)); };
	};
};

function donutChart3 (id, data, color) {
  var width = 200;
	  var height = 200;
	  var radius = 100;
	  var greyColor = '#e8e8e8';
	  var dataColor = color;
	  var red
	  var colors = d3.scaleOrdinal([dataColor, greyColor]);
	
	var piedata3 = [{name: "one", value: 1 - data}, {name: "two", value: data}];

	// donut chart arc
	var arc3 = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - 50);

	// generate pie chart and donut chart
	var pie3 = d3.pie()
    .sort(null)
    .value(function(d) { return d.value });

	// define the svg for pie chart
	var svg3 = d3.select(id).append("svg")
    .attr("width", width)
    .attr("height", height)
  	.append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  // "g element is a container used to group other SVG elements"
  var g3 = svg3.selectAll(".arc2")
      .data(pie3(piedata3))
    	.enter().append("g")
      .attr("class", "arc3");

  // append path 
  g3.append("path")
      .attr("d", arc3)
      .style("fill", function(d, range) {
      return colors(range);
  		})
    	// transition 
    	.transition()
      .ease(d3.easeLinear)
      .duration(2000)
      .attrTween("d", tweenDonut3);

	function tweenDonut3(b) {
	  b.innerRadius = 0;
	  var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
	  return function(t) { return arc3(i(t)); };
	};
};

function donutChart4 (id, data, color) {
  var width = 200;
	  var height = 200;
	  var radius = 100;
	  var greyColor = '#e8e8e8';
	  var dataColor = color;
	  var red
	  var colors = d3.scaleOrdinal([dataColor, greyColor]);
	
	var piedata4 = [{name: "one", value: 1 - data}, {name: "two", value: data}];

	// donut chart arc
	var arc4 = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - 50);

	// generate pie chart and donut chart
	var pie4 = d3.pie()
    .sort(null)
    .value(function(d) { return d.value });

	// define the svg for pie chart
	var svg4 = d3.select(id).append("svg")
    .attr("width", width)
    .attr("height", height)
  	.append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  // "g element is a container used to group other SVG elements"
  var g4 = svg4.selectAll(".arc4")
      .data(pie4(piedata4))
    	.enter().append("g")
      .attr("class", "arc4");

  // append path 
  g4.append("path")
      .attr("d", arc4)
      .style("fill", function(d, range) {
      return colors(range);
  		})
    	// transition 
    	.transition()
      .ease(d3.easeLinear)
      .duration(2000)
      .attrTween("d", tweenDonut4);

	function tweenDonut4(b) {
	  b.innerRadius = 0;
	  var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
	  return function(t) { return arc4(i(t)); };
	};
};

function donutChart5 (id, data, color) {
  var width = 200;
	  var height = 200;
	  var radius = 100;
	  var greyColor = '#e8e8e8';
	  var dataColor = color;
	  var red
	  var colors = d3.scaleOrdinal([dataColor, greyColor]);
	
	var piedata5 = [{name: "one", value: 1 - data}, {name: "two", value: data}];

	// donut chart arc
	var arc5 = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - 50);

	// generate pie chart and donut chart
	var pie5 = d3.pie()
    .sort(null)
    .value(function(d) { return d.value });

	// define the svg for pie chart
	var svg5 = d3.select(id).append("svg")
    .attr("width", width)
    .attr("height", height)
  	.append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  // "g element is a container used to group other SVG elements"
  var g5 = svg5.selectAll(".arc5")
      .data(pie5(piedata5))
    	.enter().append("g")
      .attr("class", "arc5");

  // append path 
  g5.append("path")
      .attr("d", arc5)
      .style("fill", function(d, range) {
      return colors(range);
  		})
    	// transition 
    	.transition()
      .ease(d3.easeLinear)
      .duration(2000)
      .attrTween("d", tweenDonut5);

	function tweenDonut5(b) {
	  b.innerRadius = 0;
	  var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
	  return function(t) { return arc5(i(t)); };
	};
};

function donutChart6 (id, data, color) {
  var width = 200;
	  var height = 200;
	  var radius = 100;
	  var greyColor = '#e8e8e8';
	  var dataColor = color;
	  var red
	  var colors = d3.scaleOrdinal([dataColor, greyColor]);
	
	var piedata6 = [{name: "one", value: 1 - data}, {name: "two", value: data}];

	// donut chart arc
	var arc6 = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - 50);

	// generate pie chart and donut chart
	var pie6 = d3.pie()
    .sort(null)
    .value(function(d) { return d.value });

	// define the svg for pie chart
	var svg6 = d3.select(id).append("svg")
    .attr("width", width)
    .attr("height", height)
  	.append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  // "g element is a container used to group other SVG elements"
  var g6 = svg6.selectAll(".arc2")
      .data(pie6(piedata6))
    	.enter().append("g")
      .attr("class", "arc3");

  // append path 
  g6.append("path")
      .attr("d", arc6)
      .style("fill", function(d, range) {
      return colors(range);
  		})
    	// transition 
    	.transition()
      .ease(d3.easeLinear)
      .duration(2000)
      .attrTween("d", tweenDonut6);

	function tweenDonut6(b) {
	  b.innerRadius = 0;
	  var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
	  return function(t) { return arc6(i(t)); };
	};
};



//______________ write text function

function writeText (divId, divData) {
		document.getElementById(divId).textContent = divData;  
}

//_________________token code

var accessToken = location.hash;

var token = accessToken.substring(accessToken.search("=")+1, accessToken.search("&"));

//_________________FEATURES QUERY

function visualize () {
  var user_uri = document.getElementById("my_uri").value; 
  console.log(user_uri);
 		$.ajax({
 		url: api + "?ids=" + user_uri,
 		headers: {
       		'Authorization': 'Bearer ' + token
       		},
     		success: function gotData(data) {

      			//----- internal code for JSON Download..
        		// var songData = JSON.stringify(data);
        		// download(songData, 'json.txt', 'text/plain');

    
      			var songData = data;
      			var hasRun = 1;
      			console.log(songData);
      		
     			writeText ("danceData", songData.audio_features[0].danceability); 
					writeText ("acousticData", songData.audio_features[0].acousticness); 
					writeText ("energyData", songData.audio_features[0].energy); 
					writeText ("speechData", songData.audio_features[0].speechiness); 
					writeText ("liveData", songData.audio_features[0].liveness); 
					writeText ("valenceData", songData.audio_features[0].valence); 
					writeText ("loudData", songData.audio_features[0].loudness); 
					writeText ("tempoData", songData.audio_features[0].tempo); 

					donutChart1 ('#danceDonut', songData.audio_features[0].danceability, "#1dafd3"); 
					donutChart2 ('#acousticDonut', songData.audio_features[0].acousticness, ("#ff0000")); 
					donutChart3 ('#energyDonut', songData.audio_features[0].energy, (0, 200, 0)); 
					donutChart4 ('#speechDonut', songData.audio_features[0].speechiness, (0, 200, 0)); 
					donutChart5 ('#liveDonut', songData.audio_features[0].liveness, (0, 200, 0)); 
					donutChart6 ('#valenceDonut', songData.audio_features[0].valence, (0, 200, 0)); 
					// donutChart ('#valenceDonut', songData.audio_features[0].valence, "#1dafd3"); 
					// donutChart ('#loudDonut', songData.audio_features[0].loudness, "#1dafd3"); 
					// donutChart ('#tempoDonut', songData.audio_features[0].tempo, "#1dafd3"); 

     			}
		});
};

document.getElementById('btn1').addEventListener('click', visualize, false);

// if(hasRun = 0) {visualize};

// console.log(token);

//_________________json code

function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
};

//__________ Download JSON Function

// function download(content, fileName, contentType) {
//     var a = document.createElement("a");
//     var file = new Blob([content], {type: contentType});
//     a.href = URL.createObjectURL(file);
//     a.download = fileName;
//     a.click();
// }

// $.ajax({
// 	url: "https://api.spotify.com/v1/tracks/?ids=13x1YAL3c4msq6Q6HDq2FZ",
// 	headers: {
//        'Authorization': 'Bearer ' + token
//    		},
//    	success: function gotData(data) {
//    		var songData = JSON.stringify(data)
//    		download(songData, 'json.txt', 'text/plain');
//    	}
// });

// $.post("https://accounts.spotify.com/authorize/?client_id=0bcef9d9b3314325932f6e8e1f4e70f2&response_type=code&redirect_uri=http://localhost:8888/callback/");

// $.ajax(
//   {
//     method: "POST",
//     url: "https://accounts.spotify.com/api/token",
//     grant_type:"client_credentials"
//     header: {
//      Authorization: Basic <base64 encoded "0bcef9d9b3314325932f6e8e1f4e70f2":"cefeb025fde0413495133cb917d47547">
//     }
// });

// window.location = "https://accounts.spotify.com/en/authorize?client_id=0bcef9d9b3314325932f6e8e1f4e70f2&redirect_uri=https://joleibs.github.io/spotify-data/&response_type=token"


// var token = location.hash; 
// console.log(window.accessToken);

// // THIS IS THE GOOD GOOD QUERY ____________
// $.ajax({
//  url: "https://api.spotify.com/v1/audio-features/?ids=
//  headers: {
//        'Authorization': 'Bearer ' + token
//        },
//      success: function gotData(data) {
//        // var songData = JSON.stringify(data);
//        var songData = data;
//        console.log (songData);
//        console.log (songData.audio_features[0].danceability);
//        // download(songData, 'json.txt', 'text/plain');
//          setup();
//      draw (50, songData.audio_features[0].danceability*100);
//      }
// });

// 0b9oOr2ZgvyQu88wzixux9,7dt6x5M1jzdTEt8oCbisTK,7ef4DlsgrMEH11cDZd32M6,1cTZMwcBJT0Ka3UJPXOeeN,2XW4DbS6NddZxRPm5rMCeY,5SxkdsY1ufZzoq9iXceLw9,3swc6WTsr7rl9DqQKQA55C,39N9RPD9MRb5WmoLzNzPeA,08bNPGLD8AhKpnnERrAc6G,58q2HKrzhC3ozto2nDdN4z,3V8UKqhEK5zBkBb6d6ub8i,0e7ipj03S05BNilyu5bRzt,2ARqIya5NAuvFVHSN3bL0m,10Igtw8bSDyyFs7KIsKngZ,3fpVWegR6YOS1Yk5HSMYIq,45Egmo7icyopuzJN0oMEdk,4qKcDkK6siZ7Jp1Jb4m0aL,1gm616Plq4ScqNi7TVkZ5N,76cy1WJvNGJTj78UqeA5zr,5CLGzJsGqhCEECcpnFQA8x,63SevszngYpZOwf63o61K4,4hQ6UGyWQIGJmHSo0J88JW,6jA8JUuPCGYjFcgw0AoM5T,33IOhptvC2Qoy2UhjiHXLV,3ee8Jmje8o58CHK66QrVC2,5VuxWXbt7XENQCtE9TzpTv,4H7WNRErSbONkM06blBoGc,6Hgh47WXVKtXN5zGOu0hjI,6xTU6B6nFwKKTSZ9ySXS80,79jX8RM5CgPqDKdGEKNW9K,1rfofaqEpACxVEHIZBJe6W,7iDa6hUg2VgEL1o1HjmfBn,3GCdLUSnKSMJhs4Tj6CV3s,2VdT56BGpdqNHUgOe1j5vc,3Wf2YGdYT8xVdNsQSoRKk9,6IaieqiCVvsNvEt6Y7yOFa,7uzmGiiJyRfuViKKK3lVmR,6n4U3TlzUGhdSFbUUhTvLP,6mAz8D1TmlTuef90dbNIiZ,4QtiVmuA88tPQiCOHZuQ5b,2j2fIJGh4PMdXt9ULI5Tlc,43cFjTTCD9Cni4aSL0sORz,3DoBTwfr8yi2LN08SBpFkN,32lItqlMi4LBhb4k0BaSaC,55S2PQgSMYAhgoTCcGCDfw,7yotKA30dwTKNEGomV9ZsI,6RnkFd8Fqqgk1Uni8RgqCQ,7qiZfU4dY1lWllzX7mPBI3,09IOPhEh1OMe0HD9b36FJk,5Z5nbOXhsSbySVC7WUc6y9"

//new JSON script - Track INFO

// var songData;

// //  https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy

// $.ajax(
//    url: 'https://api.spotify.com/v1/audio-features/06AKEBrKUckW0KREUWRnvT',
//    headers: {
//        'Authorization': 'Bearer ' + 'BQB3TmMYHORtucm8dlXfXYT0i5oDhzKxUYMrgKET4_uiYNsXfyOR_ef_XtBnPEK01ysihFhtk1RTMvFCdFQ3Xu2ge6HibtaVvKbZ4Ll2Taa7fvtUyr8NP2sm4F1GL8TZwvwqNhD2Vv6a0bQ'
//        },
//    success: gotData(data) {
//        printLn(data);
//        }
    
// );



// <script src="//code.jquery.com/jquery-1.11.1.min.js"> </script>

//OG API JSON SCRIPT - AUDIO FEATURES

// var songData;

// function download(content, fileName, contentType) {
//     var a = document.createElement("a");
//     var file = new Blob([content], {type: contentType});
//     a.href = URL.createObjectURL(file);
//     a.download = fileName;
//     a.click();
// }



