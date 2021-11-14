import React,{ useState } from 'react'
import ReactPlayer from 'react-player'
import  { Navbar } from './Navbar';
import '../css/Video.css'


export const Videos = ({user})=>{
    return(
        <div>
            <Navbar user={user} />
            <h1>Videos</h1>
            <div className="VideoContainer">
            <ReactPlayer 
            controls
            width={"100%"}
            height={"100%"}
            url='https://firebasestorage.googleapis.com/v0/b/first-ecommerce-c5c38.appspot.com/o/videos%2FGIEP8987%20(1).MP4?alt=media&token=d84ebcda-1dcc-4db6-a771-d0763515316c' />
            </div>
        </div>
    );
} 

