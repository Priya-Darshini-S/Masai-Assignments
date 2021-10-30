const {add} = require("./fn");

test("adding 1.2 should give 3", () => {
    expect(add(1,2)).toBe(3);
});