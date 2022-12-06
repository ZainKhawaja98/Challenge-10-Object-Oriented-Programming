const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern("Bob", 1, "Bob@gmail.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
   //code goes here
  const testValue = "Intern";
  const e = new Intern("Bob", 1, "Bob@gmail.com", "school");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
   //code goes here
  const testValue = "school";
  const e = new Intern("Bob", 1, "Bob@gmail.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});