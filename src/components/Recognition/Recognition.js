import React from 'react';
import './Recognition.css';






const Recognition = ({ imageURL }) => {

    
    return (
        <div className='center imgcontainer'>
            <img src={imageURL} alt="" />
            
        </div>

    );
}

export default Recognition;