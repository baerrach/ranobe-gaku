// https://github.com/Sanjo/meteor-jasmine/wiki/Integration-Tests-for-Iron-Router

(function (Meteor, Tracker, Router) {
    var isRouterReady = false;
    var callbacks = [];

    console.log("Testing _wait_for...");
    
    window.waitForRouter = function (callback) {
        console.log("waitForRouter...");
        if (isRouterReady) {
            console.log("waitForRouter - isRouterReady");
            callback();
        } else {
            console.log("waitForRouter - not ready pushing callbacks.");
            callbacks.push(callback);
        }
    };

    Router.onAfterAction(function (a, b, c) {
        if (!isRouterReady && this.ready()) {
            Tracker.afterFlush(function () {
                isRouterReady = true;
                callbacks.forEach(function (callback) {
                    callback();
                });
                callbacks = []
            })
        }
    });

    Router.onRerun(function () {
        isRouterReady = false;
        this.next();
    });

    Router.onStop(function () {
        isRouterReady = false;
        if (this.next) {
            this.next();
        }
    });
})(Meteor, Tracker, Router);
