const libraryGrid = document.querySelector('#library-grid');

const myLibrary = [
    {title: "Hobbit",
    author: "Tolkien",
    pages: 326,
    readStatus: true
    },
    {title: "Dracula",
     author: "Stroker",
     pages: 427,
     readStatus: false
    }
];

//constructor function for books
function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

//function that iterates through array and displays books
function addBook() {
    libraryGrid.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        displayBook(myLibrary[i]);
    }
}