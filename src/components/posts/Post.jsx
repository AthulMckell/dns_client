import React from 'react';
import "./post.css";

function Post(props) {
    return (
        <div>
           <div className="postInfo">   
            <span className="postcat">BMW</span>
           </div>
           <span className="postitle">Product 1</span>
           <button className="editbutton">edit</button>
           <button className="button">delete</button>
           <hr/>

        </div>
    );
}

export default Post;