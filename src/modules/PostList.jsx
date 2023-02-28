import React from 'react';
import {TransitionGroup} from "react-transition-group";
import PostItem from "../components/PostItem";

function PostList({posts}) {

    return (
        <div className="grid">
           <TransitionGroup>
               {posts.map((post)=>
                   <PostItem post={post}/>
               )}
           </TransitionGroup>
        </div>
    );
}

export default PostList;