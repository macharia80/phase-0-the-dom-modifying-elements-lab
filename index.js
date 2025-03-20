// Remove the <main> element with id 'main'
const mainElement = document.querySelector('main#main');
if (mainElement) {
  mainElement.remove();
}

// Create a new <h1> element and assign it to newHeader
const newHeader = document.createElement('h1');
// Set the id to 'victory'
newHeader.id = 'victory';
// Set the text content with your name
newHeader.innerHTML = 'sam is the champion'; // Replace 'Grok' with your name

// Optionally append it to the body (not explicitly required by tests, but logical)
document.body.appendChild(newHeader);// Write your code here!