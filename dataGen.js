var fs = require('fs');
var nodes = require('./rawNodeData.json')
console.log(nodes);
for (var i =0; i<nodes.length;i++){
  var curNode = nodes[i];
  var newEdges = {};
  var curEdges = curNode.edges;
  for (var j = 0; j<curEdges.length; j++){
    var curTarget = curEdges[j];
    
    if(curTarget>=nodes.length){
      console.log("OUT OF RANGE ERROR")
    }
    var targetNode = nodes.find(function(node){return node.id === curTarget});
    var dist = Math.pow(curNode.x - targetNode.x,2) +
        Math.pow(curNode.y - targetNode.y,2);
    newEdges[curTarget] = dist;
  }
  curNode["JSON_edges"] = newEdges;
}
console.log(nodes);
var json = JSON.stringify(nodes,null,2);
fs.writeFile('nodeData.json', json, 'utf8',null);

/*
for (var i = 0; i < edgeData.length; i++) {
    var sourceNode = nodeData[edgeData[i].source];
    var targetNode = nodeData[edgeData[i].target];
    if(sourceNode.edges == undefined){
        sourceNode.edges = [];
    } 
    if(targetNode.edges == undefined){
        targetNode.edges = [];
    }
    sourceNode.edges.push(i);
    targetNode.edges.push(i);
    
    edgeData[i].weight = dist;
}

*/