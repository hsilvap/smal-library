import React from 'react'

const Book = ({title, author, uid, deleteBook,editBook}) => {

  return(
  <div  className="column is-3">
    <div className="card">
      <div className="card-content">
        <p className="title">
          {title}
        </p>
        <p className="subtitle">
          <i>By: </i>{author}
        </p>
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">
          <button className="button is-light" onClick={()=>editBook(uid)}>Edit</button>
        </p>
        <p className="card-footer-item">
          <button className="button is-danger" onClick={()=> deleteBook(uid)}>Delete</button>
        </p>
      </footer>
    </div>
  </div>
  )
}

export default Book