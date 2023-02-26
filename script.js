/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable space-before-function-paren */
// Initialize array
const myLibrary = [];

// Book constructor
function Book(title, author, year, read) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.read = read;
}

// toggle read book
// eslint-disable-next-line func-names
Book.prototype.toggleRead = function() {
  this.read = !this.read;
};

// need to link myLibrary index for each book to prototype function
function toggleRead(index) {
  myLibrary[index].toggleRead();
  displayBook();
}

// Select elements
const submitButton = document.querySelector('.submit-field');
const userTitle = document.querySelector('.title');
const userAuthor = document.querySelector('.author');
const userYear = document.querySelector('.year');
const userRead = document.querySelector('.read');
const userInputs = document.querySelectorAll('input');
const addButton = document.querySelector('.add-book');
const inputForm = document.querySelector('.input-form');
const libraryContainer = document.querySelector('.library-container');

// Keep books on refresh
libraryContainer.innerHTML = localStorage.getItem('library');

// display form to enter book details
addButton.addEventListener('click', () => {
  inputForm.style.display = 'contents';
});

// Submit form and call display function
function addBookToLibrary() {
  const userBook = new Book(userTitle.value, userAuthor.value, userYear.value, userRead.checked);
  myLibrary.push(userBook);
  displayBook();

  // remove input entries and input form from page
  userInputs.forEach((input) => {
    input.value = '';
  });
  inputForm.style.display = 'none';
}

// listen for submit button click
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary();
});

// Display book and add to local storage
function displayBook() {
  libraryContainer.innerHTML = '';

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const bookEl = document.createElement('div');
    bookEl.setAttribute('class', 'book-El');
    bookEl.innerHTML = `
    <ul>
      <li>${book.title}</li>
      <li>${book.author}</li> <li>${book.year}</li> 
    <div class="bottom-container"> 
      <img src="assets/trash_icon.png" class="trash-icon" onclick="removeBook(${i})"></img>   
      <p class="read-status">${book.read ? 'Read' : 'Not Read'}</p>
      <button class='toggle-read-btn' onclick="toggleRead(${i})">Toggle Read</button>    
      </div>
    </ul>`;
    libraryContainer.appendChild(bookEl);
  }
}
// remove a book
function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBook();
}
