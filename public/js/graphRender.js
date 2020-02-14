
// JSON format
// node: x, y, id
// edge: source, destination
// OR
// node: x, y, id, {nodes which this node has directed edge to}

var svg = d3.select('svg');
var g = d3.select('#graph');
svg.call(d3.zoom()
    .extent([[0, 0], [1000, 1000]])
    .scaleExtent([1, 8])
    .on("zoom", zoomed));
var tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .text("a simple tooltip");
console.log(data)
if (JSON.stringify(data) != JSON.stringify({})) {
    console.log(JSON.stringify(data))
    renderGraph(data);
    $("#restaurants").attr("href", "/restaurants/" + startNodes + "/" + endNodes);
}
else {
    data = {}
}
function renderGraph(data) {
    var edges = g.selectAll(".edge")
        .data(data.edges)
        .enter().append("line")
        .attr("class", "edge");

    var nodes = g.selectAll(".node")
        .data(data.nodes)
        .enter().append("circle")
        .attr("class", function (d) {
            if (isNaN(d.id * 1)) return "node";
            else return "path";
        })
        .attr("id", function (d) { return d.id })
        .attr("cx", function (d) { return d.x })
        .attr("cy", function (d) { return d.y })
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

    g.selectAll(data.startNodesStr).attr("class", "node start");
    g.selectAll(data.endNodesStr).filter(".start").attr("class", "node dest");
    g.selectAll(data.endNodesStr).filter("*:not(.dest)")
        .attr("class", "node end");




}


function zoomed() {
    g.attr("transform", d3.event.transform);
    tooltip.style("visibility","hidden");
}