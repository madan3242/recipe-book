import React from 'react'

const Search = ({searchItems}) => {
  return (
    <>
        <div class="container my-3">
            <div className="row">
                <div className="col-lg-8 mx-auto">
                <form class="d-flex" role="search">
                    <input class="form-control me-2 p-3" type="search" placeholder="Search" aria-label="Search" onChange={(e) => searchItems(e.target.value)} />
                    <button class="btn btn-outline-success px-4" type="submit">Search</button>
                </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Search