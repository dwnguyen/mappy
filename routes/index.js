var nodes = require('../json/nodeData.json');

exports.view = function(req, res){
    var gates = [];
    for(var i = 0; i<nodes.length; i++){
        var node = nodes[i]
        if(node.category === "gate") gates.push(node);
    }
    
    console.log(gates)
    res.render('index', {
        'gates': gates
    });
}