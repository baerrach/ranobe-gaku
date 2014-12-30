/*
Ranobe Gaku by https://github.com/baerrach/ranobe-gaku is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (http://creativecommons.org/licenses/by-nc-sa/4.0/).
*/

"use strict";

describe("Light Novel", function () {
    it("can only be created by registered users", function (done) {
        Meteor.loginWithPassword("admin@example.com", "admin42", function (err) {
            expect(err).toBeUndefined();

            var lightNovel = new Models.LightNovel(null, "Accel World");

            var id = lightNovel.save(function (error, result) {
                expect(error).toBeUndefined();

                Collections.LightNovels.remove(id);

                Meteor.logout(function () {
                    done();
                });
            });
        });
    });

    it("can not be created by non admins", function (done) {
        Meteor.loginWithPassword("normal@example.com", "normal42", function (err) {
            expect(err).toBeUndefined();

            var lightNovel = new Models.LightNovel(null, "Accel World");

            var id = lightNovel.save(function (error, result) {
                expect(error.error).toBe(403);

                Meteor.logout(function () {
                    done();
                });
            });
        });
    });
});
