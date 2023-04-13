let myLibrary = [];
hCounter = 0;

function Book(title, hours, rating){
    this.title = title;
    this.hours = hours;
    this.rating = rating;
};

function closeForm(){
    Form = document.querySelector("#new-book-form");
    Form.style.display = "none";
}

function render(){
let LibraryEl = document.querySelector("#library");
// die zeile macht das so dass sich die eingaben nich duplicaten
LibraryEl.innerHTML = "";
for(let i = 0; i < myLibrary.length; i++){
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.innerHTML =`
    <div class="card-header">
        <h2 class="cardTitle">${book.title}</h3>
    </div>
    <div class="card-body">
        <p>Hours Played: ${book.hours}</p>
        <p>Rating: ${book.rating}</p>
        `
    
    bookEl.style.border = "2px solid black";
    bookEl.style.width = "25%";
    bookEl.style.height = "40%";
    bookEl.style.background = "rgb(224, 224, 224)";
    bookEl.style.margin = "30px";
    bookEl.style.fontSize = "1.2rem";
  
    bookEl.classList.add("#card");

    // <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
    // <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle Read</button>
    LibraryEl.appendChild(bookEl);

}
}


function addBookToLibrary(){

   let title = document.querySelector("#title").value; 
   let hours = document.querySelector("#hours").value; 
   let rating = document.querySelector("#rating").value; 
    let newBook = new Book(title, hours, rating);
    myLibrary.push(newBook);
    render();
};

// der button der das Form öffnet
let newBookbtn = document.querySelector("#new-book-btn");
// event listener für den Button
newBookbtn.addEventListener("click", function(){
    // das das Form angezeigt wird
    let newBookForm = document.querySelector("#new-book-form");
    newBookForm.style.display = "block";
});


document.querySelector("#new-book-form").addEventListener("submit", function(event){
event.preventDefault();
addBookToLibrary();
Form.reset();


var bookNum = document.querySelector("#BookNum");
bookNum.textContent = `${myLibrary.length}`;
});



