// console.log("Hello from src/index.js!");



// ////////
// Select DOM elements
// ////////

// with its ID (Julien)
// const julien = document.querySelector('#julien');
// console.log(julien);
// with its type (h2)
const h2 = document.querySelector('h2');
// console.log(h2);
// with its class (group)
const group = document.querySelector('.group');
// console.log(group);
// by nest selection (ul of the group)
const ul = group.querySelector('ul');
// console.log(ul);
// select multiple elements (all the card)
const cardArray = document.querySelectorAll('.card');
// console.log(cardArray);


// ////////
// Modify the DOM
// ////////

// add an HTML element (Fast in list)
ul.insertAdjacentHTML('beforeend', '<li>Fast</li>');

// same but more complex (add Momo!!)
const snapCarteUl = document.querySelector("#snapcarte ul");
snapCarteUl.insertAdjacentHTML(
  'beforeend',
  `<li>
    <img src="https://avatars2.githubusercontent.com/u/60857101?v=4" alt="">
    <p>Momo</p>
  </li>`
);
// change the element style (group background to green)
group.style.backgroundColor = "green";
// add a class to the element (add text-white)
group.classList.add('text-white');
// remove it
group.classList.remove('text-white');
// add it when not exist, remove when exist
group.classList.toggle('text-white'); // == add() because no text-white
group.classList.toggle('text-white'); // == remove()

// Read/Write for inputs (add a value in the emai input)
const emailInput = document.querySelector('#email');
console.log(emailInput.value);
emailInput.value = "yann@lewagon.org";
// Read/Write element content
const oneBiteH3 = document.querySelector('#onebite h3');
console.log("InnerText is: ", oneBiteH3.innerText);
console.log("InnerHTML is: ", oneBiteH3.innerHTML);
oneBiteH3.innerHTML = "This is <em> italic </em>!";

// ////////
// Add event listeners
// ////////

// 1. Select Julien's picture
const julien = document.querySelector('#julien');
// 2. Listen to a click
julien.addEventListener('click', (event) => {
  // 3. Modify the DOM
  event.currentTarget.classList.toggle('selected');
});

// 1. Select all pictures
const pictures = document.querySelectorAll('.cards img');
pictures.forEach((picture) => {
  // 2. Listen to a click
  picture.addEventListener('click', (event) => {
    // 3. Modify the DOM
    debugger
    event.currentTarget.classList.toggle('selected');
  });
});
