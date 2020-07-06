import React, { useContext } from 'react'
import { Input } from 'reactstrap'
import { PostContext } from '../providers/PostProvider'

const Search = () => {
    const { searchPosts } = useContext(PostContext)


    const handleChange = (e) => {
        searchPosts(e.target.value)
    }

    return (
        <div className='container mt-1'>
            <Input type='text' onChange={handleChange} placeholder="Search Posts" />
        </div>
    )
}

export default Search