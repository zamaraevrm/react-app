import React from 'react';


function VideoBlock({src, ...props}) {
    return (
        <div className="video_block">
            <section>
                <iframe id="video-hero-12080"
                        src={src}
                        allow="autoplay; fullscreen"
                >
                </iframe>
            </section>
        </div>
    );
}

export default VideoBlock;