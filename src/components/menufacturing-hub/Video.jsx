import React from 'react'

function Video() {
    return (
        <section>
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-auto "
            >
                <source
                    src="/video/video.mp4"
                    type="video/mp4"
                />
            </video>
        </section>
    )
}

export default Video;
