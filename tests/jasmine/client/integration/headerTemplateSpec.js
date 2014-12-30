/*
Ranobe Gaku by https://github.com/baerrach/ranobe-gaku is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (http://creativecommons.org/licenses/by-nc-sa/4.0/).
*/

"use strict";

describe("Header template (anonymous users)", function () {

    it("should not show create light novel link", function () {
        var div = document.createElement("DIV");
        
        Blaze.render(Template.header, div);
        
        expect($(div).find("#createLightNovel")[0]).not.toBeDefined();
    });
});

describe("Header template (non-admin role)", function () {
    
    beforeEach(function (done) {
        Meteor.loginWithPassword('normal@example.com', 'normal42', done);
    });
    
    afterEach(function (done) {
        Meteor.logout(done);
    });

    it("should not show create light novel link", function () {
        var div = document.createElement("DIV");

        Blaze.render(Template.header, div);

        expect($(div).find("#createLightNovel")[0]).not.toBeDefined();
    });
});

describe("Header template (admin role)", function () {
    
    beforeEach(function (done) {
        Meteor.loginWithPassword('admin@example.com', 'admin42', done);
    });
    
    afterEach(function (done) {
        Meteor.logout(done);
    });

    it("should show create light novel link", function () {
        var div = document.createElement("DIV");

        Blaze.render(Template.header, div);

        expect($(div).find("#createLightNovel")[0]).toBeDefined();
    });

});
