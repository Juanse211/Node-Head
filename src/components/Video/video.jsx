import React from 'react';
import videoImport from '../../video.mp4'
import poster from '../../kidAmnesiaPoster.jpg'

export const VideoHead = () => {
  return (
    <video id='video-head' src={videoImport} poster={poster} autoPlay loop muted controls />
  )
}