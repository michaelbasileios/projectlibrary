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

//function to populate each book entry on the grid with corresponding info
function displayBook(book) {
    const libraryCard = document.createElement('div');
    libraryCard.className = 'library-card';

    const cardTitle = document.createElement('p');
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