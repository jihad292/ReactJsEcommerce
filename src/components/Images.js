import React, { useState } from 'react';
import ImageGrid from './ImageGrid';
import { Navbar } from './Navbar';
import Modal  from './Modal';
export const Images = ({user})=>{
    const [selectedImg, setSelectedImg] = useState(null);
    return(
        <div>
            <Navbar user={user} />
            <h1>Images</h1>
        <div className='wrapperr'>
            <ImageGrid setSelectedImg={setSelectedImg} />
            { selectedImg && (
            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
            )}
        </div>
        </div>
    );
} 