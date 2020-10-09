import React from "react";

function Book (props) {
    return(
        <div className="row border my-1">
            <div className="col-8">
                <h6>{props.title} by {props.author}</h6>
                <p>{props.description}</p>
            </div>
            <div className="col-4">
                <img alt="book image" src={props.image}></img>
                <a href={props.link} target="blank">Link to Google Book</a>
                <button onClick={()=> props.handleSave()} type="button" className="btn btn-danger">Save</button>
            </div>
        </div>
    );
};

export default Book;