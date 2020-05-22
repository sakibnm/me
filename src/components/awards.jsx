import React, { Component } from 'react'
import FeatherIcon from 'feather-icons-react';
export default class Home extends Component {
    render(){
        return (
            <div id="layoutDefault_awards" className="container">
                <section className="bg-white py-10">
                    {/* Honors and Awards..   TOBE ADDED */}
                    {/*<div className="svg-border-rounded text-light">*/}
                    {/*    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="currentColor"><path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0" /></svg>*/}
                    {/*</div>*/}
                    <hr className="my-5"/>
                    <div className="float-left" ><FeatherIcon className="icon-stack-heading" icon="award" size={96}></FeatherIcon></div>
                    <div className="mb-4 text-headline" style={{fontWeight: "bold"}}><font size="5">Honors and Awards</font></div>
                    <div className="card">
                        <div className="card-body">
                            <div className="float-left"><FeatherIcon className="icon-stack-listing" icon="chevrons-right"/></div>
                            <div style={{fontWeight: "bold"}}>&emsp;2020: Outstanding Teaching Assistant Award.</div>
                            <div className="float-left icon-stack-listing"></div>
                            <p><font size="2">&emsp;Awarded by the College of Computing and Informatics, UNC Charlotte.</font></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="float-left"><FeatherIcon className="icon-stack-listing" icon="chevrons-right"/></div>
                            <div style={{fontWeight: "bold"}}>&emsp;2018: MUM 2018 Best Paper Honorable Mention Award.</div>
                            <div className="float-left icon-stack-listing"></div>
                            <p><font size="2">&emsp;Mobile Users as Advertisers: User Perceptions of Product Sensitivity, Exposure, and Public Influence.</font></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="float-left"><FeatherIcon className="icon-stack-listing" icon="chevrons-right"/></div>
                            <div style={{fontWeight: "bold"}}>&emsp;2014: ICT Fellowship.</div>
                            <div className="float-left icon-stack-listing"></div>
                            <p><font size="2">&emsp;Ministry of Posts, Telecommunications and Information Technology, Government of the People’s Republic of Bangladesh.</font></p>
                        </div>
                    </div>
                </section>

            </div>

        );
    }
}
