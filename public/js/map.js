
var startNodeArray = startNodes.split("+")
var startGate = startNodeArray[0]
var endNodeArray = endNodes.split("+")
var endIndex = endNodeArray.length - 1
var endGate = endNodeArray[endIndex]
$("#optnS" + startGate).attr("selected", "selected");
$("#optnE" + endGate).attr("selected", "selected");
$("select").attr("onmousedown","if(this.options.length>6){this.size=4;}")
function reroute() {
    var newStart = $("#start").val();
    var newEnd = $("#end").val();
    startNodeArray[0] = newStart
    var startNodeString = "";
    for (var i = 0; i < startNodeArray.length; i++) {
        startNodeString += startNodeArray[i] + "+";
    }
    startNodeString = startNodeString.substr(0, startNodeString.length - 1);
    console.log(startNodeString)

    endNodeArray[endIndex] = newEnd
    var endNodeString = "";
    for (var i = 0; i < endNodeArray.length; i++) {
        endNodeString += endNodeArray[i] + "+";
    }
    endNodeString = endNodeString.substr(0, endNodeString.length - 1);
    console.log(endNodeString)
    if(version !="") endNodeString+="/"+ version
    var linkStr = "/map" + '/' + startNodeString + '/' + endNodeString;
    window.location.href = linkStr;

}

if(version=="B" && startNodeArray.length > 1 && endNodeArray.length > 1){
    $("#stops").append('<div class="row"><div class="col-xs-10"><h4 class="rerouting-text no-top-m"><strong>Stops</strong></h4></div>')
}
for (var i = 0; i < endNodeArray.length - 1; i++) {
    if (version=="B") {
        $("#stops").append('<div class="row"><div class="col-xs-2 no-right-padding"><img class="img-responsive" src="/images/pinStop.svg"></div>'+
        '<div class="col-xs-10"><h4 class="stop-item-B" id="' + endNodeArray[i] + '">' 
        + endNodeArray[i] + '<a id="delete' + endNodeArray[i] + '-' + i + '"<span style="float: right; padding-left: 5px;">&times;</span></a></h4></div></div>');
    }
    if (version=="A") {
        $("#stops").append('<p class="stop-item" id="' + endNodeArray[i] + '">' + endNodeArray[i] +
        '<a id="delete' + endNodeArray[i] + '-' + i + '"<span style="float: right; padding-left: 5px;">&times;</span></p>');
    }

    $("#delete" + endNodeArray[i] + '-' + i).click(removeStop);
}

if(version=="B" && startNodeArray.length > 2 && endNodeArray.length > 2){
    $("#stops").addClass("scrollable");
}

$("select.startgate").change(reroute);
$("select.endgate").change(reroute);

function removeStop() {
    idArray = this.id.split('-')
    var endNodesIndex = parseInt(idArray[idArray.length - 1], 10);
    var startNodesIndex = endNodesIndex + 1
    console.log(endNodesIndex)
    console.log(startNodesIndex)


    $("#" + endNodeArray[endNodesIndex]).remove();
    endNodeArray.splice(endNodesIndex, 1);

    startNodeArray.splice(startNodesIndex, 1);
    console.log(startNodeArray)

    var startNodeString = "";
    for (var j = 0; j < startNodeArray.length; j++) {
        startNodeString += startNodeArray[j] + "+";
    }
    startNodeString = startNodeString.substr(0, startNodeString.length - 1);


    var endNodeString = "";
    for (var j = 0; j < endNodeArray.length; j++) {
        endNodeString += endNodeArray[j] + "+";
    }
    endNodeString = endNodeString.substr(0, endNodeString.length - 1);
    if(version !="") endNodeString+="/"+ version
    var linkStr = "/map" + '/' + startNodeString + '/' + endNodeString;
    window.location.href = linkStr;
}
if (JSON.stringify(data) != JSON.stringify({})) {
    renderGraph(data);
    nodesStr = startNodes + "/" + endNodes 
    if(version != ""){
        nodesStr+="/"+version
    }
    $("#restaurants").attr("href", "/stores/food/" + nodesStr);
    $("#rest").attr("href", "/stores/rest/" + nodesStr);
    $("#shops").attr("href", "/stores/shop/" + nodesStr);
}
else {
    data = {}
}