import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    
    return (
        <div className='linkbar'>
            <p className='f3'>
                {'🔎 Detect faces from your Image'}
            </p>

            <div>
                <input className='f4 pa2 w-70 center' type="text" placeholder='Paste your image URL here!' onChange={onInputChange} />
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit} >Detect</button>
            </div>


        </div>

    );
}

export default ImageLinkForm;