var nodes = require('../json/nodeData.json');
exports.view = function(req, res){
    var startNodes = req.params.startNodes;
    var endNodes = req.params.endNodes;
    var rest = [];
    for(var i = 0; i<nodes.length; i++){
        var node = nodes[i]
        if(node.category === "rest") rest.push(node);
    }
  res.render("rest", {
    'rest': rest,
    'startNodes':startNodes,
    'endNodes':endNodes
  });
};