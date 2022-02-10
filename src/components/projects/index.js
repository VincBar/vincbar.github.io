import React, { Component } from 'react'
import './projects.css'
import h4g from "../../img/hack4good_preview.png"
import riai from "../../img/riai_preview.png"
import polyhack from "../../img/polyhack_sbb_preview.png"
import { ReactComponent as NameLogo } from '../../img/project_header.svg';


export class ProjectPage extends Component {
    render() {
        return (
            <div className='data-main'>
                <div className='data-upper'>
                    <NameLogo className="header-logo" />
                    {/* <div className='data-empty'>

                    </div>
                    <div className='data-header'>

                    </div>
                    <div className='data-empty'>

                    </div> */}
                </div>
                <div className='data-lower  snaps-inline'>
                    <div className='scroll-element'>
                        <h2 className='scroll-header'>Hack4Good</h2>
                        <hr />
                        <img className="scroll-image" src={h4g} />
                        <p className='description-paragraph'>
                            “Nowcasting” the impact of natural disasters on the amount of displaced people for more efficient disaster relief planning
                        </p>
                    </div>

                    <div className='scroll-element'>
                        <h2 className='scroll-header'>PolyHack 2020</h2>
                        <hr />
                        <img className="scroll-image" src={polyhack} />
                        <p className='description-paragraph'>
                            Python based (Dash) webapp that analyses and visualizes conflicts in the construction side planning of SBB.  The solution won the first price.
                        </p>
                    </div>
                    <div className='scroll-element'>
                        <h2 className='scroll-header'>Reliable AI</h2>
                        <hr />
                        <img className="scroll-image" src={riai} />
                        <p className='description-paragraph'>
                            Efficient robustness verification utilizing convex relaxations and zonotypes on L_inf norms
                        </p>
                    </div>
                    <div className='scroll-element'>
                        <h2 className='scroll-header'>Reliable AI</h2>
                        <hr />
                        <img className="scroll-image" src={h4g} />
                        <p className='description-paragraph'>
                            Efficient robustness verification utilizing convex relaxations and zonotypes on L_inf norms
                        </p>
                    </div>
                </div>
            </div >
        )
    }
}