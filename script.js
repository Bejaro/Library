let myLibrary = [];
let shelf = document.getElementById("shelves");
var booksDisplayed = document.getElementsByClassName("book");
const addButton = document.getElementById("addbutton");
const submitButton = document.getElementById("submitbutton");
const formBox = document.getElementById("form");

addButton.addEventListener('click', showForm)
submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    addBookToLibrary(title.value, author.value, pages.value, read.value);
    hideForm();    
});

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
const Hunger = new Book('The Hunger Games', 'Suzanne Collins', 384, false);
myLibrary.push(LOTR, Hunger);

function showForm(){
    formBox.classList.remove('hidden')
}

function hideForm(){
    formBox.classList.add('hidden')
}

function addBookToLibrary(title, author, pages, read){
    const newBook = new Book(title, author, pages, read);
    console.log (newBook);
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
        book.dataset.bookid = i;
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
        read.innerHTML =("Read it?");
        read.className= "read";
        var readCheck = document.createElement("input");
        readCheck.type = "checkbox";
        readCheck.checked = myLibrary[i].read;
        var removeButton = document.createElement("button");
        removeButton.innerHTML = "Remove";
        removeButton.className = "removeButton";
        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(pages);
        book.appendChild(read);
        read.appendChild(readCheck);
        book.appendChild(removeButton);
        shelf.appendChild(book); 
    }
}