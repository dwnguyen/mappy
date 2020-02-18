var nodes = require('../json/nodeData.json');
exports.view = function(req, res){
    var startNodes = req.params.startNodes;
    var endNodes = req.params.endNodes;
    var restaurants = [];
    for(var i = 0; i<nodes.length; i++){
        var node = nodes[i]
        if(node.category === "food") restaurants.push(node);
    }
  res.render("restaurants", {
    'restaurants': restaurants,
    'startNodes':startNodes,
    'endNodes':endNodes
  });
};