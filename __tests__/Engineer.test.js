const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
   //code goes here
  const github = "github";
  const e = new Engineer("Tim",1,"Tim@gmail.com",github);
  expect(e.github).toBe(github);
});

test("getRole() should return \"Engineer\"", () => {
   //code goes here
  const testValue = "Engineer";
  const e = new Engineer("Tim", 1, "Tim@gmail.com", "github");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
   //code goes here
  const testValue = "github";
  const e = new Engineer("Tim",1,"Tim@gmail.com",testValue);
  expect(e.getGithub()).toBe(testValue);
});