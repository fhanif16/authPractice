import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Card from '../Card/Card';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;