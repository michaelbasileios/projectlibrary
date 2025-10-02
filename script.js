const libraryGrid = document.querySelector("#library-grid");
const newBookBtn = document.querySelector(".new-book-btn");
const newBookDialog = document.querySelector("dialog");
const libraryForm = document.querySelector("#library-form");
const submitButton = document.querySelector("#submit-btn");
const cancelButton = document.querySelector("#cancel-btn");

let myLibrary = [];

//USING CONSTRUCTOR SYNTAX
// function Book(title, author, pages, readStatus) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.readStatus = readStatus;
// }

// function to toggle read status
// Book.prototype.toggleRead = function() {
//     this.readStatus = !this.readStatus;
// }

//using class syntax
class Book {
  constructor(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
  }

  toggleRead() {
    this.readStatus = !this.readStatus;
  }
}

let myBook1 = new Book("LOTR", "Tolkien", 245, true);
let myBook2 = new Book("Dracula", "Stroker", 444, false);

myLibrary = [myBook1, myBook2];

//function that takes user info from dialog and stores in library array
function addBook() {
  libraryForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let status = document.querySelector("#status").checked;
    let newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);
    newBookDialog.close();
    libraryForm.reset();
    showBooks();
  });
}
addBook();

//Function to display custom error message if required inputs are missing
function displayCustomError() {
  const requiredFormElements = document.querySelectorAll(
    "#library-form input[required]"
  );
  requiredFormElements.forEach((element) => {
    if (element.validity.valueMissing) {
      element.setCustomValidity("Please fill out this field.");
    } else {
      element.setCustomValidity("");
    }
  });
}

//close new book form without making any changes
cancelButton.addEventListener("click", (e) => {
  e.preventDefault();
  newBookDialog.close();
  libraryForm.reset();
});

//function that iterates through array and displays books
function showBooks() {
  libraryGrid.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];

    const libraryCard = document.createElement("div");
    libraryCard.className = "library-card";

    const cardTitle = document.createElement("h3");
    cardTitle.className = "card-title";
    cardTitle.textContent = book.title;
    libraryCard.appendChild(cardTitle);

    const cardAuthor = document.createElement("p");
    cardAuthor.className = "card-author";
    cardAuthor.textContent = book.author;
    libraryCard.appendChild(cardAuthor);

    const cardPages = document.createElement("p");
    cardPages.className = "card-pages";
    cardPages.textContent = `${book.pages} pages`;
    libraryCard.appendChild(cardPages);

    const cardReadToggle = document.createElement("button");
    cardReadToggle.className = "card-rd-toggle";
    cardReadToggle.textContent = `${book.readStatus ? "Read" : "Not Read"}`;
    cardReadToggle.addEventListener("click", () => {
      myLibrary[i].toggleRead();
      showBooks();
    });
    libraryCard.appendChild(cardReadToggle);

    const delBtn = document.createElement("button");
    delBtn.className = "card-delete";
    delBtn.textContent = "X";
    delBtn.addEventListener("click", () => {
      removeBook(i);
    });
    libraryCard.appendChild(delBtn);

    libraryGrid.appendChild(libraryCard);
  }
}

showBooks();

//function to remove book from array
function removeBook(index) {
  myLibrary.splice(index, 1);
  showBooks();
}

//open form to enter new book
newBookBtn.addEventListener("click", () => {
  newBookDialog.showModal();
});
