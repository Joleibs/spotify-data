var donut = (function(one){ 
  console.log("Hello");
  var width = 400;
  var height = 400;
  var radius = 200;
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

