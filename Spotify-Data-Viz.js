// Spotify Data-Viz-API Project

//Notes: will use the Spotfiy API. API needs a KEY and a VIRTUAL MACHINE SERVER 

//API address https://beta.developer.spotify.com/documentation/web-api/

//My Client ID (api key) = 0bcef9d9b3314325932f6e8e1f4e70f2

var clientId = "0bcef9d9b3314325932f6e8e1f4e70f2";
var clientSecret = "cefeb025fde0413495133cb917d47547";
var callback = "http://localhost:8888/callback/";

var api = "https://api.spotify.com/v1/audio-features/";
var track = "06AKEBrKUckW0KREUWRnvT";
var key = "Authorization: Bearer BQBfB8oL5ndMo7tDdO9RLbyC_5C3U8xTnOpWsUlRjqVxrUrGsCfZfVd9ajpPqx1m924sZhM1mu5Kx0NQltNPPE5BBu-l96lePtVFt_ZpJVsST3T0_k4ajrzp9U3R7_QztnDnx0vSOA_6u3Q";

var url = api + track + key;


// //  https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy

// $.ajax(
//    url: 'https://api.spotify.com/v1/audio-features/06AKEBrKUckW0KREUWRnvT',
//    headers: {
//        'Authorization': 'Bearer ' + 'BQB3TmMYHORtucm8dlXfXYT0i5oDhzKxUYMrgKET4_uiYNsXfyOR_ef_XtBnPEK01ysihFhtk1RTMvFCdFQ3Xu2ge6HibtaVvKbZ4Ll2Taa7fvtUyr8NP2sm4F1GL8TZwvwqNhD2Vv6a0bQ'
//    		},
//    success: gotData(data) {
//        printLn(data);
//    		}
    
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

//_________________p5.js code
// function setup() {
//   				var cnv = createCanvas(500, 500);
//   				var x = (windowWidth - width) / 2;
//   				var y = (windowHeight - height) / 2;
//   				cnv.position(x, y);
//   				background(255, 0, 200);
// 			}

// function draw (rectLength, rectHeight) {
// 				rect(50, 50, rectLength, rectHeight); 
// 			}

// var clientId = "0bcef9d9b3314325932f6e8e1f4e70f2"
// var clientSecret = "cefeb025fde0413495133cb917d47547"
// var callback = "http://localhost:8888/callback/"


// $.post("https://accounts.spotify.com/authorize/?client_id=0bcef9d9b3314325932f6e8e1f4e70f2&response_type=code&redirect_uri=http://localhost:8888/callback/");

// $.ajax(
//   {
//     method: "POST",
//     url: "https://accounts.spotify.com/api/token",
//     grant_type:"client_credentials"
//     header: {
//     	Authorization: Basic <base64 encoded "0bcef9d9b3314325932f6e8e1f4e70f2":"cefeb025fde0413495133cb917d47547">
//     }
// });

// window.location = "https://accounts.spotify.com/en/authorize?client_id=0bcef9d9b3314325932f6e8e1f4e70f2&redirect_uri=https://joleibs.github.io/spotify-data/&response_type=token"


// var token = location.hash; 
// console.log(window.accessToken);

var accessToken = location.hash;
console.log(accessToken);


// // THIS IS THE GOOD GOOD QUERY ____________
// $.ajax({
// 	url: "https://api.spotify.com/v1/audio-features/?ids=0b9oOr2ZgvyQu88wzixux9,7dt6x5M1jzdTEt8oCbisTK,7ef4DlsgrMEH11cDZd32M6,1cTZMwcBJT0Ka3UJPXOeeN,2XW4DbS6NddZxRPm5rMCeY,5SxkdsY1ufZzoq9iXceLw9,3swc6WTsr7rl9DqQKQA55C,39N9RPD9MRb5WmoLzNzPeA,08bNPGLD8AhKpnnERrAc6G,58q2HKrzhC3ozto2nDdN4z,3V8UKqhEK5zBkBb6d6ub8i,0e7ipj03S05BNilyu5bRzt,2ARqIya5NAuvFVHSN3bL0m,10Igtw8bSDyyFs7KIsKngZ,3fpVWegR6YOS1Yk5HSMYIq,45Egmo7icyopuzJN0oMEdk,4qKcDkK6siZ7Jp1Jb4m0aL,1gm616Plq4ScqNi7TVkZ5N,76cy1WJvNGJTj78UqeA5zr,5CLGzJsGqhCEECcpnFQA8x,63SevszngYpZOwf63o61K4,4hQ6UGyWQIGJmHSo0J88JW,6jA8JUuPCGYjFcgw0AoM5T,33IOhptvC2Qoy2UhjiHXLV,3ee8Jmje8o58CHK66QrVC2,5VuxWXbt7XENQCtE9TzpTv,4H7WNRErSbONkM06blBoGc,6Hgh47WXVKtXN5zGOu0hjI,6xTU6B6nFwKKTSZ9ySXS80,79jX8RM5CgPqDKdGEKNW9K,1rfofaqEpACxVEHIZBJe6W,7iDa6hUg2VgEL1o1HjmfBn,3GCdLUSnKSMJhs4Tj6CV3s,2VdT56BGpdqNHUgOe1j5vc,3Wf2YGdYT8xVdNsQSoRKk9,6IaieqiCVvsNvEt6Y7yOFa,7uzmGiiJyRfuViKKK3lVmR,6n4U3TlzUGhdSFbUUhTvLP,6mAz8D1TmlTuef90dbNIiZ,4QtiVmuA88tPQiCOHZuQ5b,2j2fIJGh4PMdXt9ULI5Tlc,43cFjTTCD9Cni4aSL0sORz,3DoBTwfr8yi2LN08SBpFkN,32lItqlMi4LBhb4k0BaSaC,55S2PQgSMYAhgoTCcGCDfw,7yotKA30dwTKNEGomV9ZsI,6RnkFd8Fqqgk1Uni8RgqCQ,7qiZfU4dY1lWllzX7mPBI3,09IOPhEh1OMe0HD9b36FJk,5Z5nbOXhsSbySVC7WUc6y9",
// 	headers: {
//        'Authorization': 'Bearer ' + 'BQBq5VRtRgp_4sI3emLLue77h4w5cGiY6PJ3_bVtWCMgvfcaOu8cgiEHxko0xG3HAKnWUir2Lc7IFuQtxHcCypQk9znwSmZUfsW3-O46MzJP0NXAkrvYrjk_vFx0HyZC8VwqFzFq-u8jqy8'
//    		},
//    	success: function gotData(data) {
//    		// var songData = JSON.stringify(data);
//    		var songData = data;
//    		console.log (songData);
//    		console.log (songData.audio_features[0].danceability);
//    		// download(songData, 'json.txt', 'text/plain');
//    			setup();
// 			draw (50, songData.audio_features[0].danceability*100);
//    	}
// });

//new JSON script - Track INFO

// var songData;

// function download(content, fileName, contentType) {
//     var a = document.createElement("a");
//     var file = new Blob([content], {type: contentType});
//     a.href = URL.createObjectURL(file);
//     a.download = fileName;
//     a.click();
// }

// $.ajax({
// 	url: "https://api.spotify.com/v1/tracks/?ids=0b9oOr2ZgvyQu88wzixux9,7dt6x5M1jzdTEt8oCbisTK,7ef4DlsgrMEH11cDZd32M6,1cTZMwcBJT0Ka3UJPXOeeN,2XW4DbS6NddZxRPm5rMCeY,5SxkdsY1ufZzoq9iXceLw9,3swc6WTsr7rl9DqQKQA55C,39N9RPD9MRb5WmoLzNzPeA,08bNPGLD8AhKpnnERrAc6G,58q2HKrzhC3ozto2nDdN4z,3V8UKqhEK5zBkBb6d6ub8i,0e7ipj03S05BNilyu5bRzt,2ARqIya5NAuvFVHSN3bL0m,10Igtw8bSDyyFs7KIsKngZ,3fpVWegR6YOS1Yk5HSMYIq,45Egmo7icyopuzJN0oMEdk,4qKcDkK6siZ7Jp1Jb4m0aL,1gm616Plq4ScqNi7TVkZ5N,76cy1WJvNGJTj78UqeA5zr,5CLGzJsGqhCEECcpnFQA8x,63SevszngYpZOwf63o61K4,4hQ6UGyWQIGJmHSo0J88JW,6jA8JUuPCGYjFcgw0AoM5T,33IOhptvC2Qoy2UhjiHXLV,3ee8Jmje8o58CHK66QrVC2,5VuxWXbt7XENQCtE9TzpTv,4H7WNRErSbONkM06blBoGc,6Hgh47WXVKtXN5zGOu0hjI,6xTU6B6nFwKKTSZ9ySXS80,79jX8RM5CgPqDKdGEKNW9K,1rfofaqEpACxVEHIZBJe6W,7iDa6hUg2VgEL1o1HjmfBn,3GCdLUSnKSMJhs4Tj6CV3s,2VdT56BGpdqNHUgOe1j5vc,3Wf2YGdYT8xVdNsQSoRKk9,6IaieqiCVvsNvEt6Y7yOFa,7uzmGiiJyRfuViKKK3lVmR,6n4U3TlzUGhdSFbUUhTvLP,6mAz8D1TmlTuef90dbNIiZ,4QtiVmuA88tPQiCOHZuQ5b,2j2fIJGh4PMdXt9ULI5Tlc,43cFjTTCD9Cni4aSL0sORz,3DoBTwfr8yi2LN08SBpFkN,32lItqlMi4LBhb4k0BaSaC,55S2PQgSMYAhgoTCcGCDfw,7yotKA30dwTKNEGomV9ZsI,6RnkFd8Fqqgk1Uni8RgqCQ,7qiZfU4dY1lWllzX7mPBI3,09IOPhEh1OMe0HD9b36FJk,5Z5nbOXhsSbySVC7WUc6y9",
// 	headers: {
//        'Authorization': 'Bearer ' + 'BQBMW3PDPSABH64NmTuIYOuN9RjaX06BZYs8ooMVkNvrYd9uw97hcZUp01IXQ7Rs5WfLKe6tRNX4fwB-rnJi-V_vjevhfdHQsEJm5B5ycMxk3kY7L57NZUZRp5VEZGw5hzu3wqUBGdZ3A7w'
//    		},
//    	success: function gotData(data) {
//    		var songData = JSON.stringify(data)
//    		download(songData, 'json.txt', 'text/plain');
//    	}
// });


// function setup() {
//   createCanvas(100, 100);
//   background(255, 0, 200);
// }

// function draw () {
// 	rect(50, 50, (songData.audio_features[0].danceability*100), 20); 
// }








