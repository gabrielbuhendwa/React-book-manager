import React from 'react';


function BookItem({ book, onEdit, onDelete }) {
  return (
    <div className="bg-purple-800 rounded-lg p-4 shadow-lg hover:bg-purple-750 transition duration-300">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold text-white">{book.title}</h3>
          <p className="text-purple-200">by {book.author}</p>
        </div>
        
        <div className="flex space-x-2">
          {/***Edit button***/}
          <button
            onClick={() => onEdit(book)}
            className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition duration-300"
            aria-label="Edit book"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </button>
          
          {/***Delete button***/}
          <button
            onClick={() => onDelete(book)}
            className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-full transition duration-300"
            aria-label="Delete book"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookItem;