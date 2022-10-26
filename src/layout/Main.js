import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import LeftSideNav from '../Pages/Courses/LeftSideNav/LeftSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>

            <Outlet></Outlet>
        </div>
    );
};

export default Main;