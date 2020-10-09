import React from "react";
import SavedBook from "../components/SavedBook";

function Saved() {
    return(
        <div>
            <div className="jumbotron jumbotron-fluid text-center w-75 mx-auto border">
                <div className="container">
                    <h1 className="display-4">Google Book Search</h1>
                    <p className="lead">Saved Books</p>
                </div>
            </div>
            <div className="container w-75 mt-3 border">
                <SavedBook />
            </div>
        </div>
    );
};

export default Saved;