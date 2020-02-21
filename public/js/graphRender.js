
// JSON format
// node: x, y, id
// edge: source, destination
// OR
// node: x, y, id, {nodes which this node has directed edge to}
var width = 5000;
var height = 8000;
var svg = d3.select('svg').attr("viewBox", "0 0 " + width + " " + height);
var g = d3.select('#graph');
var tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .style("background-color","#FFF")
    .text("a simple tooltip");

var maxX = -1;
var minX = Number.MAX_SAFE_INTEGER;
var maxY = -1;
var minY = Number.MAX_SAFE_INTEGER;
console.log(data)
if (JSON.stringify(data) != JSON.stringify({})) {
    renderGraph(data);
    $("#restaurants").attr("href", "/restaurants/" + startNodes + "/" + endNodes);
    $("#rest").attr("href", "/rest/" + startNodes + "/" + endNodes);
    $("#shops").attr("href", "/shops/" + startNodes + "/" + endNodes);
}
else {
    data = {}
}

function renderGraph(data) {

    var edges = g.selectAll(".edge")
        .data(data.edges)
        .enter().append("line")
        .attr("class", "edge")
        .attr('marker-end', 'url(#arrowhead)');
    svg.append('defs').append('marker')
        .attr('id', 'arrowhead')
        .attr('viewBox', '-0 -5 10 10')
        .attr('refX', 13)
        .attr('refY', 0)
        .attr('orient', 'auto')
        .attr('markerWidth', 13)
        .attr('markerHeight', 13)
        .attr('xoverflow', 'visible')
        .append('svg:path')
        .attr('d', 'M 0,-3 L 10 ,0 L 0,3')
        .attr('fill', '#000')
        .style('stroke', 'none');

    var nodes = g.selectAll(".node")
        .data(data.nodes)
        .enter().append("g")        
        .attr("id", function (d) { return d.id });

        
    nodes.append("circle")
        .attr("class", function (d) {
            if (isNaN(d.id * 1)) return "node";
            else return "path";
        })
        .attr("cx", function (d) {
            if (d.x > maxX) maxX = d.x;
            if (d.x < minX) minX = d.x;
            return d.x
        })
        .attr("cy", function (d) {
            if (d.y > maxY) maxY = d.y;
            if (d.y < minY) minY = d.y;
            return d.y
        })
        .on("mouseover", function (d) {
            tooltip.style("visibility", "visible");
            tooltip.text(d.name)
        })
        .on("mousemove", function () {
            tooltip.style("top",
                (d3.event.pageY - 10) + "px").style("left", (d3.event.pageX + 10) + "px");
        })
        .on("mouseout", function () { tooltip.style("visibility", "hidden"); });


    edges.attr("x1", function (d) {

        return nodes.data().find(node => node.id.toString() === d.source.toString()).x
    }).attr("y1", function (d) {
        return nodes.data().find(node => node.id.toString() === d.source.toString()).y
    }).attr("x2", function (d) {
        return nodes.data().find(node => node.id.toString() === d.target.toString()).x
    }).attr("y2", function (d) {
        return nodes.data().find(node => node.id.toString() === d.target.toString()).y
    });

    nodes.append("text")
        .attr("class", "nodeText")
        .attr("dx", 12)
        .attr("dy", ".35em")
        .attr("x" , function(d){return d.x})
        .attr("y" , function(d){return d.y})
        .text(function (d) {
            if(isNaN(d.name))
             return d.name
            else return ""
        });

    g.selectAll(data.startNodesStr).append("svg:image")
        .attr("xlink:href", "/images/pin.svg")
        .attr("width", 100)
        .attr("height", 100)
        .attr("x", function(d){return d.x-50})
        .attr("y", function(d){return d.y-100});
    /*
    g.selectAll(data.endNodesStr).filter(".start").attr("class", "node dest");
    g.selectAll(data.endNodesStr).filter("*:not(.dest)")
        .attr("class", "node end");
        */
    console.log(minX);
    console.log(maxX);
    console.log(minY);
    console.log(maxY);
    var zoom = d3.zoom()
        .scaleExtent([1, 15])
        .on("zoom", zoomed);

    svg.call(zoom);/*
    maxY += 100;
    minY += 100;
    */
    dx = maxX - minX;
    dy = maxY - minY;
    x = (maxX + minX) / 2;
    y = (maxY + minY) / 2;
    scale = Math.max(1, Math.min(8, 0.9 / Math.max(dx / width, dy / height)));
    translate = [width / 2 - scale * x, height / 2 - scale * y];
    svg.transition()
        .duration(1000)
        // .call(zoom.translate(translate).scale(scale).event); // not in d3 v4
        .call(zoom.transform, d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale));

}


function zoomed() {
    g.attr("transform", d3.event.transform);
    tooltip.style("visibility", "hidden");
}