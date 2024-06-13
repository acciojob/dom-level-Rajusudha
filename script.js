//your JS code here. If required.
// domLevel.js

// Function to determine the DOM level of an element with a given id
function getDomLevel(elementId) {
    let element = document.getElementById(elementId);
    if (!element) {
        alert("Element with id " + elementId + " not found.");
        return;
    }

    let level = 0;
    while (element) {
        level++;
        element = element.parentElement;
    }

    return level;
}

// Call the function and display the result
const elementId = 'level';
const domLevel = getDomLevel(elementId);
alert(`The level of the element is: ${domLevel}`);

