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

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

function iterateArray(array) {
    for (i=0; i<array.length; i++) {
        console.log(array[i]);
    }
}