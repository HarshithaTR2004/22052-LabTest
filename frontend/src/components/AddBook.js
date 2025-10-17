import { useState } from 'react';
import api from '../api';

function AddBook({ refreshBooks }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [review, setReview] = useState('');

  const handleAdd = async () => {
    await api.post('/books', { title, author, review });
    refreshBooks();
    setTitle(''); setAuthor(''); setReview('');
  };

  return (
    <div>
      <h3>Add Book</h3>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)} />
      <textarea placeholder="Review" value={review} onChange={e => setReview(e.target.value)} />
      <button onClick={handleAdd}>Add Book</button>
    </div>
  );
}

export default AddBook;
