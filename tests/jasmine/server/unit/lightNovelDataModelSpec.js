"use strict";

describe("Light Novel", function () {
    it("should be created with name", function () {
        spyOn(Collections.LightNovels, "insert").and.callFake(function(doc, callback) {
            // fake async return of mongodb id
            callback(null, "1");
        });

        var lightNovel = new Models.LightNovel(null, "Accel World");

        expect(lightNovel.name).toBe("Accel World");

        lightNovel.save();

        expect(lightNovel.id).toEqual("1");
        expect(Collections.LightNovels.insert).toHaveBeenCalledWith({name: "Accel World"}, jasmine.any(Function));
    });

    it("should not be saved when missing mandatory fields", function() {
        var lightNovel = new Models.LightNovel(null);
        expect(function () { lightNovel.save(); }).toThrow();
    });
});
