/* donut chart */
var donut = (function(one){ 
  console.log("Hello");
  var width = 400;
  var height = 400;
  var radius = 200;
  var greyColor = '#e8e8e8';
  var dataColor = '#1dafd3';
  var colors = d3.scaleOrdinal([greyColor, dataColor]);
  
  var piedata = [{name: "one", value: 50}, {name: "two", value: 30}];

  var arc = d3.arc().innerRadius(radius - 100).outerRadius(radius);

  var donutChart = d3.select('#danceDonut').append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + (width - radius) + ',' + (height - radius) + ')');
  
  var pie = d3.pie()
    .sort(null)
    .value(function(piedata) { return piedata.value; });
    
  d3.select('svg g').selectAll('arc').data(pie(piedata))
    .enter().append('g')
    .attr('class', 'slice');
    var slices1 = d3.selectAll('g.slice')
    .append('path')
    .attr('fill', function(d, range) {
    return colors(range);
     })
 
      // .attr('d', arc)
})();
