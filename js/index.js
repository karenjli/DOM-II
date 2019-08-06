// Your code goes here
const headline = document.querySelector(".main-navigation .logo-heading");
headline.addEventListener ("dblclick", (e) => alert("Welcome to Fun Bus"));

const welcome = document.querySelector (".container .intro h2");
welcome.addEventListener('click', (e) => console.log ("Welcome"));

const logo = document.querySelector (".main-navigation .container h1");
logo.addEventListener('mouseover', (e) => logo.style.color = "hotpink");

const subheading = document.querySelectorAll (".content-section h2");
subheading.forEach (subheading => {
    subheading.addEventListener('click', (e) => subheading.style.color = "yellow");
}) 

const page = document.querySelector ('body');
page.addEventListener('keydown', (e) => page.style.backgroundColor = "lightBlue");
//window.addEventListener('keydown', (e) => window.style.backgroundColor = "red");

window.addEventListener('resize', (e) => {console.log ("The window is resized")});

const button = document.querySelectorAll ('.btn')
button.forEach ( button => {
    addEventListener('scroll', (e)=> {button.style.borderColor = "pink"})});