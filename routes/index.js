
/*
 * GET home page.
 */

const Graph = require('node-dijkstra');
var nodes = require('../nodeData.json');
exports.view = function (req, res) {
  var data = {};
  data.nodes =[];
  data.edges =[];
  var startNodes = req.params.startNodes;
  var endNodes = req.params.endNodes;
  console.log(startNodes);
  console.log(endNodes);
  if (startNodes == "test") {
    testGraph(data);
  }
  if (startNodes != undefined && endNodes != undefined) {
    startNodesArray = startNodes.split("+");
    endNodesArray = endNodes.split("+");
    if(startNodesArray.length != endNodesArray.length){
      console.log("ARRAY MISMATCH");
      console.log(startNodesArray);
      console.log(endNodesArray);
    }
    else{
      for (var i = 0; i<startNodesArray.length; i++){
        var startNode = startNodesArray[i];
        var endNode = endNodesArray[i];
        findShortestPath(startNode, endNode, data);
      }

    }

  }
  
  data.stringify = JSON.stringify(data);
  res.render('index', {
    'data': data,
  });
};

function findShortestPath(startNode, endNode, data) {
  const route = new Graph();

  for (var i = 0; i < nodes.length; i++) {
    route.addNode('node' + i, nodes[i].JSON_edges);
  }
  var path = route.path(startNode, endNode);
  if (path == null) {
    data = {};
    return;
  }
  for (var i = 0; i < path.length; i++) {
    var pathNode = nodes.find(function (node) { return node.id === path[i] });
    data.nodes.push(pathNode);
    if (i < path.length - 1) {
      var newEdge = {};
      newEdge.source = pathNode.id;
      newEdge.target = nodes.find(function (node) {
        return node.id === path[i + 1]}).id;
      
      data.edges.push(newEdge)

    }

  }
  return data;

}

function testGraph(data) {
  data.nodes = nodes;
  newEdges = [];
  for (i in nodes) {
    node = nodes[i]
    for (targetID in node.JSON_edges) {
      var newEdge = {};
      newEdge.source = node.id;
      newEdge.target = targetID;
      newEdges.push(newEdge);
    }
  }
  data.edges = newEdges;
}