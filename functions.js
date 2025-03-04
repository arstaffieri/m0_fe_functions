// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.
function printGreeting(){
  console.log("Hello, World!");
  console.log("Hello, World!");
  console.log("Hello, World!")
}
printGreeting();
// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.
function person(name){
  console.log(`It's time to go to sleep, ${name}!`)
}
person("Angie")

// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company,
//and the numbers will represent the minimum and maximum of a pay range for a posted job.
//The function should print out a sentence that includes the name of the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).
function companyInfo(one, two, three){
  var sum = one + two + three;
  console.log(sum);
}
companyInfo(`The Tech Group salary range is `, 1000 + 2000);

// 4: Write a function that satifies the following interaction pattern:
function checkStock(num, word){
  if (num === 4) {console.log(`${word} is stocked`)};
  if (num <= 3 || num >= 1){console.log(`${word} - running LOW`)};
  if (num === 0) {console.log(`${word} - OUT of stock!`)};
}
checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"
