"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports = { findTitles, findAuthors, findIDs, showTitles, addBook, createBook, showID, scramble }; //add all of your function names here that you need for the node mocha tests

/*
o	createBook, which will take title, author, and libraryID as inputs.  It will create a new book object and add it to the library, 
which will be represented as a global array named libraryBooks.  createBook should return the newly created book.
o	findTitles, which will find all the book titles in libraryBooks and return them in an alphabetically ordered array.
o	findAuthors, which will find all the authors in libraryBooks and return them in an alphabetically ordered array.
o	findIDs, which will find all the libraryIDs in libraryBooks and return them in an alphabetically ordered array.
*/

let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

let book = {};

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showTitles() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const titles = findTitles();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    titles.sort();
    const titleString = titles.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
}
/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showID() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const ids = findIDs();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    ids.sort();
    const titleString = ids.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
}

/**
 * 
 * @return {object} array holding all titles as elements
 */
function findTitles() {
    let titles = [];
    // titles = ["Mockingjay: The Final Book of The Hunger Games", "The Road Ahead", "Walter Isaacson"];  //FIX THIS!!
    // implement this and other functions

    for (let i = 0; i < library.length; i++) {
        titles.push(library[i].title);
    }
    return titles.sort();

}


/**
 * @returns {undefined} no return
 * Event handler for Add book button.  Creates and adds book to the library
 */
function addBook() {
    const title = document.getElementById("title"); //retrieves the book title from the title textbox
    console.log("title is: ", title.value);
    alert("title:  " + title.value);

    const author = document.getElementById("author"); //retrieves the book author from the title textbox
    console.log("author is: ", author.value);
    alert("author:  " + author.value);

    const newID = library.length + 5000;  // hack to get a unique id for now
    //finish the implementation -- get the author, create a book object, and add to the library array

    // let book = createBook(title,author,newID);
    book.title = title;
    book.author = author;
    book.libraryID = newID;

    library.push(book);

    return book;

}
/**
 * 
 * @returns {Object} new book object
 */
// function createBook(title,author,newID) {

//     book.title = title;
//     book.author = author;
//     book.libraryID = newID;

//     library.push(book);

//     return book;
// }

/**
 * 
 * @returns {Array} find all  authors in libraryBooks and return them in alphabetically ordered array.
 */
function findAuthors() {
    //implement this
    let arr = [];
    for (let i = 0; i < library.length; i++) {
        arr[i] = library[i].author;
    }
    return arr.sort();
}

/**
 * 
 * @returns {Array} find all the libraryIDs in libraryBooks and return them in an alphabetically ordered array.
*/
function findIDs() {
    //implement this
    let arr = [];
    for (let i = 0; i < library.length; i++) {
        arr[i] = library[i].libraryID;
    }
    return arr.sort();
}

/**
 * 
 * @returns {Array} arranged by word length
 */
function scram() {
    let arr = findTitles();
    let word = "";
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        word += arr[i] + " ";
    }
    word = word.trim();

    newArr = word.split(" ");

    for (let i = 0; i < newArr.length; i++) {
        for (let j = i + 1; j < newArr.length; j++) {
            let tmp = newArr[0].length;
            if (newArr[i].length > newArr[j].length) {
                tmp = newArr[i];
                newArr[i] = newArr[j];
                newArr[j] = tmp;
            }

        }
    }

    return newArr;
}
console.log(scram());
/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function scramble() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const scramble = scram();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */

    const titleString = scramble.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
}

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showAuthor() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const author = findAuthors();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    author.sort();
    const titleString = author.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
}