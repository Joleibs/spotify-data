//OG function

function donutChart () {
  var donut = (function(one){ 
  console.log("Hello");
  var width = 200;
  var height = 200;
  var radius = 100;
  var greyColor = '#e8e8e8';
  var dataColor = '#1dafd3';
  var red
  var colors = d3.scaleOrdinal([dataColor, greyColor]);
  var piedata = [{name: "one", value: 80}, {name: "two", value: 20}];
  var arc = d3.arc().innerRadius(radius - 50).outerRadius(radius);
  var donutChart = d3.select('#danceDonut').append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + (width - radius) + ',' + (height - radius) + ')');

  var pie = d3.pie()
    .sort(null)
    .value(function(piedata) { return piedata.value; });
    
  var arc_g = d3.select('svg g').selectAll('arc').data(pie(piedata))
    .enter().append('g')
    .attr('class', 'slice');

  arc_g.append('path')
    .attr("d",arc)
    .attr('fill', function(d, range) {
     return colors(range);
  })
 })();
};

donutChart ('#acousticDonut', songData.audio_features[0].acousticness, "#1dafd3"); 
          donutChart ('#energyDonut', songData.audio_features[0].energy, "#1dafd3"); 
          donutChart ('#speechDonut', songData.audio_features[0].speechiness, "#1dafd3"); 
          donutChart ('#liveDonut', songData.audio_features[0].liveness, "#1dafd3"); 
          donutChart ('#valenceDonut', songData.audio_features[0].valence, "#1dafd3"); 
          donutChart ('#loudDonut', songData.audio_features[0].loudness, "#1dafd3"); 
          donutChart ('#tempoDonut', songData.audio_features[0].tempo, "#1dafd3"); 