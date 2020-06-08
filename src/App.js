import React, {useState, useEffect} from 'react';
import 'bulma/css/bulma.css'
import './App.css'
import Header from './Navigation/Header';
import Book from './Book/Book';
import NewBook from './Book/NewBook';
import EditBook from './Book/EditBook';

function App() {
  const [newBook, setnewBook] = useState(false)
  const [editBook, seteditBook] = useState(false)
  const [selectedBook, setSelectedBook] = useState({})
  const [books, setBooks] = useState([])
  const [filter, setfilter] = useState('')

  useEffect(() => {
    var data = JSON.parse(localStorage.getItem('books'));
    if(data){
      setBooks(data);
    }

  }, [])

  useEffect(() => {
    var json = JSON.stringify(books)
    localStorage.setItem('books', json)
  }, [books])

  const addBook = (newbook) =>{
    const current = [...books]
    current.push(newbook)
    setBooks(current)
  }
  const handleEdit = (edited)=>{
    var copy = [...books]
    const current = copy.find(b => b.uid === edited.uid);
    current.title= edited.title;
    current.author= edited.author;
    setBooks(copy)
    seteditBook(false);
  }

  const beginEdit = (uid) =>{
    const edit = books.find(b=>b.uid === uid)
    setSelectedBook(edit)
    seteditBook(true)
  }

  const handleNewBook = ()=>{
    setnewBook(!newBook);
  }

  const handleDelete = (uid)=> {
    const current = [...books].filter(b => b.uid !== uid);
    setBooks(current)
  }

  return (
    <>
      <Header handleClick={handleNewBook} count={filter ? books.filter(bk => bk.title.includes(filter)).length : books.length} filter={filter} setfilter={setfilter}/>
      <NewBook active={newBook} handleClose={handleNewBook} addNew={addBook}/>
      <EditBook active={editBook} handleSaveEdit={handleEdit} selectedBook={selectedBook} handleClose={()=> seteditBook(false)} />
      <div className="container is-fluid">
        <div className="columns is-multiline is-variable" style={{'marginTop':'10px'}}>
          {filter
          ? books.filter(bk => bk.title.includes(filter)).map(book=> <Book key={`${book.uid}`}  editBook={beginEdit} {...book} deleteBook={handleDelete}/>)
          : books.map(book=> <Book key={`${book.uid}`} editBook={beginEdit} deleteBook={handleDelete} {...book}/>)
          }
        </div>
      </div>
    </>
  );
}

export default App;
