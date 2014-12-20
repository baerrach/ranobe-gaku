LightNovels = new Meteor.Collection("lightNovels");

LightNovel = function (id, name) {
    this._id = id;
    this._name = name;
};

LightNovel.prototype = {
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

    save: function() {
        var that = this;
        var doc = {name: this.name};

        LightNovels.insert(doc, function (error, result) {
            that._id = result;
        });
    }
};
