import React from 'react';
import './menu-item.styles.scss'
const MenuItem = ({title , imageUrl, subtitle,size}) => (
            <div className = {`${size} menu-item`}>
                <div className = 'background-image' style = {{
                backgroundImage: `url(${imageUrl})`
            }} ></div>
                <div className = 'content'>
                    <h1 className ='title'>{title.toUpperCase()}</h1>
                    <h1 className ='subtitle'>{subtitle}</h1>
                </div>
            </div>
);

export default MenuItem;