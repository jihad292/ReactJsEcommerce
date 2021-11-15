import React from 'react'
import  { Navbar } from './Navbar';
import '../css/Video.css'
import Select from 'react-select';
import { useHistory } from 'react-router';
import  GymGif  from '../images/wide-grip-standing-barbell-curls.gif';


export const Videos = ({user})=>{
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

    const changeHandler = value =>{
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
                    onChange={(value)=>changeHandler(value)}
                />
            <div className="optionChoose">
                <p>
                    Please choose the worckout type.
                </p>
            </div>
            <div className="gifDiv">
                <img  src={GymGif} alt="GymGif" />
            </div>
            </div>
    );
} 

