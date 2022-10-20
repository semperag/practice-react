import { getByPlaceholderText } from '@testing-library/react';
import {useState, useEffect} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    //let name = 'mario';

    // Fetching from the database return values to our assigned variables
    const {data: blogs, isPending, error} =  useFetch('http://localhost:8000/blogs');

    const [name, setName] = useState('mario');

    // Need to delete specific blog which can be done with 'id'
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        //setBlogs(newBlogs)
    }    

    const [age, setAge] = useState(25);

    const handleClick = (e) => {
        console.log("'hello ninjas", e);
        setName('luigi');
        setAge(30);
    }

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
    }

    return (
        <div className="home">

            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}

            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <p>{name} is {age} years old</p>
            <button onClick={(e) => {
                handleClickAgain('mario', e)
            }}>Click me again</button>

            {/* Passing blogs from databse either untouched or filtered to display in BlogList*/}
            {blogs && <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}/>}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author == 'mario')} title="Mario's blogs"/>}
        </div>
    );
}

export default Home;