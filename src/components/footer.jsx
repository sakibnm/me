import React, { Component } from 'react'
import FeatherIcon from 'feather-icons-react';
export default class Home extends Component {
    render() {
        return (

            <div id="layoutDefault_footer">
                <footer className="footer pt-10 pb-5 mt-auto bg-dark footer-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="footer-brand">Nazmus Sakib Miazi (mmiazi@uncc.edu)</div>
                                <div className="icon-list-social mb-5">
                                    <a className="icon-list-social-link" href="mailto:mmiazi@uncc.edu">
                                        <FeatherIcon className="icon-stack-social" icon="mail"></FeatherIcon>
                                    </a>
                                    <a className="icon-list-social-link" href="javascript:void(0);">
                                        <i className="fab fa-linkedin" />
                                    </a>
                                    <a className="icon-list-social-link" href="javascript:void(0);">
                                        <i className="fab fa-github" />
                                    </a>
                                    <a className="icon-list-social-link" href="javascript:void(0);">
                                        <i className="fab fa-instagram" />
                                    </a>
                                    <a className="icon-list-social-link" href="javascript:void(0);">
                                        <i className="fab fa-500px" />
                                    </a>
                                    <a className="icon-list-social-link" href="javascript:void(0);">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <hr className="my-5" />
                        <div className="row align-items-center">
                            <div className="col-md-6 small">Copyright © Sakib Miazi 2020</div>
                            <div className="col-md-6 text-md-right small">Powered by React and StartBootstrap</div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}