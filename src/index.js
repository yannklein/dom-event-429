// console.log("Hello from src/index.js!");


// ////////
// Select DOM elements
// ////////

// with its ID (Jocelyn)
const jocelyn = document.querySelector("#jocelyn");
// console.log(jocelyn);
// with its type (h2)
const h2 = document.querySelector("h2");
// console.log(h2);
// with its class (group)
const group1 = document.querySelector(".group");
// console.log(group);
// by nest selection (ul of the group)
const ul = group1.querySelector("ul");
// console.log(ul);
// select multiple elements (all the card)
// const cards = document.querySelectorAll(".card");
// console.log(cards);
// ////////
// Modify the DOM
// ////////

// add an HTML element (Juventus di Escuela 🇮🇹 in list)
ul.insertAdjacentHTML(
  "beforeend",
  `<li>Juventus di Escuela 🇮🇹</li>`
);
// same but more complex (add Marc!!)
const cards = document.querySelectorAll(".card");
const cardUl = cards[1].querySelector("ul");
console.log(cardUl);
cardUl.insertAdjacentHTML(
  "beforeend",
  `<li>
    <img src="https://res.cloudinary.com/wagon/image/upload/c_fill,g_face,h_200,w_200/v1594212709/n15joho7nltftdyc9m1o.jpg" alt="">
    <p>Marc</p>
  </li>`
);
// change the element style (group background to green)
// background-color => backgroundColor
const group = document.querySelector(".group");
group.style.backgroundColor = "green";
// add a class to the element (add text-white)
group.classList.add("text-white");
// remove it
group.classList.remove("text-white");
// add/remove every 1sec
setInterval(() => {
  group.classList.toggle("text-white");
}, 1000);

// Read/Write for inputs (change the value in the email input)
const email = document.querySelector("#email");
console.log(email.value);
email.value = "micky@lewagon.org";
// Read/Write text and HTML content (Care Bridge FC title)
const careBridge = document.querySelector("#care-bridge h3");
console.log(careBridge.innerText);
console.log(careBridge.innerHTML);

careBridge.innerHTML = "Hello <strong>everyone</strong>!";
// ////////
// Add event listeners
// ////////

// //1. Select Jocelyn's picture
// const joImg = document.querySelector("#jocelyn");
// // 2. Listen to a click
// joImg.addEventListener("click", (event) => {
//   // 3. Modify the DOM (add selected)
//   // don't use joImg
//   // use event.currentTarget
//   event.currentTarget.classList.toggle("selected");
// });


// 1. Select all pictures
const cardDivs = document.querySelectorAll(".card");
const images = cardDivs[0].querySelectorAll("img");
// 2. Listen to a click
images.forEach((image) => {
  image.addEventListener("click", (event) => {
    debugger
    // 3. Modify the DOM
    event.currentTarget.classList.toggle("selected");
  });
});
