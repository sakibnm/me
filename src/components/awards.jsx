import React, { Component } from 'react'

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
                    <h4 className="mb-4">
                        <div className="icon-stack bg-transparent mr-2"><i data-feather="circle"></i></div>
                        Honors & Awards
                    </h4>

                </section>
            </div>
        );
    }
}