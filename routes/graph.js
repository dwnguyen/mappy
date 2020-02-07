
/*
 * GET home page.
 */

const Graph = require('node-dijkstra');
var nodes = require('../nodeData.json');

exports.renderGraph = function (req, res) {
  var data ={};
  var startNode = req.params.startNode
  var endNode = req.params.endNode
  console.log(startNode)
  console.log(endNode)
  if(startNode != "" && endNode !=""){
    findShortestPath(startNode, endNode,data); 
  }
  if(startNode == "test"){
    testGraph(data);
  }
  data.stringify = JSON.stringify(data);
  res.render('graph', {
    'data': data,
  });

};

function findShortestPath(startNode, endNode,data){
  const route = new Graph();

  for (var i = 0; i < nodes.length; i++) {
    route.addNode('node' + i, nodes[i].JSON_edges);
  }
  var pathNodes = [];
  var edges = [];
  var path = route.path(startNode, endNode);
  console.log(path);
  if(path == null){
    data = {};
    return;
  }
  for (var i = 0; i < path.length; i++) {
    var pathNode = nodes.find(node => node.id === path[i]);
    pathNodes.push(pathNode);
    if(i<path.length-1){
      var newEdge = {};
      newEdge.source = pathNode.id;
      newEdge.target = nodes.find(node => node.id === path[i+1]).id;
      edges.push(newEdge)

    }

  }
  data.nodes = pathNodes;
  data.edges = edges;
  return data;

}

function testGraph(data){
  data.nodes = nodes;
  newEdges = [];
  for(i in nodes){
    node = nodes[i]
    for(targetID in node.JSON_edges){
      var newEdge = {};
      console.log(node.id);
      newEdge.source = node.id;
      newEdge.target = targetID;
      newEdges.push(newEdge);
    }
  }
  data.edges = newEdges;
}