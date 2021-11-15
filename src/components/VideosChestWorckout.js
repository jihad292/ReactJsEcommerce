import React from 'react'
import ReactPlayer from 'react-player'
import  { Navbar } from './Navbar';
import '../css/Video.css'
import Select from 'react-select';
import { useHistory } from 'react-router';
     

export const VideosChestWorckout = ({user})=>{
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
                url='https://firebasestorage.googleapis.com/v0/b/first-ecommerce-c5c38.appspot.com/o/videos%2FLynn%20Chest.mp4?alt=media&token=743911c7-811d-4793-91d9-e2dc29382d83' />
                </div>

                <div className="VideoContainer">
                <ReactPlayer
                controls
                width={"100%"}
                height={"400px"}
                url='https://firebasestorage.googleapis.com/v0/b/first-ecommerce-c5c38.appspot.com/o/videos%2FMacha%20Chest.mp4?alt=media&token=7a75a817-65d1-46c0-ae85-6b0e489c87cc' />
                </div>

                </div>

                <div className="videosDiv">
                <div className="VideoContainer">
                <ReactPlayer 
                controls
                width={"100%"}
                height={"400px"}
                url='https://firebasestorage.googleapis.com/v0/b/first-ecommerce-c5c38.appspot.com/o/videos%2FWissam%20Chest.mp4?alt=media&token=33cda3ae-80b9-4d40-a040-479a72ff36fc' />
                </div>

                </div>

                <div className="categorylDescription">
                <p>
                It’s earned not given! Girls, you too can crush chest day and we got proof! Always remember 80% of 
                success is showing up😉💪🏽
                </p>
            </div>
            </div>
    );
} 

