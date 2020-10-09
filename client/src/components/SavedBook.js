import React from "react";

function SavedBook () {
    return(
        <div className="row border my-1">
            <div className="col-8">
                <h6>Title By Author</h6>
                <p>Description</p>
            </div>
            <div className="col-4">
                <div>
                    <button  type="button" className="btn btn-danger">View</button>
                    <button  type="button" className="btn btn-danger">Delete</button>
                </div>
                <img alt="book image" ></img>
            </div>
        </div>
    );
}

export default SavedBook;