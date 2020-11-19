const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("Can set degree via constructor", () => {
  const testValue = "degree";
  const e = new Intern("Foo", 1, "test@test.com", "UCLA", testValue);
  expect(e.degree).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "UCLA", "degree");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});

test("Can get degree via getDegree()", () => {
  const testValue = "degree";
  const e = new Intern("Foo", 1, "test@test.com", "UCLS", testValue);
  expect(e.getDegree()).toBe(testValue);
});
