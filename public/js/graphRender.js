
// JSON format
// node: x, y, id
// edge: source, destination
// OR
// node: x, y, id, {nodes which this node has directed edge to}

$("button").click(function(){
    $.post("/test", data)
})
console.log(data)
if (JSON.stringify(data) != JSON.stringify({})) {
    renderGraph(data);
}
else{
    data = {}
}
function renderGraph(data) {
    var svg = d3.select('svg');

    var edges = svg.selectAll(".edge")
        .data(data.edges)
        .enter().append("line")
        .attr("class", "edge");

    var nodes = svg.selectAll(".node")
        .data(data.nodes)
        .enter().append("circle")
        .attr("class", "node")
        .attr("id", function(d) {return d.id})
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
    
    svg.selectAll(data.startNodesStr).attr("class", "node start");
    svg.selectAll(data.endNodesStr).filter(".start").attr("class","node dest");
    svg.selectAll(data.endNodesStr).filter("*:not(.dest)")
        .attr("class","node end");
}


