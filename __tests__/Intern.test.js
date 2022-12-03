const Intern = Require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern("Bob", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
   //code goes here
  const testValue = "Intern";
  const e = new Intern("Bob", 1, "test@test.com", "school");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
   //code goes here
  const testValue = "school";
  const e = new Intern("Bob", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});