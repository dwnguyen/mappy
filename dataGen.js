var fs = require('fs');
var nodes = require('./json/rawNodeData.json')
for (var i = 0; i < nodes.length; i++) {
  var node = nodes[i];
  node.x -= 5;
  node.y += 10;
}
for (var i = 0; i < nodes.length; i++) {
  var curNode = nodes[i];
  var name = "";
  for (var j = 0; j < curNode.id.length; j++) {
    var curChar = curNode.id.charAt(j);
    var nextChar = '';
    name+=curChar;
    if (j < curNode.id.length - 1) {
      nextChar = curNode.id.charAt(j + 1);
      isSymbol = (curChar.toLowerCase() == curChar.toUpperCase());
      nextIsSymbol = (nextChar.toLowerCase() == nextChar.toUpperCase()) 
      alphaToNumber = isNaN(curChar * 1) && !isNaN(nextChar * 1)
      toUpper = (isSymbol || curChar != curChar.toUpperCase())
        && nextChar == nextChar.toUpperCase() && (!nextIsSymbol || nextChar==="&");

      if (alphaToNumber || toUpper) {
        name+=' ';
      }
    }
  }
  curNode.name = name;
  var newEdges = {};
  var curEdges = curNode.edges.toString().split(",");
  if (curEdges[0] != '') {
    for (var j = 0; j < curEdges.length; j++) {
      var curTarget = curEdges[j];

      if (curTarget >= nodes.length) {
        console.log("OUT OF RANGE ERROR")
      }
      var targetNode = nodes.find(function (node) { return node.id.toString() === curTarget });
      var dist = Math.pow(curNode.x - targetNode.x, 2) +
        Math.pow(curNode.y - targetNode.y, 2);
      newEdges[curTarget] = dist;

    }
    curNode["JSON_edges"] = newEdges;
  }

}
var json = JSON.stringify(nodes, null, 2);
fs.writeFile('./json/nodeData.json', json, 'utf8', function(){});

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