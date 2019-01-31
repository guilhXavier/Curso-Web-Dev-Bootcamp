var Faker = require('faker');
//commerce -> price, product
for(let i = 1; i <= 10; i++) {
  console.log("Product " + i + ": " + Faker.commerce.product());
  console.log("Price: " + Faker.commerce.price() + "$");
}
