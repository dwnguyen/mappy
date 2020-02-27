var nodes = require('../json/nodeData.json');
/*
exports.view = function (req, res) {

    res.render('index', {
        'gates': getGates(nodes)
    });
}
*/
exports.viewA = function (req, res) {

    res.render('index', {
        'gates': getGates(nodes),
        'version': 'A'
    });
}
exports.viewB = function (req, res) {

    res.render('index', {
        'gates': getGates(nodes),
        'version': 'B'
    });
}

function getGates(nodes) {
    var gates = [];
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i]
        if (node.category === "gate") gates.push(node);
    }
    return gates
}