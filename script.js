console.log(localStorage.library);
let myLibrary = [];

function Book(title, author, year, publisher, pages) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.publisher = publisher;
  this.pages = pages;
};

const submitButton = document.querySelector(".submit-field");
const userTitle = document.querySelector(".title");
const userAuthor = document.querySelector(".author");
const userYear = document.querySelector(".year");
const userPublisher = document.querySelector(".publisher");
const userPages = document.querySelector(".pages");
const userInputs = document.querySelectorAll("input");
const addButton = document.querySelector(".add-book");
const inputForm = document.querySelector(".input-form");
const libraryContainer = document.querySelector('.library-container');

libraryContainer.innerHTML = localStorage.getItem('library');

addButton.addEventListener('click', () => {
  inputForm.style.display = 'contents'; 
});

function addBookToLibrary() {
  submitButton.addEventListener('click', (e) => {
       
    e.preventDefault();
    
    let userBook = new Book(userTitle.value, userAuthor.value, userYear.value, userPublisher.value, userPages.value);
    myLibrary.push(userBook);
      
    displayBook();
    
    userInputs.forEach((input) => {
      input.value = ' ';
    })
    inputForm.style.display = 'none';
  });
};

function displayBook() {
  console.log(localStorage.length);
  let libraryItem = '';

  for (let book of myLibrary) {
    if (localStorage.length > 0) {
      libraryItem = '<ul>' + '<li>' + book.title + '</li>' + '<li>' + book.author + '</li>' + '<li>' + book.year + '</li>' + '<li>' + book.publisher + '</li>' + '<li>' + book.pages + '</li>' + '</ul>' + localStorage.library;

    } else {
      libraryItem = '<ul>' + '<li>' + book.title + '</li>' + '<li>' + book.author + '</li>' + '<li>' + book.year + '</li>' + '<li>' + book.publisher + '</li>' + '<li>' + book.pages + '</li>' + '</ul>'
    }
    

  }

  localStorage.setItem('library', libraryItem);

  libraryContainer.innerHTML = libraryItem;

};

addBookToLibrary();




