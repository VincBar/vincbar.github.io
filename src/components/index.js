import { Routes, Route } from 'react-router-dom';
import React, { Component } from 'react'
import { WelcomePage } from './welcome';
import { AboutPage } from './about';
import { ProjectPage } from './projects';

export class Navigation extends Component {
    render() {
        return (
            <Routes>
                <Route path='/' element={<WelcomePage />} />
                <Route path='about' element={<AboutPage />} />
                <Route path='projects' element={<ProjectPage />} />
            </Routes>
        );
    }
}