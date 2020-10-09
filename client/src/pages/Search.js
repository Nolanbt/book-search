import React, {useState, useEffect} from "react";
import API from "../utils/API"
import Book from "../components/Book"

function Search() {
    const [books, setBooks] = useState([]);
    const [bookSearch, setBookSearch] = useState("");
    const [savedBooks, setSavedBooks] = useState([])

    const handleInputChange = event => {
        const { value } = event.target;
        setBookSearch(value);
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        API.getBooks(bookSearch)
        .then(({data})=> {
            setBooks(data.items.map(book => ({
                author: book.volumeInfo.authors,
                description: book.volumeInfo.description,
                image: book.volumeInfo.imageLinks.thumbnail,
                link: book.volumeInfo.canonicalVolumeLink,
                title: book.volumeInfo.title
            })))
        })
        .catch(err => console.log(err))
    };

    const handleSave = (event) => {
        console.log()
    };

    useEffect(()=>{
        console.log(books)
    },[books])

    return (
        <div>
            <div className="jumbotron jumbotron-fluid text-center w-75 mx-auto border">
                <div className="container">
                    <h1 className="display-4">Google Book Search</h1>
                    <p className="lead">Search for and save books of interest.</p>
                </div>
            </div>
            <div className="container w-75 border">
                <form className="my-2">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Search Book Here" 
                        name="BookSearch"
                        onChange={handleInputChange}
                        value={bookSearch}
                        />
                </form>
                <button onClick={handleFormSubmit} type="submit" className="btn btn-primary my-2">Submit</button>
            </div>
            <div className="container w-75 mt-3 border">
                {
                    books.map((book,index) => (
                        <Book
                            value={book.title}
                            handleSave={handleSave}
                            key={index}
                            author={book.author} 
                            description={book.description} 
                            title={book.title} 
                            image={book.image} 
                            link={book.link}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Search;