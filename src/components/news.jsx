import React, { Component } from 'react'
import FeatherIcon from 'feather-icons-react';
export default class Home extends Component {
    render(){
        return (
            <div className="container">
                <div id="updates" className="container-vspace-6">

                </div>
                <section className="bg-white py-10">
                    {/* Honors and Awards..   TOBE ADDED */}
                    {/*<div className="svg-border-rounded text-light">*/}
                    {/*    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="currentColor"><path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0" /></svg>*/}
                    {/*</div>*/}
                    <hr className="my-5"/>
                    <div className="float-left" ><FeatherIcon className="icon-stack-heading" icon="globe" size={96}></FeatherIcon></div>
                    <div className="mb-4 text-headline" style={{fontWeight: "bold"}}><font size="5">News and Updates</font></div>

                    <div className="card">
                        <div className="card-body">
                            <div className="float-left"><FeatherIcon className="icon-stack-listing" icon="chevrons-right"/></div>
                            <div style={{fontWeight: "bold"}}>&emsp;October 26, 2019: Dissertation Proposal Defence.</div>
                            <div className="float-left icon-stack-listing"></div>
                            <p><font size="2">&emsp;Exploring the Perceptions of a Users-as-Beacons System by Developing and Deploying a Real-Life Prototype.</font></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="float-left"><FeatherIcon className="icon-stack-listing" icon="chevrons-right"/></div>
                            <div style={{fontWeight: "bold"}}>&emsp;August 19, 2019: Presented paper in IEEE COMPSAC.</div>
                            <div className="float-left icon-stack-listing"></div>
                            <p><font size="2">&emsp;Privacy Is The Best Policy: A Framework for BLE Beacon Privacy Management.</font></p>
                        </div>
                    </div>
                </section>

            </div>

        );
    }
}