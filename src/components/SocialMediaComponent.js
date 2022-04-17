import React from 'react';
import "./SocialMediaComponent.css";

const SocialMediaComponent = ({ children }) => {
    return <div className='socialmediacomponent'>
        <p className="ancillary">joshua.tomi1@gmail.com</p>
        <p className="ancillary"><a href="https://wwww.linkedin.com/in/tomi-joshua">www.linkedin.com/in/tomi-joshua</a></p>
        <p className="ancillary"><a href="https://www.behance.net/tomijodesigns">www.behance.net/tomijodesigns</a></p>
        <p className="ancillary"><a href="https://www.github.com/notorioustomijo">www.github.com/notorioustomijo</a></p>
    </div>
}

export default SocialMediaComponent;