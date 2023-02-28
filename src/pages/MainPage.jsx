import React from 'react';
import VideoBlock from "../components/Videoblock/VideoBlock";
import PostList from "../modules/PostList";

function MainPage(props) {

    const posts = []
    for(let i = 0; i < 5; i++){
        posts.push({
            src:"djfk" ,
            title:"lorem ipus"+ i.toString(),
            description:"sdjkflj"
        })
    }

    return (
        <main>
            <VideoBlock src="https://player.vimeo.com/video/757646182?background=1"/>
            <div className="items_block">
                <div className="container">
                    <h1>header of container</h1>
                    <PostList posts={posts}/>
                </div>
            </div>
            <div className="section_block"></div>
            <div className="brands_block"></div>
            <div className="updates_block"></div>
        </main>
    );
}

export default MainPage;