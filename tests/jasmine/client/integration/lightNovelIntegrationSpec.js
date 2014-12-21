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
});
