import React, { Component } from 'react'
import FeatherIcon from 'feather-icons-react';

export default class Home extends Component {
    render() {
        return (
        <div id="layoutDefault_content">
                <main>
                    <nav className="navbar navbar-marketing navbar-expand-lg fixed-top bg-dark navbar-light">
                        <div className="container">
                            <a className="navbar-brand text-gray-100" href="index.html">Hi I'm Sakib!</a><button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation"><i className="fa fa-bars"></i></button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto mr-lg-5">
                                    <li className="nav-item">
                                        <a className="nav-link text-gray-200" href="#layoutDefault_content" >About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-gray-200" href="#updates" role="button">Updates</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-gray-200" href="#layoutDefault_teaching" role="button">Teaching</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-gray-200" href="#layoutDefault_publications" role="button">Publications</a>
                                    </li>
                                </ul>
                                <a className="mdc-button--raised btn-primary btn rounded-pill px-4 ml-lg-4" href="https://drive.google.com/open?id=1S-OIn2e5hnZjPorwJu9NDUN15SVXvQfE" target="_blank">My CV<i className="fas fa-arrow-right ml-1" /></a>
                            </div>
                        </div>
                    </nav>
                    <div className="container-vspace-8">

                    </div>
                    <header className="page-header bg-white20">
                        <div className="page-header-content">
                            <div className="container mdc-elevation--z10">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4">
                                        <img className="propic mdc-elevation--z8" src="assets/img/avataaars.jpg"/>
                                    </div>
                                    <div className="col-lg-8 text-left">
                                        <h1 className="page-header-title">Sakib Miazi</h1>
                                        <p className="page-header-text">Ph.D. Candidate @ <a className="navbar-brand" href="https://www.uncc.edu" target="blank">UNC Charlotte</a></p>
                                        <p className="page-header-content justify-content-center">I am a Ph.D. candidate and usable privacy and security researcher at UNC Charlotte. My research is focused on designing privacy-preserving localized review systems utilizing Bluetooth Low Energy Beacons technology. I use mixed-methods to understand how users take their privacy decisions in the pervasive setting to design and develop privacy-preserving guidelines for BLE-based review systems.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<div className="svg-border-rounded text-light">*/}
                        {/*    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="#c5ccd6"><path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0" /></svg>*/}
                        {/*</div>*/}
                    </header>
                    {/*<section className="bg-gray-400 py-10">*/}
                    {/*    /!* Honors and Awards..   TOBE ADDED *!/*/}
                    {/*    /!*<div className="svg-border-rounded text-light">*!/*/}
                    {/*    /!*    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="currentColor"><path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0" /></svg>*!/*/}
                    {/*    /!*</div>*!/*/}
                    {/*    */}
                    {/*</section>*/}
                </main>
        </div>
        );
    }
}