import React, { Component } from 'react'
import FeatherIcon from 'feather-icons-react';
export default class Home extends Component {
    render() {
        return (
            <div className="default_contact">
                <section className="bg-light py-10">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <div className="row">
                                    <div className="col justify-content-center">
                                        <div className="card">
                                            <div className="card-body">
                                                <div>
                                                    <h6>Contact me</h6>
                                                </div>
                                                <div className="small">
                                                    <div className="icon-stack"><FeatherIcon icon="mail" size="48"/></div>
                                                    <a href="mailto:mmiazi@uncc.edu" target="blank">mmiazi@uncc.edu</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="svg-border-rounded text-dark">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none"
                             fill="currentColor">
                            <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"/>
                        </svg>
                    </div>
                </section>
            </div>
        )
    }
}