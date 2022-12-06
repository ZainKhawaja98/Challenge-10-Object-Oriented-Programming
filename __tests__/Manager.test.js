const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Joe", 1, "Joe@gmail.com", testValue);
  expect(e.office).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
   //code goes here
  const testValue = "Manager";
  const e = new Manager("Joe", 1, "Joe@gmail.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
   //code goes here
  const testValue = "office";
  const e = new Manager("Joe", 1, "Joe@gmail.com", testValue);
  expect(e.getOffice()).toBe(testValue);
});