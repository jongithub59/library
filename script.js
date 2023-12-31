const library = [] //where books are stored and pulled form

//example books
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'Not Read')
const harryPotter = new Book('Harry Potter and the Sorcerer\'s Stone', 'J.k Rowling', 223, 'not read')
const illiad = new Book('Illiad', 'Homer', '+'+700, 'not read') 
const dune = new Book('Dune', 'Frank Herbert', 896, 'read')
const odyssey = new Book('Odyssey', 'Homer', '+'+380, 'not read')
const hamlet = new Book('Hamlet', 'William Shakespeare', 330, 'read')

const randomBook = Math.floor(Math.random() * 6);

switch (randomBook) {
    case 0: library[0] = theHobbit
        break
    case 1: library[0] = illiad
        break
    case 2: library[0] = odyssey
        break
    case 3: library[0] = dune
        break
    case 4: library[0] = hamlet
        break
    case 5: library[0] = harryPotter
        break     
}

console.log(library)
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
const error = document.querySelector('.error');

addBook.addEventListener('click', (event) => {
    event.preventDefault()
    dialog.showModal()

})

function addBookToLibrary() {
    let titleValue = titleInput.value //stores value form dialog input into variable for use
    console.log(titleValue)

    let authorValue = authorInput.value
    console.log(authorValue)

    let pagesValue = pagesInput.value
    console.log(pagesValue)

    let isRead = readInput.checked
    console.log(isRead)

    if (titleInput.value == '' || authorInput.value == '' || pagesInput.value == '') {
    return error.classList.remove('error')
    }
    let newBook = new Book(titleValue, authorValue, pagesValue, isRead) //create new book object and store in the library
    library.push(newBook)
    console.log(library)
    titleInput.value = ''
    authorInput.value = ''
    pagesInput.value = ''
    readInput.checked = false
    error.classList.add('error')
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
    if (library[i].read == false) {
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
    library.shift()
    dialog.close()
}


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
    error.classList.add('error')
    dialog.close()
})

//chnages read button to either 'read' or 'not read' and its color for example book

displayLibrary(library)














