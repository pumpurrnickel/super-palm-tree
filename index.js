// Show an unordered list of to-do items
// Show an input to enter a new to-do
// Show a button to add a to-do. When the button is clicked:
// The text from the input box is used to add a list item to the bottom of the list
// The text from the input box is cleared out.
// When the user clicks on a list item, it is removed
// Create a "close" button and append it to each list item

function createNewToDo() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("inputTodo").value;
  var x = document.createTextNode(inputValue);
  li.appendChild(x);
  if (inputValue === "") {
    alert("Write a new to do first.");
  } else {
    document.getElementById("toDoTaskList").appendChild(li);
  }
  document.getElementById("inputTodo").value = "";

  var span = document.createElement("SPAN");
  var newUserInput = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(newUserInput);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

var toDoTaskList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < toDoTaskList.length; i++) {
  var span = document.createElement("SPAN");
  var newUserInput = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(newUserInput);
  toDoTaskList[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("completed");
    }
  },
  false
);
