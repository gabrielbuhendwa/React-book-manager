import React, { useState } from 'react';


function AddBookForm({ onAddBook }) {
  // State for form inputs
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  
  // State for form validation errors
  const [errors, setErrors] = useState({});

  // Function to validate the form
  const validateForm = () => {
    const newErrors = {};
    
    if (!title.trim()){
      newErrors.title = 'Book title is required';
    }
    
    if (!author.trim()){
      newErrors.author = 'Author name is required';
    }
    
    setErrors(newErrors);
    
    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate the form before submitting
    if (validateForm()) {
      // Call the onAddBook function passed from the parent component
      onAddBook({ title, author });
      
      // Reset the form fields
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div className="bg-purple-800 rounded-lg p-6 mb-6 shadow-lg">
      <h2 className="text-2xl font-semibold text-white mb-4">Add a New Book</h2>
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
        
        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300">Add Book</button>
      </form>
    </div>
  );
}

export default AddBookForm;