import React, {  useState , useEffect} from 'react'
import classNames from 'classnames'

const EditBook = ({active,handleClose, selectedBook,handleSaveEdit}) => {
  const [editBook, seteditBook] = useState({uid:'',author:'',title:''})

  useEffect(() => {
    if(Object.keys(selectedBook).length !== 0){
      seteditBook({...selectedBook})
    }
  }, [selectedBook])

  const handleSubmit = () => {
    handleSaveEdit(editBook)
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
        <p className="modal-card-title">Edit Book</p>
        <button onClick={handleClose}  className="delete" aria-label="close"></button>
      </header>
      <section  className="modal-card-body">
        <form >
        <div className="field">
          <label className="label">Book Title</label>
          <div className="control">
            <input className="input" type="text" value={editBook.title} onChange={(e)=>{ seteditBook({...editBook, title: e.target.value})}} placeholder="Frodo Potter"/>
          </div>
          <p className="help">Cannot be empty</p>
        </div>

        <div className="field">
          <label className="label">Author</label>
          <div className="control">
            <input className="input" type="email" value={editBook.author} onChange={(e)=>{ seteditBook({...editBook, author: e.target.value})}} placeholder="John Doe"/>
          </div>
          <p className="help">Cannot be empty</p>
        </div>
      </form>
      </section>
      <footer className="modal-card-foot">
        <button disabled={!editBook.title  || !editBook.author } onClick={handleSubmit} className="button is-success">Update</button>
        <button onClick={handleClose} className="button">Cancel</button>
      </footer>
    </div>
  </div>
  )
}

export default EditBook