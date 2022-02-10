import React, { Component } from 'react'
import './about.css'
import portrait from "../../img/portrait.png"
import { ReactComponent as NameLogo } from '../../img/name_logo.svg';

export class AboutPage extends Component {
    render() {
        return (
            <div className='proj-main'>
                <div className='proj-column-pict'>
                    <div className='proj-name'>
                        <NameLogo className="proj-name-logo" />
                    </div>
                    <div className='proj-image'>
                        <img className="portrait-image" src={portrait} />
                    </div>
                </div>
                <div className='proj-column-gen'>
                    <div className='proj-light1'>
                        <h2>Education</h2>
                        <div className='items'>
                            <p>Statistics (MSc ETH Zürich)</p>
                            <p>Physics (BSc Uni Tübingen)</p>
                            <p>Economics (BSc Uni Tübingen)</p>
                        </div>
                    </div>
                    <div className='proj-dark1'>
                        <h2>Interests</h2>
                        <div className='items'>
                            <p>Data Analysis </p>
                            <p>Design </p>
                            <p>Development Cooperation</p>
                        </div>
                    </div>
                </div>
                <div className='proj-column-gen'>
                    <div className='proj-dark2'>
                        <h2>Coding Skills</h2>
                        <div className='items'>
                            <p>Python (Deep Learning)</p>
                            <p>Power BI (Data Visualization)</p>
                            <p>React.js (Webdesign)</p>
                            <p>R (Statistics)</p>
                        </div>
                    </div>
                    <div className='proj-light2'>
                        <h2>Projects</h2>
                        <div className='items'>
                            <p>Hack4Good</p>
                            <p>AI &amp; Society</p>
                            <p>Datathon </p>
                            <p>AI Fair</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}