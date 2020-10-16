import React from "react";

function SavedBook (props) {
    return(
        <div className="row border my-1">
            <div className="col-8">
                <h6>{props.title} by {props.author}</h6>
                <p>{props.description}</p>
            </div>
            <div className="col-4">
                <div>
                    <a href={props.link} target="blank"><button  type="button" className="btn btn-danger">View</button></a>
                    <button  type="button" className="btn btn-danger" onClick={()=>props.handleDelete(props.id)}>Delete</button>
                </div>
                <img alt="book image" src={props.image}></img>
            </div>
        </div>
    );
}

export default SavedBook;