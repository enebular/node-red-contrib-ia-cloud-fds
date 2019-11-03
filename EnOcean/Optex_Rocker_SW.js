module.exports = function(RED) {
    "use strict";
    var settings = RED.settings;

    // collect-data-object config node function definition
    function Optex_Rocker_SW(config) {
        RED.nodes.createNode(this,config);
        this.sensor_id = config.sensor_id;
        //this.dataName0 = config.dataName0;
        //this.unitType0 = config.unitType0;

        var node = this;
        var confObj = config.configObject;
        this.dItems = {};
        if (confObj) {
          try { this.dItems = JSON.parse(confObj); }
          catch(e) {
            // nodeのエラーを通知してして終了
            node.error("runtime:jsonerror", confObj);
          }
        } else {
            // nodeのエラーを通知してして終了
            node.error("runtime:jsonerror", confObj);
        }
        this.on("input",function(msg) {});
        this.on("close",function() {});
    }
    RED.nodes.registerType("Optex_Rocker_SW",Optex_Rocker_SW);
}