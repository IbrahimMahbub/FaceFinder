import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
    if (isSignedIn) {
        return (
            <nav className='Navulv'>
                <p className='f3 link dim black underline pa3 pointer' onClick={ () => onRouteChange('signout')}>Sign Out</p>
            </nav>
        );
        
    } else{
        return (
            <nav className='Navulv'>
                <p className='f3 link dim black underline pa3 pointer' onClick={ () => onRouteChange('signin')}>Signin</p>
                <p className='f3 link dim black underline pa3 pointer' onClick={ () => onRouteChange('register')}>Register</p>
            </nav>
        );

    }

}

export default Navigation;