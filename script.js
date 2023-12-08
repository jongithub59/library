
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    //shortened arrow funtion
    this.info = () => `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}` 
    
    //normal function
    // this.info = function() {
    //     return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}` 
    // }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read')
const harryPotter = new Book('Harry Potter and the Sorcerer\'s Stone', 'J.k Rowling', 223, 'not read')
const illiad = new Book('Illiad', 'Homer', '+'+700, 'not read') 
const dune = new Book('Dune', 'Frank Herbert', 896, 'read')
const odyssey = new Book('Odyssey', 'Homer', '+'+380, 'not read')
const hamlet = new Book('Hamlet', 'William Shakespeare', 330, 'read')



