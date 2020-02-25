var nodes = require('../json/nodeData.json');
exports.view = function(req, res){
    var startNodes = req.params.startNodes;
    var endNodes = req.params.endNodes;
    var storeType = req.params.storeType;
    var stores = [];
    for(var i = 0; i<nodes.length; i++){
        var node = nodes[i]
        if(node.category === storeType) stores.push(node);
    }
  res.render("stores", {
    'stores': stores,
    'storeType': storeType,
    'startNodes':startNodes,
    'endNodes':endNodes
  });
};