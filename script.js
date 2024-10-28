const libraryGrid = document.querySelector('#library-grid');
const newBookBtn = document.querySelector('.new-book-btn');
const newBookDialog = document.querySelector('dialog');
const libraryForm = document.querySelector('#library-form');
const submitButton = document.querySelector('#submit-btn');
const cancelButton = document.querySelector('#cancel-btn');

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
    },
    {title: "LOTR",
     author: "Tolkien",
     pages: 365,
     readStatus: true
    }
];

//constructor function for books
function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

//function that takes user info from dialog and stores in library array
function addBook() {
    libraryForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let newBook = new Book(title.value, author.value, pages.value, status.value);
        myLibrary.push(newBook);
        showBooks();
    })
}
addBook();


//function that iterates through array and displays books
function showBooks() {
    libraryGrid.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        displayGrid(myLibrary[i]);
    }
}

//function to populate each book entry on the grid with corresponding info
function displayGrid(book) {
    const libraryCard = document.createElement('div');
    libraryCard.className = 'library-card';

    const cardTitle = document.createElement('h3');
    cardTitle.className = 'card-title';
    cardTitle.textContent = book.title;
    libraryCard.appendChild(cardTitle);

    const cardAuthor = document.createElement('p');
    cardAuthor.className = 'card-author';
    cardAuthor.textContent = book.author;
    libraryCard.appendChild(cardAuthor);

    const cardPages = document.createElement('p');
    cardPages.className = 'card-pages';
    cardPages.textContent = `${book.pages} pages`;
    libraryCard.appendChild(cardPages);

    libraryGrid.appendChild(libraryCard);
}

showBooks(myLibrary);

//open form to enter new book
newBookBtn.addEventListener("click", () => {
    newBookDialog.showModal();
});