import React from 'react'; 
import Nav from '../components/Nav';

const AboutPage = () => {
    return(
        
        <div>
            {window.location.pathname !== '/' && <Nav />}
            <div style={{ textAlign: 'center' }}>
            <h1>About</h1>
            <h2>HairLine includes an array of 
                hairstyles that will help you choose the right hairstyle for you based on custom tags. Just choose your tags and view the generated styles!</h2>
        </div>
        </div>
    );
};

export default AboutPage;