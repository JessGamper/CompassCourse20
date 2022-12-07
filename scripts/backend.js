//Datatypes in computer languages
var text = "Hello World" // String
var number = 42 // Integer
var char = "@"
var degree = 50.16 //float
var isHungry = false //Boolean false or true
var students = [
    "Enzo",
    "Jenny", 
    "Patricia", 
    "Lata", 
    "Ivan", 
    "Hannatu",
    "Jessica"
]// array uses []

//Backend Commands
console.log("Hello World")
console.warn(text + degree + isHungry);
console.info(students[2] + " " + students[4])

//Frontend Commands
alert ("The Answer for Everything is number: " + number);


//TO DO LIST FUNCTIONS
function AddTodo() {
console.log("Started the AddTodo Function");
//extracting the text aka value of the input field.
    var fieldValue = document.querySelector(".myInput").value;

    if (fieldValue==="") {
        alert("Cant Add Empty ToDo");
    } else{
        console.log(fieldValue);
        var textNode = document.createTextNode(fieldValue);

       //variable newListItem, will creat an empty LstItem aka. Li everytime the function is triggered.

        var newListItem = document.createElement("li");
        newListItem.appendChild(textNode);
        //append the 2D Text that was converted into a textnode to the empty list item.

        //when the text has been extracted, converted into a 2D module with text Node and packed into an empty ListItem, then we can assign that ListItem with its TextNode as a child of the unordered list in the html.
        document.querySelector(".myUL").appendChild(newListItem);

        //   resetting the input field after successfully adding a todoItem
document.querySelector(".myInput").value = " ";

    }
}