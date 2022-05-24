import React from 'react';
import {useNavigate} from 'react-router-dom';
import './menu-item.styles.scss'
const MenuItem = ({title ,linkUrl, imageUrl, subtitle,size}) => {
    const navigate = useNavigate();
    return (
        <div className = {`${size} menu-item`} onClick={() => {navigate(linkUrl);}} >
            <div className = 'background-image' style = {{
            backgroundImage: `url(${imageUrl})`
        }} ></div>
            <div className = 'content'>
                <h1 className ='title'>{title.toUpperCase()}</h1>
                <h1 className ='subtitle'>{subtitle}</h1>
            </div>
        </div>
);
}

export default MenuItem;