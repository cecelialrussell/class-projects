// Initialize an object to store the book count for each month
const booksRead = {};

function addBook(month, count) {
    // If the month doesn't exist, initialize it with 0
    if (!booksRead[month]) {
        booksRead[month] = 0
    }
}

// Add the count to the specified month
booksRead[month] += count;


function getBooksRead(month) {
    if  (booksRead[month]) {
        return booksRead[month];
    }   else {
        return 0;
    }
}
