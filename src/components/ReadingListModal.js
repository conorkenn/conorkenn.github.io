import React, { useState, useEffect } from "react";

const ReadingListModal = ({ isOpen, onClose }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("/books.json"); 
        const data = await response.json();
        setBooks(data); 
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    if (isOpen) {
      fetchBooks(); 
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackgroundClick = (e) => {
    if (e.target.id === "modal-background") {
      onClose();
    }
  };

  return (
    <div
      id="modal-background"
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white p-6 rounded-md shadow-lg w-3/4 lg:w-1/2">
        <h2 className="text-3xl font-bold mb-4">Reading List - What I've been reading</h2>
        <ul className="space-y-4">
          {books.length > 0 ? (
            books.map((book, index) => (
              <li key={index}>
                <h3 className="text-xl font-bold">{book.title}</h3>
                <p>by {book.author}</p>
                <p>{book.completed}</p>
              </li>
            ))
          ) : (
            <p>No books available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ReadingListModal;
