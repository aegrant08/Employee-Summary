const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("Can set years at company via constructor argument", () => {
  const testValue = "yearsAtCompany";
  const e = new Manager("Foo", 1, "test@test.com", 100, testValue);
  expect(e.years).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "test@test.com", 100, "yearsAtCompany");
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});

test("Can get years at company via getYears()", () => {
  const testValue = "yearsAtCompany";
  const e = new Manager("Foo", 1, "test@test.com", 100, testValue);
  expect(e.getYears()).toBe(testValue);
});
