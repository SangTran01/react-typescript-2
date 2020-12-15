import React from 'react';
import './homepage.style.scss';

export const HomePage: React.FC<{}> = () => {
    return (
        <div className="homepage">
            <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Hats</h1>
                    <h1 className="title">Shop Now</h1>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Tops</h1>
                    <h1 className="title">Shop Now</h1>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Shoes</h1>
                    <h1 className="title">Shop Now</h1>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Women</h1>
                    <h1 className="title">Shop Now</h1>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Men</h1>
                    <h1 className="title">Shop Now</h1>
                </div>
            </div>
            </div>
        </div>
    );
}