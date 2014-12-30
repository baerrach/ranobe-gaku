// https://github.com/Sanjo/meteor-jasmine/wiki/Integration-Tests-for-Iron-Router

(function (Meteor, Tracker, Router) {
    var isRouterReady = false;
    var callbacks = [];

    window.waitForRouter = function (callback) {
        if (isRouterReady) {
            callback();
        } else {
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
