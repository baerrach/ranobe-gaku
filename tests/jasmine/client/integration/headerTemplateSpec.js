"use strict";

describe("Header template", function () {
    it("should not show create light novel link to non-admins", function () {
        var div = document.createElement("DIV");
        Blaze.render(Template.header, div);
 
        expect($(div).find("#createLightNovel")[0]).not.toBeDefined();
    });

    it("should show create light novel link to admins", function () {
        var div = document.createElement("DIV");

        spyOn(Blaze._globalHelpers, "isInRole").and.returnValue(true);

        Blaze.render(Template.header, div);

        expect(Blaze._globalHelpers.isInRole).toHaveBeenCalledWith("admin", jasmine.any(Object));
        expect($(div).find("#createLightNovel")[0]).toBeDefined();
    });

});
