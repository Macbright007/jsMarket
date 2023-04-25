// classes

// function add(num1=8, num2=10){
//     return num1 + num2
// }
// res = add()
// console.log(add())

// const add = () => {

// }

// console.log(myOwnCar.model)
// class Car {
//   constructor(name, year, model, color) {
//     this.name = name;
//     this.year = year;
//     this.model = model;
//     this.color = color;
//   }
// }

// // instance of the car class
// myOwnCar = new Car("Ford", 2014, "SUV", "red");
// myOwnCar2 = new Car("Toyota Camery", 2020, "SUDAN", "black");
// myOwnCar3 = new Car("Cooper", 2022, "COOPER", "ash");

// console.log(myOwnCar.model)

// class Student {
//   constructor(student_name, student_lastname, student_age, student_address){
//     this.student_name = student_name;
//     this.student_lastname = student_lastname;
//     this.student_address = student_address;
//     this.student_age = student_age;
//   }

//   // methods creation
//   getNewAge(){
//     let former_age = 5;
//     return former_age * 5;
//   }
//   getRealAge(){
//     return this.student_age * 2
//   }

//   getNameChange(){
//     return this.student_name.toUpperCase();
//   }

//   getStudentInfo(){
//     return `my name is ${this.student_name} ${this.student_lastname},
//     I stay at ${this.student_address}. I am ${this.student_age}years of Age`
//   }

//   getConcat(){
//     return this.student_name.split("").concat(this.student_lastname.split("")).join("-")
//   }
// }

//  First_student = new Student("Matthew", "Okonkwo", 24, "12, Ikorodu road, Agric Bus stop")
// console.log(First_student.getConcat())
// console.log(First_student.getRealAge())

// color = "red"
// switch (color) {
//   case "blue":
//     console.log("this is blue color")
//     break;
//   case "green":
//     console.log("this is green color")
//     break;
//   case "black":
//     console.log("this is black")
//     break;
//   default:
//     console.log("there is no value this is equal to the expression")
//     break;
// }

// inheritance

// class Human{
//   constructor(fname, age){
//     this.fname = fname;
//     this.age = age;
//   }
//   showName(){
//     return `i am ${this.fname}`
//   }
// }

// inherited class
// class Person extends Human {
//   constructor(fname, lname, age){
//     super(fname, age);
//     this.lname = lname;
//   }

//   changeName(){
//     return `my name is ${this.fname} ${this.lname}`
//   }
// }

// const User1 = new Person("David", "Bolu", 34)

// console.log(User1, user2)

// class Math{
//   constructor(base, height) {
//     this.base = base;
//     this.height = height;
//   }
// }

// class Calculation extends Math{
//   constructor(base, height){
//     super(base, height)
//   }

//   getSolution(){
//     return this.base * this.height * 1/2;
//   }
// }

// project 1

const container = document.getElementById("wrapper");


const dbFiles = [
  {
    id: 1,
    product_name: "nike",
    product_price: 400,
    product_img:
      "https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?cs=srgb&dl=pexels-lukas-292999.jpg&fm=jpg",
    availability: true,
  },
  {
    id: 1,
    product_name: "nike2",
    product_price: 300,
    product_img: "https://image.pngaaa.com/402/702402-middle.png",
    availability: true,
  },
  {
    id: 1,
    product_name: "nike3",
    product_price: 200,
    product_img:
      "https://ae01.alicdn.com/kf/Hd97c2d4745494d8686c8aa7937f64dbbO.jpg_640x640q90.jpg?width=750&height=604&hash=1354",
    availability: false,
  },
  {
    id: 1,
    product_name: "nike4",
    product_price: 100,
    product_img:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80",
    availability: true,
  },
  {
    id: 1,
    product_name: "nike5",
    product_price: 500,
    product_img:
      "https://i.guim.co.uk/img/media/b48037b5f51bbaa96617d75715faadda1fd8af72/0_65_2018_1210/master/2018.jpg?width=1200&quality=85&auto=format&fit=max&s=5e6d95aa2d3711df31601d8c31e2884c",
    availability: false,
  },
];
// console.log(dbFiles)



// const nv = document.querySelector("#main_container")

// const hh = document.createElement("p")
// hh.innerText = "i love yoouo"
// hh.classList.add("paragraph")

// nv.appendChild(hh)
// // creating card as a new dev
const createCard = (file) => {
  const card = document.createElement("div"); //created an empty tag

  card.classList.add("card__container"); // giving the tag a class name
  // adding content to the div created
  const innerContent = `
    <div class= "info">
        <div class="img_container">
            <img src= "${file.product_img}" alt= "product-img" />
        </div>


        <div class="content">
          <h2>${file.product_name}</h2>
          <p> ${file.product_price}</p>
        </div>

        <div class="btn_btn">
        <button>Add product </button>
        </div>
    </div>
    `;

  card.innerHTML = innerContent;
  container.appendChild(card); //we placed the content
};

// looping through the product list or file to extract each individual product or file
dbFiles.map((file) => {
  return createCard(file);
});
