const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("Can set years at company via constructor", () => {
  const testValue = "years";
  const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser", testValue);
  expect(e.years).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser", "years");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});

test("Can get years at company via getYears()", () => {
  const testValue = "years";
  const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser", testValue);
  expect(e.getYears()).toBe(testValue);
});
