import React from 'react'
import ReactPlayer from 'react-player'
import  { Navbar } from './Navbar';
import '../css/Video.css'
import Select from 'react-select';
import { useHistory } from 'react-router';
     

export const VideosArmsWorckout = ({user})=>{
    const history = useHistory();
    const workoutType = [
        {
            value:1,
            label:"Legs workout"
        },
        {
            value:2,
            label:"Back workout"
        },
        {
            value:3,
            label:"Arms workout"
        },
        {
            value:4,
            label:"Chest workout"
        }
    ]
    let test = null;

    const changeHndler = value =>{
        test = value.value;
        if (test === 1){
            history.push('/videos/LegsWorckout');
        }
        if(test === 2){
            history.push('/videos/BackWorckout');
        }
        if(test === 3){
            history.push('/videos/ArmsWorckout');
        }
        if(test === 4){
            history.push('/videos/ChestWorckout')
        }
    }
    return(
        
        <div>
            <Navbar user={user} />
            <h1>Videos</h1>
            <div className="generalDescription">
                <p>
                Whether you’re a girl or a boy, young or old, it’s your decision to change yourself and start your 
                transformation. Wissam, Macha and Lynn are 3 people with different age, shape and gender, but they 
                share the same passion: having a goal and aiming to reach it! Giving up is not an option and moving 
                forward is the only way for them💪🏽
                </p>
            </div>
                <Select 
                    
                    options={workoutType}
                    onChange={(value)=>changeHndler(value)}
                />
            <div className="videosDiv">
                <div className="VideoContainer">
                <ReactPlayer 
                controls
                width={"100%"}
                height={"400px"}
                url='https://firebasestorage.googleapis.com/v0/b/first-ecommerce-c5c38.appspot.com/o/videos%2FMacha%20Arms.mp4?alt=media&token=aa4b2f51-5df9-450c-b4ef-a958f2ce1277' />
                </div>

                <div className="VideoContainer">
                <ReactPlayer
                controls
                width={"100%"}
                height={"400px"}
                url='https://firebasestorage.googleapis.com/v0/b/first-ecommerce-c5c38.appspot.com/o/videos%2FMacha%20Arms2.mp4?alt=media&token=16609e99-9a38-406e-b3cc-df6fa4747260' />
                </div>

                </div>

                <div className="videosDiv">
                <div className="VideoContainer">
                <ReactPlayer 
                controls
                width={"100%"}
                height={"400px"}
                url='https://firebasestorage.googleapis.com/v0/b/first-ecommerce-c5c38.appspot.com/o/videos%2FWissam%20Arms.mp4?alt=media&token=4092195b-3352-4956-9b0a-af57ad7f509d' />
                </div>

                </div>

                <div className="categorylDescription">
                <p>
                Arms day is not rest day! You know, you can be proud of yourself for lifting some weights but that won’t 
                be comparable to the feeling of crazy burning in your muscles as you grind out those final reps!💪🏽
                </p>
            </div>
            </div>
    );
} 

