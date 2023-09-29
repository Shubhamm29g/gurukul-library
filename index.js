console.log("This is index.js");

// Constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display constructor
function Display() { }

// Add method to display prototype
Display.prototype.add = function (book) {
    console.log('Adding to UI');
    let tablebody = document.getElementById('tablebody');
    let uistring = `<tr>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
    </tr>`;
    tablebody.innerHTML += uistring; // Append the new row to the table
}

Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) { // Fix the typo here
        return false;
    } else {
        return true;
    }
}
Display.prototype.show = function (type, displaymessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
   <strong>message:</strong>${displaymessage} <!-- Fix the variable name here -->
   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
 </div>  `
    setTimeout(() => { // Fix the typo here
        message.innerHTML = '';
    }, 2000);
}

// Add submit event listener to libraryform
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('You have submitted Library form');
    let name = document.getElementById('BookName').value;
    let author = document.getElementById('Author').value;
    let type;
    let computerProgramming = document.getElementById('ComputerProgramming');
    let mechanical = document.getElementById('Mechanical');
    let electrical = document.getElementById('Electrical');

    if (ComputerProgramming.checked) {
        type = ComputerProgramming.value;
    } else if (Mechanical.checked) {
        type = Mechanical.value;
    } else if (Electrical.checked) {
        type = Electrical.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added'); // Fix the capitalization and the message
    } else {
        display.show('danger', 'Sorry, you cannot add this book'); // Fix the capitalization and the message
        //show error
    }
    e.preventDefault();
}
