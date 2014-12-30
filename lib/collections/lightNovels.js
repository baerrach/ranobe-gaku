/*
Ranobe Gaku by https://github.com/baerrach/ranobe-gaku is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (http://creativecommons.org/licenses/by-nc-sa/4.0/).
*/

"use strict";

Collections.LightNovels = new Mongo.Collection("lightNovels");

Collections.LightNovels.allow({
    insert: function (userId, doc) {
        return Roles.userIsInRole(userId, "admin");
    }
});              

Models.LightNovel = function (id, name) {
    this._id = id;
    this._name = name; // mandatory for saving.
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
        if (!this.name) {
            throw new Meteor.Error("Name must be defined")
        }
        
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

