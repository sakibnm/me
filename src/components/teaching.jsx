import React, { Component } from 'react'
import FeatherIcon from 'feather-icons-react';

export default class Home extends Component {
    render() {
        return(
            <div className="container">
                <div id="layoutDefault_teaching" className="container-vspace-6">

                </div>

                <hr className="my-5"/>
                <div className="float-left" ><FeatherIcon className="icon-stack-heading" icon="book-open" size={96}></FeatherIcon></div>
                <div className="mb-4 text-headline" style={{fontWeight: "bold"}}><font size="5">Teaching</font></div>
                <div className="container">
                    <div><h4>@Davidson College</h4></div>
                    <div className="row z-1">
                        <div className="col-lg-6 mb-5 mb-lg-n10" data-aos="fade-up" data-aos-delay={100}>
                            <div className="card pricing h-100">
                                <div className="card-body p-3">
                                    {/*<img className="icon-list-social-link float-left teachpic" src="assets/img/teaching/data_structures.png"></img>*/}
                                    <div className="card-title">Data Structures</div>
                                    <div>
                                        <ul>
                                            <li>Teaching CSC221 for Fall 2020.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-vspace-8">

                    </div>
                    <div><h4>@UNC Charlotte</h4></div>
                    <div className="row z-1">
                        <div className="col-lg-6 mb-5 mb-lg-n10" data-aos="fade-up" data-aos-delay={100}>
                            <div className="card pricing h-100">
                                <div className="card-body p-3">
                                    <img className="icon-list-social-link float-left teachpic" src="assets/img/android.png"></img>
                                    <div className="card-title">Android Development</div>
                                    <div>
                                        <ul>
                                            <li>4 semesters as instructor and 3 semesters as Teaching Assistant.</li>
                                            <li>Trained over 600 graduate level students.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-5 mb-lg-n10" data-aos="fade-up" data-aos-delay={100}>
                            <div className="card pricing h-100">
                                <div className="card-body p-3">
                                    <img className="icon-list-social-link float-left teachpic" src="assets/img/ios.png"></img>
                                    <div className="card-title">iOS Development</div>
                                    <div>
                                        <ul>
                                            <li>Two semesters as Teaching Assistant.</li>
                                            <li>Trained over 50 students.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-vspace-8">

                    </div>
                    <div><h4>Before</h4></div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-5">
                            <a className="card lift h-100" href="#!"
                            >
                                <img className="card-img-top" src="assets/img/teaching/Algorithms.gif" alt="..."/>
                                <div className="card-body p-3">
                                    <div className="card-title small mb-0"><bold>Algorithms</bold></div>
                                </div>
                            </a
                            >
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-5">
                            <a className="card lift h-100" href="#!"
                            >
                                <img className="card-img-top" src="assets/img/teaching/c.png" alt="..."/>
                                <div className="card-body p-3">
                                    <div className="card-title small mb-0"><bold>Intro to Programming with C/C++</bold></div>
                                </div>
                            </a
                            >
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-5">
                            <a className="card lift h-100" href="#!"
                            >
                                <img className="card-img-top" src="assets/img/teaching/graphics.gif" alt="..."/>
                                <div className="card-body p-3">
                                    <div className="card-title small mb-0"><bold>Computer Graphics</bold></div>
                                </div>
                            </a
                            >
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-5">
                            <a className="card lift h-100" href="#!"
                            >
                                <img className="card-img-top" src="assets/img/teaching/database.png" alt="..."/>
                                <div className="card-body p-3">
                                    <div className="card-title small mb-0"><bold>Database Systems</bold></div>
                                </div>
                            </a
                            >
                        </div>
                        {/*<div className="col-xl-3 col-lg-4 col-md-6 mb-5">*/}
                        {/*    <a className="card lift h-100" href="#!"*/}
                        {/*    >*/}
                        {/*        <div className="card-flag card-flag-dark card-flag-top-right card-flag-lg">$19</div>*/}
                        {/*        <img className="card-img-top" src="https://source.unsplash.com/MCUOp3o4dgk/800x500"*/}
                        {/*             alt="..."/>*/}
                        {/*        <div className="card-body p-3">*/}
                        {/*            <div className="card-title small mb-0">Assorted Skin Care</div>*/}
                        {/*            <div className="text-xs text-gray-500">Waterlow, CO &middot; 29 minutes ago</div>*/}
                        {/*        </div>*/}
                        {/*    </a*/}
                        {/*    >*/}
                        {/*</div>*/}
                    </div>
                </div>

                {/*<div className="container-vspace">*/}

                {/*</div>*/}
            </div>
        );
    }
}