import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = ({search,everything,categoryNews}) => {
  
  const [input,setInput]=useState('')
  const handleSubmit=(e)=>{
    e.preventDefault()
    search(input)
  }
  const handleEverything=(e)=>{
    e.preventDefault();
    everything()
  }
  const categories=['business','entertainment','general','health','science','sports','technology'];

  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" onClick={handleEverything}>Daily Mail</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/about">About</Link>
      </li>
      <li>
        <Link className='nav-link active' aria-current='page' to="/layout">Layout</Link>
      </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
           <ul className="dropdown-menu">
            {
              categories.map((category,idx)=>(
                <li key={idx} ><a className="dropdown-item" href="#" onClick={()=>
                  categoryNews(category)
                }>{category.charAt(0).toUpperCase()+category.slice(1)}</a></li>
              ))
            }
          </ul>
        </li>
        
      </ul>      
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
        value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar