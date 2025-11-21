// DeleteConfirmationModal.jsx
import React from 'react';

// Modal component for confirming book deletion
function DeleteConfirmationModal({ book, onConfirmDelete, onClose }) {
  // If no book is selected, don't render the modal
  if (!book) return null;

  // Function to handle the delete confirmation
  const handleConfirm = () => {
    onConfirmDelete(book.id);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-purple-800 rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-white mb-4">Confirm Deletion</h2>
        
       <p className="text-purple-200 mb-6">
            Are you sure you want to delete &quot;{book.title}&quot; by {book.author}?
       </p>
        
        <div className="flex space-x-3">
          <button
            onClick={handleConfirm}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
          >
            Yes, Delete
          </button>
          
          <button
            onClick={onClose}
            className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
          >
            No, Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;