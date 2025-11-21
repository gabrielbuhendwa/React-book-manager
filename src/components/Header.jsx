import React from 'react';


function Header({ bookCount }) {
  return (
    <header className="text-center py-8">
      <h1 className="text-4xl font-bold text-white mb-2">VB Reading Books</h1>
      <p className="text-xl text-purple-200">You have now {bookCount} {bookCount === 1 ? 'book' : 'books'}.</p>
    </header>
  );
}

export default Header;