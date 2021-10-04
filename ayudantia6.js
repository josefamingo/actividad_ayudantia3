/*
d3_02.js -- Enter, update, exit
*/

var dataset = [2, 7, 5, 4, 6, 8, 11, 3, 1, 9, 5, 4, 3];

var container = d3.select('body')
.append('svg')
.attr('width', 800)
.attr('height', 500);

function Color(dato){
    if (dato <= 5){
      return 'pink';
    }
    else if (dato <=10){
      return 'yellow';
    }
    else{
      return 'purple';
    }
  };

  var escala = d3.scaleLinear()
  .domain([0, d3.max(dataset)])
  .range([0, 500]);

container.selectAll('rect')
.data(dataset)
.enter()
.append('rect')
//.attr('height', function(dato){return dato*35;})
.attr('height', escala)
.attr('width', 25)
.attr('x', function(dato, index){return index*40;})
.attr('fill',Color)
.attr('y', function(dato, index){return  HEIGHT - escala(dato); });

