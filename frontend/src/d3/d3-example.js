import * as d3 from 'd3'

var node = document.createElement('div')

var width = 600,
  height = 400,
  radius = Math.min(width, height) / 2

var color = d3
  .scaleOrdinal()
  .range([
    '#98abc5',
    '#8a89a6',
    '#7b6888',
    '#6b486b',
    '#a05d56',
    '#d0743c',
    '#ff8c00',
  ])

var arc = d3
  .arc()
  .outerRadius(radius - 20)
  .innerRadius(radius - 80)

var pie = d3
  .pie()
  .sort(null)
  .value(function (d) {
    return d.population
  })

var svg = d3
  .select(node)
  .append('svg')
  .attr('width', width)
  .attr('height', height)
  .append('g')
  .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')

d3.csvParse('age,population<5,27046595-13,449989014-17,215998118-24,385378825-44,1410654345-64,8819342≥65,612463', type, function (error, data) {
  if (error) throw error

  console.log(data)
  console.log(pie(data))

  var g = svg
    .selectAll('.arc')
    .data(pie(data))
    .enter()
    .append('g')
    .attr('class', 'arc')

  g.append('path')
    .attr('d', arc)
    .style('fill', function (d) {
      return color(d.data.age)
    })
})

function type(d) {
  d.population = +d.population
  return d
}

export default node
