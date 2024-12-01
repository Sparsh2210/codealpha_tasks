// Get modal elements
let addBookModal = document.getElementById("addBookModal");
let addBookBtn = document.getElementById("addBookBtn");
let closeModal = document.getElementById("closeModal");
let addBookForm = document.getElementById("addBookForm");

// Open the modal when "Add Book" button is clicked
addBookBtn.addEventListener("click", function() {
    addBookModal.style.display = "block";
});

// Close the modal when the "X" button is clicked
closeModal.addEventListener("click", function() {
    addBookModal.style.display = "none";
});

// Close the modal if the user clicks outside the modal content
window.addEventListener("click", function(event) {
    if (event.target == addBookModal) {
        addBookModal.style.display = "none";
    }
});

// Handle form submission to add a book
addBookForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get the book data from the form
    let bookTitle = document.getElementById("bookTitle").value;
    let bookDescription = document.getElementById("bookDescription").value;
    let bookImage = document.getElementById("bookImage").value;

    // Create a new book element
    let newBook = document.createElement("div");
    newBook.classList.add("latest-col");

    // Create the HTML structure for the new book
    newBook.innerHTML = `
        <div class="limg">
            <img src="${bookImage}" alt="${bookTitle}">
        </div>
        <div class="info">
            <h3>${bookTitle}</h3>
            <p>${bookDescription}</p>
            <button class="btnn">Download</button>
        </div>
    `;

    // Add the new book to the book list (latest-row)
    document.getElementById("booknamesearch").appendChild(newBook);

    // Clear the form and close the modal
    addBookForm.reset();
    addBookModal.style.display = "none";
});


var navbarvertical =document.getElementById("navt");

        
navbarvertical.style.height ='0%';
function toggle() {
   
    if(navbarvertical.style.height=='0%'){
        navbarvertical.style.height='50%';
    }
    else{
        navbarvertical.style.height='0%';
    }
   
}





let myInput=document.getElementById("myInput");
myInput.addEventListener("input", function(){

let inputvalue=myInput.value.toUpperCase();

//console.log("input event fired.");

let latestCol=document.getElementsByClassName("latest-col");
Array.from(latestCol).forEach(function(element){

let Coltxt=element.getElementsByTagName("h3")[0].innerText.toUpperCase();
//console.log(Coltxt);
if(Coltxt.includes(inputvalue)){
element.style.display="block";
}else{
element.style.display="none";
}
})

})
