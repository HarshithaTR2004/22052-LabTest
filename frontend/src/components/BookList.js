import { useEffect, useState } from 'react';
import api from '../api';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await api.get('/books');
      setBooks(res.data);
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h2>My Books</h2>
      <ul>
        {books.map(book => (
          <li key={book._id}>{book.title} by {book.author}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
