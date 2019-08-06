// Your code goes here
const headline = document.querySelector(".main-navigation .logo-heading");
headline.addEventListener ("dblclick", (e) => alert("Welcome to Fun Bus"));

const welcome = document.querySelector (".container .intro h2");
welcome.addEventListener('click', (e) => console.log ("Welcome"));

const subheading = document.querySelectorAll (".content-section h2");
console.log(subheading);
subheading.forEach (subheading => {
    subheading.addEventListener('click', (e) => subheading.style.color = "yellow");
}) 

// const page = document.querySelectorAll ("body");
// page.addEventListener('keydown', (e) => page.style.backgroundColor = "blue");

const page = document.querySelector ('body');
page.addEventListener('keydown', (e) => page.style.backgroundColor = "lightBlue");
//window.addEventListener('keydown', (e) => window.style.backgroundColor = "red");

// const topBtn = document.createElement ("button");
// topBtn.textContent = "Top";
// topBtn.style.border = solid black;


