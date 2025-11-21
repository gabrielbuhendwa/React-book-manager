// App.jsx
import React, { useState } from 'react';
import Header from './components/Header.jsx';
import BookList from './components/BookList.jsx';
import AddBookForm from './components/AddBookForm.jsx';
import EditBookModal from './components/EditBookModal.jsx';
import DeleteConfirmationModal from './components/DeleteConfirmationModal.jsx';

// Main App component that manages the book application state
function App() {
  // State for storing the list of books
  const [books, setBooks] = useState([]);
  
  // State for controlling the edit modal
  const [showEditModal, setShowEditModal] = useState(false);
  const [bookToEdit, setBookToEdit] = useState(null);
  
  // State for controlling the delete confirmation modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [bookToDelete, setBookToDelete] = useState(null);

  // Function to add a new book to the list
  const addBook = (newBook) => {
    // Create a new book object with a unique ID
    const book = {
      id: Date.now(), // Simple way to generate unique IDs
      title: newBook.title,
      author: newBook.author
    };
    
    // Add the new book to the beginning of the books array
    setBooks([book, ...books]);
  };

  // Function to update an existing book
  const updateBook = (updatedBook) => {
    // Map through the books array and replace the book with matching ID
    setBooks(books.map(book => 
      book.id === updatedBook.id ? updatedBook : book
    ));
    // Close the edit modal after updating
    setShowEditModal(false);
  };

  // Function to delete a book
  const deleteBook = (bookId) => {
    // Filter out the book with the matching ID
    setBooks(books.filter(book => book.id !== bookId));
    // Close the delete modal after deleting
    setShowDeleteModal(false);
  };

  // Function to open the edit modal with the selected book
  const openEditModal = (book) => {
    setBookToEdit(book);
    setShowEditModal(true);
  };

  // Function to open the delete confirmation modal with the selected book
  const openDeleteModal = (book) => {
    setBookToDelete(book);
    setShowDeleteModal(true);
  };

  return (
    <div className="min-h-screen bg-purple-900 flex flex-col items-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header component displaying title and book count */}
        <Header bookCount={books.length} />
        
        {/* Form to add new books */}
        <AddBookForm onAddBook={addBook} />
        
        {/* List of books */}
        <BookList 
          books={books} 
          onEditBook={openEditModal} 
          onDeleteBook={openDeleteModal} 
        />
        
        {/* Edit book modal */}
        {showEditModal && (
          <EditBookModal 
            book={bookToEdit} 
            onUpdateBook={updateBook} 
            onClose={() => setShowEditModal(false)} 
          />
        )}
        
        {/* Delete confirmation modal */}
        {showDeleteModal && (
          <DeleteConfirmationModal 
            book={bookToDelete} 
            onConfirmDelete={deleteBook} 
            onClose={() => setShowDeleteModal(false)} 
          />
        )}
      </div>
    </div>
  );
}

export default App;