const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {

            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann Mcdowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
};
const header = document.getElementById('header');
header.innerText =bookStore.name;// 2. select the book list container from the HTML
        const booklist = document.getElementById('book-list');
        // 3. loop through each book in the bookstore's book array
        bookStore.books.forEach(book => {
        // Create a list item element for the book title
        const li = document.createElement('li');

        // Create an h3 element for the book title 
        const h3 = document.createElement('h3');
        h3.innerText = book.title;

        // Create a p element for the author
        const authorP =document.createElement('p');
        authorP.innerText = book.author;
        
        // Create an img element for the  book cover image 
        const img = document.createElement('img');
        img.src = book.imageUrl

        // Append the title author, and image elements into a list item
        li.appendChild(h3);
        li.appendChild(authorP);
        li.appendChild(img);

        // Append the complete list item into the main book list on the page
        booklist.appendChild(listItem);
        });
        // manupulating existing elements
        const bookstoreTitle = document.getElementById('header')
        bookstoreTitle.textContent = bookstore.name;
        // Book Element
        const bookList = document.getElementById('book-list');

        bookStore.books.forEach(book =>{
            // 1. Create elements for each book
            const bookContainer = document.createElement('li');
            const bookTitle = document.createElement('h3');
            const bookAuthor = document.createElement('p');
            const bookImage = document.createElement('img'); 
        
            // 2. Change the textContent/src of each element to match the book object
            bookTitle.textContent = book.title;
            bookAuthor.textContent = book.author;
            bookImage.src = book.imgage;
            // 3. Append book elements to bookcontainer,then to bookblist
            bookContainer.appendChild(bookTitle);
            bookContainer.appendChild(bookAuthor);
            bookContainer.appendChild(bookImage);

            booklist.appendChild(bookContainer);
        });
        




// Write your code here!

