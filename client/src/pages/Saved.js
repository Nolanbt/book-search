import React, { useEffect, useState } from "react";
import SavedBook from "../components/SavedBook";
import API from "../utils/API";

function Saved() {
    const [books, setBooks] = useState([])

    useEffect(()=>{
        API.getBooks()
            .then(({data}) => {
                setBooks(data);
                console.log(data);
            })
            .catch(err => console.log(err));
    },[books])

    const handleDelete = (id) =>{
        console.log(id)
        API.deleteBook(id)
        .then(res=> console.log(res))
        .catch(err=> console.log(err))
    }

    return(
        <div>
            <div className="jumbotron jumbotron-fluid text-center w-75 mx-auto border">
                <div className="container">
                    <h1 className="display-4">Google Book Search</h1>
                    <p className="lead">Saved Books</p>
                </div>
            </div>
            <div className="container w-75 mt-3 border">
            {
                    books.map((book,index) => (
                        <SavedBook
                            key={index}
                            handleDelete={handleDelete}
                            author={book.author} 
                            description={book.description} 
                            title={book.title} 
                            image={book.image} 
                            link={book.link}
                            id={book._id}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Saved;