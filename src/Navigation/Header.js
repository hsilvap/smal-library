import React from 'react'

const Header = ({handleClick,count,filter,setfilter}) => {
  return(
      <header className="App-header ">
        <nav className="level container">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-5" style={{color:'white'}}>
              <strong style={{color:'white'}}> {count}</strong> books
            </p>
          </div>
          <div className="level-item">
            <div className="field has-addons">
              <p className="control">
                <input className="input" type="text" placeholder="Find a book by title" value={filter} onChange={(e)=>{setfilter(e.target.value)}}/>
              </p>
              <p className="control">
                <button className="button">
                  Search
                </button>
              </p>
            </div>
          </div>
        </div>

        <div className="level-right">
          <p className="level-item"><a className="button is-success" onClick={handleClick}>New</a></p>
        </div>
      </nav>
    </header>
  )
}

export default Header;