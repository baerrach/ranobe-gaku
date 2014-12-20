"use strict";

describe("Light Novel", function () {
    it("should be created with name", function () {
        spyOn(LightNovels, "insert").and.callFake(function(doc, callback) {
            // fake async return of mongodb id
            callback(null, "1");
        });

        var lightNovel = new LightNovel(null, "Accel World");

        expect(lightNovel.name).toBe("Accel World");

        lightNovel.save();

        expect(lightNove.id).toEqual("1");
        expect(LightNovels.insert).toHaveBeenCalledWith({name: "Accel World"}, jasmine.any(Function));
    });
});
