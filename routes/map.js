
/*
 * GET home page.
 */

const Graph = require('node-dijkstra');
var nodes = require('../json/nodeData.json');
var gates = [];
for(var i = 0; i<nodes.length; i++){
    var node = nodes[i]
    if(node.category === "gate") gates.push(node);
}

exports.view = function (req, res) {
  var data = {};
  var addedNodes = {};
  var startNodes = req.params.startNodes;
  var endNodes = req.params.endNodes;
  console.log(startNodes);
  console.log(endNodes);
  if (startNodes != undefined && endNodes != undefined) {
    data.nodes = [];
    data.edges = [];
    data.startNodesStr = "";
    data.endNodesStr = "";

    startNodesArray = startNodes.split("+");
    endNodesArray = endNodes.split("+");
    if (startNodesArray.length != endNodesArray.length) {
      console.log("ARRAY MISMATCH");
      console.log(startNodesArray);
      console.log(endNodesArray);
    }
    else {
      const route = new Graph();
      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i]
        console.log(node);
        if (node.JSON_edges != undefined && (!isNaN(node.id) ||
          startNodesArray.includes(node.id) || endNodesArray.includes(node.id))) {
          newJsonEdges = {}
          for (edge in node.JSON_edges) {
            if (!isNaN(edge) || startNodesArray.includes(edge) ||
              endNodesArray.includes(edge)) {
              newJsonEdges[edge] = node.JSON_edges[edge];
            }

          }
          route.addNode(node.id, newJsonEdges);

        }
      }
      for (var i = 0; i < startNodesArray.length; i++) {
        var startNode = startNodesArray[i];
        var endNode = endNodesArray[i];
        data.startNodesStr += "#" + startNode;
        data.endNodesStr += "#" + endNode;
        if (i != startNodesArray.length - 1) {
          data.startNodesStr += ",";
          data.endNodesStr += ",";
        }
        findShortestPath(startNode, endNode, data, route, addedNodes);
      }

    }

  }
  else if(startNodes == "test") {
    testGraph(data);
  }
  data.stringify = JSON.stringify(data);
  res.render('map', {
    'data': data,
    'startNodes': startNodes,
    'endNodes': endNodes,
    'gates': gates
  });
};

function findShortestPath(startNode, endNode, data, route, addedNodes) {

  var path = route.path(startNode, endNode);
  console.log(path)
  if (path == null) {
    data = {};
    return;
  }
  for (var i = 0; i < path.length; i++) {
    var pathNode = nodes.find(function (node) { return node.id === path[i] });
    if (addedNodes[pathNode.id] != 1) {
      data.nodes.push(pathNode);
      console.log("Pushed " + pathNode.id);
      addedNodes[pathNode.id] = 1;
    }

    if (i < path.length - 1) {
      var newEdge = {};
      newEdge.source = pathNode.id;
      newEdge.target = nodes.find(function (node) {
        return node.id === path[i + 1]
      }).id;

      data.edges.push(newEdge)

    }

  }
  console.log(data);
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