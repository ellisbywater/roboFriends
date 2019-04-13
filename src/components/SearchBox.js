import React from 'react'

const SearchBox = ({searchChange, searchField}) => {
    return (
        <div className='pa2 ma2'>
             <input
                 aria-label='Search Robots'
                className='pa3 br2 tc ba b--green bg-lightest-blue'
                type="search"
                placeholder="Search Robots"
                onChange={searchChange}
                 />
        </div>    
    )
}

export default SearchBox