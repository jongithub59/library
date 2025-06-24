const library = [] //where books are stored and pulled from

//example books
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)
const harryPotter = new Book('Harry Potter and the Sorcerer\'s Stone', 'J.K. Rowling', 223, false)
const illiad = new Book('Illiad', 'Homer', '+' + 700, false) 
const dune = new Book('Dune', 'Frank Herbert', 896, false)
const odyssey = new Book('Odyssey', 'Homer', '+' + 380, false)
const hamlet = new Book('Hamlet', 'William Shakespeare', 330, false)

library[0] = harryPotter;
library[1] = theHobbit;
library[2] = illiad;
library[3] = dune;
library[4] = hamlet;
library[5] = odyssey;

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
const deleteButtons = document.querySelectorAll('.delete')
const dialog = document.getElementById('book-dialog')
const cancel = document.getElementById('cancel')
const confirmBook = document.getElementById('confirm')
const main = document.querySelector('.main')
const titleInput = document.getElementById('title')
const authorInput = document.getElementById('author')
const pagesInput = document.getElementById('pages')
const readInput = document.getElementById('read')
const errorMessages = error.querySelectorAll(".error-visible");
const errorAll = document.querySelector('#error-all');
const errorTitleAuthor = document.querySelector("#error-title-author");
const errorTitlePages = document.querySelector("#error-title-pages");
const errorAuthorPages = document.querySelector("#error-author-pages");
const errorTitle = document.querySelector("#error-title");
const errorAuthor = document.querySelector("#error-author");
const errorPages = document.querySelector("#error-pages");

addBook.addEventListener('click', (event) => {
    event.preventDefault()
    dialog.showModal()

})

confirmBook.addEventListener('click', (event) => {
    event.preventDefault()
    addBookToLibrary()
})

cancel.addEventListener('click', (event) => {
    event.preventDefault()
    titleInput.value = ''
    authorInput.value = ''
    pagesInput.value = ''
    readInput.checked = false
    errorMessages.forEach((errorMessage) => {
        errorMessage.classList.add('error-visible')
    });
    dialog.close()
})

function addBookToLibrary() {
    let titleValue = titleInput.value //stores value form dialog input into variable for use

    let authorValue = authorInput.value

    let pagesValue = pagesInput.value

    let isRead = readInput.checked

    errorMessages.forEach((errorMessage) => {
        errorMessage.classList.add("error-visible");
    });

    if (titleValue === '' && authorValue === '' && pagesValue === '') return errorAll.classList.remove('error-visible')
    if (titleValue === "" && authorValue === "") return errorTitleAuthor.classList.remove("error-visible");
    if (titleValue === "" && pagesValue === "") return errorTitlePages.classList.remove("error-visible");
    if (authorValue === "" && pagesValue === "") return errorAuthorPages.classList.remove("error-visible");
    if (titleValue === "") return errorTitle.classList.remove("error-visible");
    if (authorValue === "") return errorAuthor.classList.remove("error-visible");
    if (pagesValue === "") return errorPages.classList.remove("error-visible");
    let newBook = new Book(titleValue, authorValue, pagesValue, isRead) //create new book object and store in the library
    library.push(newBook)
    console.log(library)
    titleInput.value = ''
    authorInput.value = ''
    pagesInput.value = ''
    readInput.checked = false
    errorMessages.forEach((errorMessage) => {
        errorMessage.classList.add("error-visible");
    });
    displayLibrary(library)
}

function displayLibrary(library) { //creates all the book display elemnents and uses previously created object for the content
    for (i in library) {
    let book = document.createElement('div')
    book.classList.add('book')

    let titleElement = document.createElement('p')
    const title = library[i].title
    titleElement.innerText = `"${title}"`

    let authorElement = document.createElement('p')
    const author = library[i].author
    authorElement.innerText = author 

    let pagesElement = document.createElement('p')
    const pages = library[i].pages
    pagesElement.innerText = `${pages} pages`

    let readElement = document.createElement('button')
    if (library[i].read === false) {
    readElement.classList.add('not-read')
    readElement.innerText = 'Not Read'
    } else {
        readElement.classList.add('read')
        readElement.innerText = 'Read'
    } 
    readElement.addEventListener('click' , () => {
        if (readElement.classList.contains('read')) {
            readElement.classList.remove('read')
            readElement.classList.add('not-read')
            readElement.textContent = 'Not Read'
        } else { 
            readElement.classList.remove('not-read')
            readElement.classList.add('read')
            readElement.textContent = 'Read'
        }
    })

    let deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete'
    deleteButton.classList.add('delete')
    deleteButton.setAttribute('onclick', "return this.parentNode.remove();") //deletes whole element when clicked
    
    main.appendChild(book)
    book.appendChild(titleElement)
    book.appendChild(authorElement)
    book.appendChild(pagesElement)
    book.appendChild(readElement)
    book.appendChild(deleteButton)
    }   
    library.shift() //removes the first array element so that it's only appended once ant again when the function is repeated
    dialog.close()
}



//chnages read button to either 'read' or 'not read' and its color for example book

displayLibrary(library)