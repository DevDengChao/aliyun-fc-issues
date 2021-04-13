test("It should be OK", function () {
    require("./index").handler({},{
        setStatusCode: function (code) {
            expect(code).toBe(200);
        },
        send: function (msg) {
            expect(msg).toBe("OK");
        }
    })
});
