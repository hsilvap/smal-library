import React, {  useState } from 'react'
import classNames from 'classnames'
import { v4 as uuidv4 } from 'uuid';

const NewBook = ({active,handleClose, addNew}) => {
  const [book, setBook] = useState({uid: '', title:'',author:''})

  const handleSubmit = (close) => {
    const newBook = {...book, uid: uuidv4()}
    addNew(newBook)
    setBook({uid:'', title:'',author:''})
    if(close)
    handleClose()
  }

  return (
  <div className={classNames({
    'modal': true,
    'is-active': active,
    })}>
    <div className="modal-background"></div>
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">New Book</p>
        <button onClick={handleClose}  className="delete" aria-label="close"></button>
      </header>
      <section  className="modal-card-body">
        <form >
        <div className="field">
          <label className="label">Book Title</label>
          <div className="control">
            <input className="input" type="text" value={book.title} onChange={(e)=>{ setBook({...book, title: e.target.value})}} placeholder="Frodo Potter"/>
          </div>
          <p className="help">Cannot be empty</p>
        </div>

        <div className="field">
          <label className="label">Author</label>
          <div className="control">
            <input className="input" type="email" value={book.author} onChange={(e)=>{ setBook({...book, author: e.target.value})}} placeholder="John Doe"/>
          </div>
          <p className="help">Cannot be empty</p>
        </div>
      </form>
      </section>
      <footer className="modal-card-foot">
        <button disabled={!book.title  || !book.author } onClick={()=> handleSubmit(false)} className="button is-success">Save and continue</button>
        <button disabled={!book.title  || !book.author } onClick={()=> handleSubmit(true)} className="button is-success">Save</button>
        <button onClick={handleClose} className="button">Cancel</button>
      </footer>
    </div>
  </div>
  )
}

export default NewBook