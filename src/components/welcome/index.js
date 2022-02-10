import React, { Component } from 'react'
import './welcome.css'
import logo_large from "../../img/logo_website_large.png"
import { ReactComponent as ReactLink } from '../../img/linkedin.svg';
import { ReactComponent as ReactHub } from '../../img/github.svg';
import { ReactComponent as ReactXing } from '../../img/xing.svg';

export class WelcomePage extends Component {
    render() {
        return (
            <div className='welcome-main'>
                <div className='welcome-statement'>
                    <p className='wise-paragraph'>First, <span class="bolded">understand</span> the problem</p>
                    <p className='wise-paragraph-2'>Then, <span class="bolded">understand</span> the data</p>
                </div>
                <div className='welcome-logo'>
                    <div className='welcome-logo-content'>
                        <img className='welcome-logo-img' src={logo_large} alt="logo" href="/" />
                    </div>
                    <div className='welcome-logo-connect'>
                        <a href='https://www.linkedin.com/in/vincent-bardenhagen-331911115/'>
                            <ReactLink />
                        </a>
                        <a href='https://github.com/VincBar'>
                            <ReactHub />
                        </a>
                        <ReactXing />
                    </div>
                </div>
            </div>
        )
    }
}