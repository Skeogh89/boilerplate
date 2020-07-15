describe("Calculator", function(){
    describe("Addion Tests", function() {
        it("Should return 42", function() {
            expect(addition(20,22)).toBe(42);
        });
        it("Should return 26", function(){
            expect(addition(7,19)).toBe(26);
        });
        it("Should return a error if we don't supply two numbers", function(){
            spyOn(window, "alert");
            addition("Hicthhikers", "Guide");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
});