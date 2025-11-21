import React from 'react';
import BookItem from './BookItem';


function BookList({ books, onEditBook, onDeleteBook }) {
  // If there are no books, display a message
  if (books.length === 0) {
    return (
      <div className="bg-purple-800 rounded-lg p-8 text-center shadow-lg">
        <p className="text-xl text-purple-200">No book for this moment</p>
      </div>
    );
  }

  // Otherwise, display the list of books
  return (
    <div className="space-y-4">
      {books.map(book => (
        <BookItem 
          key={book.id} 
          book={book} 
          onEdit={onEditBook} 
          onDelete={onDeleteBook} 
        />
      ))}
    </div>
  );
}

export default BookList;