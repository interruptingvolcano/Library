// Initialize array
let myLibrary = [];

// Book constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.read = read;
};

// Select elements
const submitButton = document.querySelector(".submit-field");
const userTitle = document.querySelector(".title");
const userAuthor = document.querySelector(".author");
const userYear = document.querySelector(".year");
const userRead = document.querySelector(".read");
const userInputs = document.querySelectorAll("input");
const addButton = document.querySelector(".add-book");
const inputForm = document.querySelector(".input-form");
const libraryContainer = document.querySelector('.library-container');


// Keep books on refresh
libraryContainer.innerHTML = localStorage.getItem('library');

// Bring up form to enter book details
addButton.addEventListener('click', () => {
  inputForm.style.display = 'contents'; 
});

// Submit form and call display function
function addBookToLibrary() {
  submitButton.addEventListener('click', (e) => {
       
    e.preventDefault();
    
    let userBook = new Book(userTitle.value, userAuthor.value, userYear.value, userRead.value);
    myLibrary.push(userBook);
      
    displayBook();
    
    userInputs.forEach((input) => {
      input.value = ' ';
    })
    inputForm.style.display = 'none';
  }); return userRead;
};


// Display book and add to local storage
function displayBook() {
  let libraryItem = '';
  const libraryArray = [];

  for (let book of myLibrary) {
    if (localStorage.length > 0) {
      libraryItem = '<ul>' + '<li>' + book.title + '</li>' + '<li>' + 'by' + '</li>' + '<li>' + book.author + '</li>' + '<li>' + book.year + '</li>' + '<img src="assets/trash_icon.png" class="trash-icon">' + addCheckBox().outerHTML + '</ul>' + localStorage.library;
      libraryArray.push(libraryItem);

    } else {
      libraryItem = '<ul>' + '<li>' + book.title + '</li>' + '<li>' + 'by' + '</li>' + '<li>' + book.author + '</li>' + '<li>' + book.year + '</li>' + '<img src="assets/trash_icon.png" class="trash-icon">' + addCheckBox().outerHTML + '</ul>';
      libraryArray.push(libraryItem);

    };
    console.log(libraryArray);
  };


  localStorage.setItem('library', libraryItem);

  libraryContainer.innerHTML = localStorage.getItem('library');

};

function addCheckBox() {
  const readContainer = document.createElement('div');
  readContainer.setAttribute('class', 'read-container');

  const readLabel = document.createElement('label');
  readLabel.textContent = "Read?";
  readLabel.setAttribute('for', 'read');

  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  checkBox.setAttribute('id', 'read');
  checkBox.setAttribute('class', 'check-box' )

  readContainer.appendChild(readLabel);

  readContainer.appendChild(checkBox);

  if (userRead.checked === true) {
    checkBox.setAttribute('checked', 'checked');
  } else if (userRead.checked === false) {
    checkBox.setAttribute('value', 'off');
  }

  JSON.stringify(readContainer);
  return readContainer;
};

addBookToLibrary();

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach((item) => {
    item.addEventListener('change', () => {
    if (item.checked === true) {
    
        item.setAttribute('checked', 'checked');
        
    } else if (item.checked === false) {
      item.setAttribute('checked', 'unchecked');
    }; 
  }) 
  });

