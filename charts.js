/* donut chart */

var donut = (function(one){ 

  var width = 400;
  var height = 400;
  var radius = 200;
  var greyColor = '#e8e8e8';
  var dataColor = '#1dafd3';

  var colors = d3.scale.ordinal().range([greyColor, dataColor]);

    var piedata = [{

      label: "One",

      value: 50
 
    }, {
 
      label: "Two",

      value: 30
 
    }]

  var arc = d3.svg.arc().innerRadius(radius - 100).outerRadius(radius);

  var donutChart = d3.select('#donut').append('svg')
 
    .attr('width', width)
 
    .attr('height', height)
 
    .append('g')
 
    .attr('transform', 'translate(' + (width - radius) + ',' + (height - radius) + ')')
 
    .selectAll('path').data(pie(piedata))
 
    .enter().append('g')
 
    .attr('class', 'slice')
    var slices1 = d3.selectAll('g.slice')
 
    .append('path')
 
    .attr('fill', function(d, range) {
 
    return colors(range);
 
    })
 
      .attr('d', arc)
}