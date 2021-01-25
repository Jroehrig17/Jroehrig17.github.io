let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cool-dragon-pic.webp') {
      myImage.setAttribute('src','images/dragon-emblem.png');
    } else {
      myImage.setAttribute('src','images/cool-dragon-pic.webp');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Dragons are cool, ' + myName;
    }
  }

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Dragons are cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}