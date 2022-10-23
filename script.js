let myLibrary = [];
let shelf = document.getElementById("shelves");
var booksDisplayed = document.getElementsByClassName("book");
const addButton = document.getElementById("addbutton");
const submitButton = document.getElementById("submitbutton");
const formBox = document.getElementById("form");

addButton.addEventListener('click', showForm)
submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    addBookToLibrary(title.value, author.value, pages.value, read.checked);
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
    myLibrary.push(newBook);
    updateLibrary();
}

function displayBooks(){
    for (var i=0; i< myLibrary.length; i++){
        console.log(myLibrary[i]);
    }
}

function readToggle(bookToToggle){
    if (this.checked = true){
        myLibrary[bookToToggle].read = true;
    }
    if (this.checked = false){
        myLibrary[bookToToggle].read = false;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    updateLibrary();
});

function updateLibrary(){
    let bookCount = myLibrary.length;
    //Clear books for update
    while (shelf.firstChild && bookCount > -1) {
        shelf.removeChild(shelf.firstChild);
    }
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
        if (myLibrary[i].read == true){
            readCheck.checked = true;
        }
        if (myLibrary[i].read == false){
            readCheck.checked = false;
        }
        readCheck.dataset.bookid = i;
        readCheck.addEventListener('click', function(event){
            readToggle(i);
        })
        var removeButton = document.createElement("button");
        removeButton.addEventListener ("click", function(event){
            var removed = myLibrary.splice(i, 1);
            updateLibrary();
        })
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