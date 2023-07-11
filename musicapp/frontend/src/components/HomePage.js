import React, { Component } from 'react';
import {render} from 'react-dom';
import CreateRoomPage from './CreateRoomPage';
import RoomJoinPage from './RoomJoinPage';
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from "react-router-dom";


export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Routes>
                    <Route exact path="/" element={<HomePage/>}/>
                    <Route path="/join" component={RoomJoinPage} element={<RoomJoinPage/>}/>
                    <Route path="/create" component={CreateRoomPage} element={<CreateRoomPage/>}/>
                </Routes>
            </Router>
        );
    }
}