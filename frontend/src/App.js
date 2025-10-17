import { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import BookList from './components/BookList';
import AddBook from './components/AddBook';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const refreshBooks = () => window.location.reload();

  return (
    <div>
      {!token ? (
        <>
          <Login setToken={setToken} />
          <Register />
        </>
      ) : (
        <>
          <BookList />
          <AddBook refreshBooks={refreshBooks} />
        </>
      )}
    </div>
  );
}

export default App;
