import React from 'react';


function PostItem({post}) {
    return (
        <article>
            <a>
                <div className="img">
                    <img src={post.src}/>
                </div>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
            </a>
        </article>
    );
}

export default PostItem;