"use strict";

module.exports = function(RED) {

    function signalWatcherAE(config) {

        RED.nodes.createNode(this,config);

        var node = this;

        this.on("changeListener",function(objectKeys) {

        });

        this.on("input",function(msg) {

        });
        this.on("close",function() {

        });
    }

    RED.nodes.registerType("signal-watcher-AE",signalWatcherAE);

}
