import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getFirestore, 
    collection, 
    addDoc, 
    onSnapshot, 
    deleteDoc, 
    doc, 
    updateDoc 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyAqT2LPOpkX5wzQ0LFa3Jo-lcodTS_Ex6c",
  authDomain: "book-management-4ceab.firebaseapp.com",
  databaseURL: "https://book-management-4ceab-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "book-management-4ceab",
  storageBucket: "book-management-4ceab.firebasestorage.app",
  messagingSenderId: "518496499948",
  appId: "1:518496499948:web:4a13e659cd0e003c2ccdc9"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const bookGrid = document.getElementById('bookGrid');
const addBookForm = document.getElementById('addBookForm');
const seedDataBtn = document.getElementById('seedDataBtn');
const modal = document.getElementById('bookModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close-btn');


onSnapshot(collection(db, "books"), (snapshot) => {
  bookGrid.innerHTML = "";
    if (snapshot.empty) {
        bookGrid.innerHTML = "<p>No books found. Add one from the sidebar!</p>";
        return;
    }

    snapshot.forEach((doc) => {
        const book = doc.data();
        createBookCard(doc.id, book);
    });
});


function createBookCard(id, book) {
    const card = document.createElement('div');
    card.className = 'book-card';
    
    card.innerHTML = `
        <img src="${book.coverImageURL}" alt="${book.title}" onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'">
        <div class="card-info">
            <h3>${book.title}</h3>
            <p>By: <strong>${book.author}</strong></p>
            <p class="price">$${book.price}</p>
        </div>
        <div class="card-actions">
            <button class="btn btn-update" onclick="window.updateAuthor('${id}', '${book.author}')">Edit Author</button>
            <button class="btn btn-view" onclick="window.viewDetails('${id}', '${book.title}', '${book.author}', '${book.price}', '${book.coverImageURL}')">View</button>
            <button class="btn btn-delete" onclick="window.deleteBook('${id}')">Delete</button>
        </div>
    `;
    
    bookGrid.appendChild(card);
}


addBookForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('image').value;

    try {
        await addDoc(collection(db, "books"), {
            title: title,
            author: author,
            price: Number(price),
            coverImageURL: image
        });
        addBookForm.reset(); 
    } catch (error) {
        console.error("Error adding document: ", error);
        alert("Error adding book");
    }
});


window.deleteBook = async (id) => {
    if(confirm("Are you sure you want to delete this book?")) {
        try {
            await deleteDoc(doc(db, "books", id));
        } catch (error) {
            console.error("Error deleting: ", error);
        }
    }
};


window.updateAuthor = async (id, currentAuthor) => {
    const newAuthor = prompt("Enter new author name:", currentAuthor);
    
    if (newAuthor && newAuthor !== currentAuthor) {
        try {
            const bookRef = doc(db, "books", id);
            await updateDoc(bookRef, {
                author: newAuthor
            });
        } catch (error) {
            console.error("Error updating: ", error);
        }
    }
};


window.viewDetails = (id, title, author, price, img) => {
    modalBody.innerHTML = `
        <img src="${img}" alt="${title}" style="max-height:200px;">
        <h2>${title}</h2>
        <p><strong>Author:</strong> ${author}</p>
        <p><strong>Price:</strong> $${price}</p>
    `;
    modal.style.display = "flex";
};


closeModal.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


seedDataBtn.addEventListener('click', async () => {
    const dummyBooks = [
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 10, coverImageURL: "https://m.media-amazon.com/images/I/71FTb9X6wsL.jpg" },
        { title: "1984", author: "George Orwell", price: 15, coverImageURL: "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg" },
        { title: "To Kill a Mockingbird", author: "Harper Lee", price: 12, coverImageURL: "https://m.media-amazon.com/images/I/81gepf1eMqL.jpg" },
        { title: "Pride and Prejudice", author: "Jane Austen", price: 9, coverImageURL: "https://m.media-amazon.com/images/I/71Q1tPupKjL.jpg" },
        { title: "The Hobbit", author: "J.R.R. Tolkien", price: 18, coverImageURL: "https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg" }
    ];

    if(confirm("Add 5 dummy books to Firebase?")) {
        dummyBooks.forEach(async (book) => {
            await addDoc(collection(db, "books"), book);
        });
    }
});