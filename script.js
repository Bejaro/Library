function Book(title, author, pages, readQuery){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readQuery = readQuery;
    this.info = function(){
        console.log(title + " by " + author + ", " + pages +" pages." + " " + readQuery);
    }
}