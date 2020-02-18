var nodes = require('../json/nodeData.json');
exports.view = function(req, res){
    var startNodes = req.params.startNodes;
    var endNodes = req.params.endNodes;
    var shops = [];
    for(var i = 0; i<nodes.length; i++){
        var node = nodes[i]
        if(node.category === "shop") shops.push(node);
    }
  res.render("shops", {
    'shops': shops,
    'startNodes':startNodes,
    'endNodes':endNodes
  });
};