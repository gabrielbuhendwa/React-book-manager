// EditBookModal.jsx
import React, { useState, useEffect } from 'react';

// Modal component for editing a book
function EditBookModal({ book, onUpdateBook, onClose }) {
  // State for form inputs
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  
  // State for form validation errors
  const [errors, setErrors] = useState({});

  // Update the form fields when the book prop changes
  useEffect(() => {
    if (book) {
      setTitle(book.title);
      setAuthor(book.author);
    }
  }, [book]);

  // Function to validate the form
  const validateForm = () => {
    const newErrors = {};
    
    if (!title.trim()) {
      newErrors.title = 'Book title is required';
    }
    
    if (!author.trim()) {
      newErrors.author = 'Author name is required';
    }
    
    setErrors(newErrors);
    
    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  //handleling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate the form before submitting
    if (validateForm()) {
      // Call the onUpdateBook function with the updated book
      onUpdateBook({
        ...book,
        title,
        author
      });
    }
  };

  // If no book is selected, we don't render the modal
  if (!book) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-purple-800 rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-white mb-4">Edit Book</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-purple-200 mb-1">Book Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`w-full px-4 py-2 rounded-md bg-purple-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 ${errors.title ? 'border border-red-500' : ''}`}
              placeholder="Enter book title"
            />
            {errors.title && <p className="text-red-400 text-sm mt-1">{errors.title}</p>}
          </div>
          
          <div>
            <label htmlFor="author" className="block text-purple-200 mb-1">Author</label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className={`w-full px-4 py-2 rounded-md bg-purple-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 ${errors.author ? 'border border-red-500' : ''}`}
              placeholder="Enter author name"
            />
            {errors.author && <p className="text-red-400 text-sm mt-1">{errors.author}</p>}
          </div>
          
          <div className="flex space-x-3">
            <button
              type="submit"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
            >
              Update Book
            </button>
            
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditBookModal;