import React from 'react'

import videoWine from './video.mp4'

const BackgroundVideo = () => {
    return (
        <div>
            <video autoPlay='autoplay' loop='loop' muted style={{ maxHeight : '100%', width: '100%', overflow: 'hidden'}}>
                <source src={videoWine} type='video/mp4'/>
            </video>
        </div>
    )
}

export default BackgroundVideo