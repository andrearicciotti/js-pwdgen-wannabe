// set variables from input
const name = prompt('Hi User! What\'s your name?');
console.log(name);

const surname = prompt('And your surname?');
console.log(surname);

const favcol = prompt('Can i ask you what\' s your favourite color?');
console.log(favcol);


// programming
const password = `${name}${surname}${favcol}21`;
console.log(password);

// output message
document.getElementById('name').innerHTML = name;
document.getElementById('surname').innerHTML = surname;
document.getElementById('favcol').innerHTML = favcol;
document.getElementById('password').innerHTML = password;