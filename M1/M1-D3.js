/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can ask for tutor's help
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Create and array with the first 5 positive numbers
*/

/* WRITE YOUR CODE HERE */
let u = [];

for (i = 1; i <= 5; i++) {
    u.push(i)
}

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

/* WRITE YOUR CODE HERE */
let me = {
    name:"Anri",
    surname:"Bardhi",
    email:"anribardhi25@gmail.com",
    age:"25"
}

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/

/* WRITE YOUR CODE HERE */
me.dlic = true;

/* EXERCISE 4
Remove from the previously created object the age
*/

/* WRITE YOUR CODE HERE */
delete me.age;

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address
*/

/* WRITE YOUR CODE HERE */

let me2 = {
    name:"Anri",
    surname:"Bardhi",
    email:"anrib@live.com",
    age:"25"
}

console.log(me.email !== me2.email);

/* EXERCISE 6
You are working for an eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/

/* WRITE YOUR CODE HERE */
let totalShoppingCart;
const shipping = totalShoppingCart > 50 ? 0 : 10; 
let total = totalShoppingCart + shipping;

/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/

/* WRITE YOUR CODE HERE */
let Gtotal = 0.8 * total;

/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/

/* WRITE YOUR CODE HERE */
let licP = ['AA 592 BI','AA 593 BI','AA 594 BI','AA 595 BI','AA 596 BI','AA 597 BI','AA 598 BI']

let car = {
    brand : 'Mercedes',
    model : 'S63 AMG',
    licensePlate : 'AA 591 BI'
}

let car2 = {};
let car3 = {};
let car4 = {};
let car5 = {};

Object.assign(car2,car);
Object.assign(car3,car);
Object.assign(car4,car);
Object.assign(car5,car);

car2.licensePlate = licP[0];
car3.licensePlate = licP[1];
car4.licensePlate = licP[2];
car5.licensePlate = licP[3];

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise
*/

/* WRITE YOUR CODE HERE */
let carsForRent = [car,car2,car3,car4,car5];

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR CODE HERE */
let carsForRent1 = carsForRent.slice(1, carsForRent.length - 1);


/* EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/

/* WRITE YOUR CODE HERE */
//console.log(carsForRent[]);

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/

/* WRITE YOUR CODE HERE */

/* 3 new cars */
let car6 = {};
let car7 = {};
let car8 = {};

/* cloning them from the initial car */
Object.assign(car6,car);
Object.assign(car7,car);
Object.assign(car8,car);

/* assiging them respective license plates */
car6.licensePlate = licP[4];
car7.licensePlate = licP[5];
car8.licensePlate = licP[6];

let carsForSale = [car6, car7, car8];

let totalCars = carsForRent.length + carsForSale.length;

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array
*/

/* WRITE YOUR CODE HERE */
console.log('The first car is ' + carsForSale[0].brand + ' model ' + carsForSale[0].model + ' with license plate ' + carsForSale[0].licensePlate);
console.log('The second car is ' + carsForSale[1].brand + ' model ' + carsForSale[1].model + ' with license plate ' + carsForSale[2].licensePlate);
console.log('The third car is ' + carsForSale[2].brand + ' model ' + carsForSale[2].model + ' with license plate ' + carsForSale[2].licensePlate);

/* WHEN YOU ARE FINISHED
Send the code on Discord via a message to your tutor! In the next days we'll also learn how to use GIT 
*/
