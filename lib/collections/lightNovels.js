"use strict";

Collections.LightNovels = new Meteor.Collection("lightNovels");

Collections.LightNovels.allow({
    insert: function (userId, doc) {
        return Roles.userIsInRole(userId, "admin");
    }
});              

Models.LightNovel = function (id, name) {
    this._id = id;
    this._name = name;
};

Models.LightNovel.prototype = {
    get id() {
        // readonly
        return this._id;
    },
    get name() {
        return this._name;
    },
    set name(value) {
        this._name = value;
    },

    save: function(callback) {
        var that = this;
        var doc = {name: this.name};

        Collections.LightNovels.insert(doc, function (error, result) {
            that._id = result;
            if (callback != null) {
                callback.call(that, error, result);
            }
        });
    }
};

