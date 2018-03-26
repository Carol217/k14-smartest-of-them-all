/*
Team NgoPancakesAllowed
Samantha Ngo and Carol Pan
SoftDev2 pd7
K14 - You Are Smarter Than the President*
2018-03-26
 */

// [sector, billions spent, bar length]
//information for the year 2017
var revenue2017 = [["Social Security, Unemployment, and Labor", 1330, 36], //36
		   ["Medicare and Health", 1030, 28], //28
		   ["National Defense", 543, 15], //15
		   ["Net Interest", 266, 7], //7
		   ["Vterans Benefits and Services", 159, 4], //4
		   ["Transportation", 88.2, 2], //2
		   ["Education, Training, Employment, and Social Services", 94.6, 3], //3
		   ["Administration of Justice", 56.2, 2], //2
		   ["Natural Resources and Environment", 38.3, 1], //1
		   ["General Science, Space, and Technology", 27.7, 1], //1
		   ["Other", 63.1, 2]]; //2
//information for the year 2009
var revenue2009 = [["Social Security, Unemployment, and Labor", 1220, 34], //34
		   ["Medicare and Health", 764, 21], //21
		   ["National Defense", 661, 19], //19
		   ["Net Interest", 187, 5], //5
		   ["Veteran Benefits and Services", 95.4, 2], //2
		   ["Transportation", 84.3, 2], //2
		   ["Education, Training, Employment, and Social Services", 79.7, 2], //2
		   ["Administration of Justice", 52.6, 1],
		   ["Natural Resources and Environment", 35.6, 1],
		   ["General Science, Space, and Technology", 28.4, 1],
		   ["Other", 368, 10]];

// Function for scaling bars
// Given: number from 0 to 34 --> returns n/34 * 1200
var myScale = d3.scale.linear().domain([0, 34]).range([0, 1200]);

var drawChart = function(){
    // Draw labels for chart 1
    var chart1 = d3.select("#FY2017");
    var barEnter1 = chart1.selectAll("div")
	.data(revenue2017)
	.enter().append("div")
    barEnter1.text(function(d) { return d[0] + ": " + d[1] + " B"; });

    // Draw labels for chart 2
    var chart2 = d3.select("#FY2009");
    var barEnter2 = chart2.selectAll("div")
	.data(revenue2009)
	.enter().append("div")
    barEnter2.text(function(d) { return d[0] + ": " + d[1] + " B"; });

    // 5s transition:
    barEnter1.transition().duration(5000).style("width", function(d) {
	return myScale(d[2]) + "px"; });
    barEnter2.transition().duration(5000).style("width", function(d) {
	return myScale(d[2]) + "px"; });
}

drawChart();

