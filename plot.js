
var svg = document.getElementById("place");
var data = [11.84, 28.16, 32, 12.16, 84.48, 36.8, 37.44, 37.76];
var planet = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

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


var xlinearScale = d3.scaleLinear()
    .domain([-1, 9])
    .range([0, 900]);
var ylinearScale = d3.scaleLinear()
    .domain([0, 100])
    .range([260, 0]);

var plot = function() {
    var circles = d3.selectAll("circle");
    circles.data(data);
    circles.attr("cx",
		 function(d, i) {
		     return xlinearScale(i);
		 });
    circles.attr("cy",
		 function(d) {
		     return ylinearScale(d);
		 });
}

var axes = function() {
    var x_axis = d3.axisBottom()
	.scale(xlinearScale)
    	.tickFormat(
	    function(d, i){
		return planet[i-1];
	    }
	);
    var y_axis = d3.axisLeft()
	.scale(ylinearScale);
    
    var d3_svg = d3.select("svg");
    d3_svg.append("g")
	.attr("transform", "translate(0, 260)")
	.call(x_axis);
    d3_svg.append("text")
	.attr("transform", "translate(450, 300)")
	.style("text-anchor", "middle")
	.text("Planets");
    d3_svg.append("g")
    	.attr("transform", "translate(50, 0)")
	.call(y_axis);
    d3_svg.append("text")
        .attr("transform", "translate(15, 125)rotate(-90)")
	.style("text-anchor", "middle")
	.text("Acceleration of Gravity");
    
}

create();
plot();
axes();
