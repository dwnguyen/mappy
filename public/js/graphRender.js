
// JSON format
// node: x, y, id
// edge: source, destination
// OR
// node: x, y, id, {nodes which this node has directed edge to}

var svg = d3.select('svg');
var g = d3.select('#graph');
console.log(data)
if (JSON.stringify(data) != JSON.stringify({})) {
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
        .attr("class", "node")
        .attr("id", function (d) { return d.id })
        .attr("cx", function (d) { return d.x })
        .attr("cy", function (d) { return d.y });

    edges.attr("x1", function (d) {
        return nodes.data().find(node => node.id === d.source).x
    }).attr("y1", function (d) {
        return nodes.data().find(node => node.id === d.source).y
    }).attr("x2", function (d) {
        return nodes.data().find(node => node.id === d.target).x
    }).attr("y2", function (d) {
        return nodes.data().find(node => node.id === d.target).y
    });

    g.selectAll(data.startNodesStr).attr("class", "node start");
    g.selectAll(data.endNodesStr).filter(".start").attr("class", "node dest");
    g.selectAll(data.endNodesStr).filter("*:not(.dest)")
        .attr("class", "node end");
    svg.call(d3.zoom()
        .extent([[0, 0], [5000, 2500]])
        .scaleExtent([1, 8])
        .on("zoom", zoomed));


}


function zoomed() {
    g.attr("transform", d3.event.transform);
}