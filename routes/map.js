
/*
 * GET home page.
 */

const Graph = require('node-dijkstra');
var nodes = require('../json/nodeData.json');
exports.view = function (req, res) {
  var data = {};
  var addedNodes = {};
  var startNodes = req.params.startNodes;
  var endNodes = req.params.endNodes;
  console.log(startNodes);
  console.log(endNodes);
  if (startNodes == "test") {
    testGraph(data);
  }
  if (startNodes != undefined && endNodes != undefined) {
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
        route.addNode('node' + i, nodes[i].JSON_edges);
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
        findShortestPath(startNode, endNode, data,route, addedNodes);
      }

    }

  }

  data.stringify = JSON.stringify(data);
  res.render('map', {
    'data': data,
    'startNodes': startNodes,
    'endNodes': endNodes
  });
};

function findShortestPath(startNode, endNode, data, route,addedNodes) {
  data.nodes = [];
  data.edges = [];

  var path = route.path(startNode, endNode);
  if (path == null) {
    data = {};
    return;
  }
  for (var i = 0; i < path.length; i++) {
    var pathNode = nodes.find(function (node) { return node.id === path[i] });
    if(addedNodes[pathNode.id] != 1){
      data.nodes.push(pathNode);
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