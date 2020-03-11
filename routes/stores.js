var nodes = require('../json/nodeData.json');
exports.view = function (req, res) {
  var startNodes = req.params.startNodes;
  var endNodes = req.params.endNodes;
  var storeType = req.params.storeType;
  var version = req.params.version;
  var showNearby = "no";
  var startGate = startNodes.split("+")[0]
  var endNodesArray = endNodes.split("+")
  var endGate = endNodesArray[endNodesArray.length-1]
  var stores = [];
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i]
    if (node.category === storeType) stores.push(node);
  }
  if(startGate == "Gate49" && endGate == "Gate39") showNearby="yes"
  else showNearby ="no"
  stores.stringify = JSON.stringify(stores);

  console.log(showNearby)
  res.render("stores", {
    'stores': stores,
    'storeType': storeType,
    'startNodes': startNodes,
    'endNodes': endNodes,
    'version': version,
    'showNearby': showNearby
  });
};
