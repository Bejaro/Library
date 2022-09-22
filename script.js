let myLibrary = [];
let shelf = document.getElementById("shelves");
var booksDisplayed = document.getElementsByClassName("book");

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.printInfo = function(){
        console.log(title + " by " + author + ", " + pages +" pages." + " " + read);
    }
}

const LOTR = new Book('Lord of the Rings', 'J.R.R Tolkien', 1178, true);
const Hunger = new Book('The Hunger Games', 'Suzanne Collins', 384, true);
myLibrary.push(LOTR, Hunger);

function addBookToLibrary(title, author, pages, read){
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    updateLibrary();
}

function displayBooks(){
    for (var i=0; i< myLibrary.length; i++){
        console.log(myLibrary[i]);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    updateLibrary();
});

function updateLibrary(){
    let bookCount = myLibrary.length;
    //Clear books for update
    while (shelf.firstChild && bookCount > 0) {
        shelf.removeChild(shelf.firstChild);
    }
    console.log (bookCount);
    //Add all books plus the new one
    for (let i = 0; i < bookCount; i++){
        var book = document.createElement("div");
        book.className = "book";
        var title = document.createElement("p");
        title.innerHTML = (myLibrary[i].title);
        title.className= "title";
        var author = document.createElement("p")
        author.innerHTML = (myLibrary[i].author);
        author.className= "author";
        var pages = document.createElement("p")
        pages.innerHTML = (myLibrary[i].pages + " pages");
        pages.className= "pages";
        var read = document.createElement("p")
        read.innerHTML =(myLibrary[i].read);
        read.className= "read";
        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(pages);
        book.appendChild(read);
        shelf.appendChild(book); 
    }
}