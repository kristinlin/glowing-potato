
var svg = document.getElementById("place");
var data = [11.84, 28.16, 32, 12.16, 84.48, 36.8, 37.44, 37.76]; 

var create = function() {
    var d;
    for (d = 0; d < data.length; d++) {
	var circle = document.createElementNS("http://www.w3.org/2000/svg","circle");
	circle.setAttribute("r", 10);
	circle.setAttribute("fill", "red");
	console.log(circle);
	svg.append(circle);
    }
}


var linearScale = d3.scaleLinear()
    .domain([0, 10])
    .range([0, 500]);

var plot = function() {
    var circles = d3.selectAll("circle");
    circles.data(data);
    circles.attr("cx",
		 function(d, i) {
		     return linearScale(i) + 10;
		 });
    circles.attr("cy",
		 function(d) {
		     return d;
		 });
}

create();
plot();
