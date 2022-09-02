/* This section contains the JavaScript code, which adds functionality
for adding, checking, removing, and keeping count of todo items. */

/* Creates a close button and appends it to a given item.
This can be used if a todo is accidentally made incorrectly,
if a completed todo no longer should be seen, etc. */
function createCloseButton(li) {
    // create a new inline element in the HTML file
    var span = document.createElement("SPAN");
    // uses unicode symbol for 
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    // defines the functionality of the close button
    // (on click, it should delete the parent element)
    span.onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Function that sets a counter for how many todos have
// been completed using the variable tasksCompleted (below).
function setTodoCounter() {
    // get the counter element
    counter = document.getElementById("counter");
    // use innerHTML to reference the JS variable in the content
    // of the HTML site
    counter.innerHTML = "You have completed " + tasksCompleted + " tasks!"
}

// Extract out the todos by getting all list elements
// (using their tag name) and create a close button for all
var myTodos = document.getElementsByTagName("LI");
// stores the # of completed tasks so far.
var tasksCompleted = 0;
var i;
for (i = 0; i < myTodos.length; i++) {
    createCloseButton(myTodos[i]);
    // checks if any todos are already checked off upon rendering
    if (myTodos[i].className == 'checked') {
        tasksCompleted += 1;
    }
}

// creates text for the todo list counter
p = document.createElement("p");
p.setAttribute("id", "counter")
document.body.appendChild(p);
setTodoCounter();


// "Checks off" todos when clicked on.
// get the list of todos using ID
var list = document.getElementById("myUL");
// addEventListener adds an event handler that will handle
// any event where the user clicks.
// If a click is made, the handler will check if the target
// is a list item. If so, the item will be set to "checked"
// and its appearance will change (according to the CSS).
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    // additionally, if a todo list item is checked off,
    // add to the completed tasks.
    // otherwise, it was unchecked and the # of completed
    // tasks should be decreased.
    if (ev.target.className == 'checked') {
        tasksCompleted += 1;
    }
    else {
        tasksCompleted -= 1;
    }
    setTodoCounter();
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    // creates a list item
    var li = document.createElement("li");
    // gets the value of the input and creates a text node
    // with the value
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);

    // t originally created a text node in the document.
    // Move it to be the child of the list element so it is
    // displayed there.
    li.appendChild(t);
    // Check that todo is non-empty.
    if (inputValue === '') {
        alert("Todo was empty.");
    } else {
        // If so, then add the new list element as a child node
        // of the original list.
        document.getElementById("myUL").appendChild(li);
    }
    // set this value back to empty.
    document.getElementById("myInput").value = "";

    // create a close button for this element.
    createCloseButton(li);
}