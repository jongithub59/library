const library = []

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read')
const harryPotter = new Book('Harry Potter and the Sorcerer\'s Stone', 'J.k Rowling', 223, 'not read')
const illiad = new Book('Illiad', 'Homer', '+'+700, 'not read') 
const dune = new Book('Dune', 'Frank Herbert', 896, 'read')
const odyssey = new Book('Odyssey', 'Homer', '+'+380, 'not read')
const hamlet = new Book('Hamlet', 'William Shakespeare', 330, 'read')

library[0] = theHobbit
library[1] = illiad
library[2] = odyssey
library[3] = dune
library[4] = hamlet
library[5] = harryPotter

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

const addBook = document.getElementById('add-button')
const readButtons = document.querySelectorAll('.isRead')
const dialog = document.getElementById('book-dialog')
const cancel = document.getElementById('cancel')
const confirmBook = document.getElementById('confirm')

addBook.addEventListener('click', () => {
    dialog.showModal()
})

confirmBook.addEventListener('click', addBookToLibrary)

cancel.addEventListener('click', () => {

    dialog.close()
})

//chnages read button to either 'read' or 'not read' and its color
readButtons.forEach( (button) => {  
    button.addEventListener('click', () => {
        if (button.classList.contains('read')) {
            button.classList.remove('read')
            button.classList.add('not-read')
            button.textContent = 'Not Read'
        } else { 
            button.classList.remove('not-read')
            button.classList.add('read')
            button.textContent = 'Read'
        }
    })
})



function addBookToLibrary() {
    for (i in library)
    console.log(library[i].info())
}







