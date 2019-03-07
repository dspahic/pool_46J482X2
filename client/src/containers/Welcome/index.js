import React, { Component } from 'react';

import mobile from './../../img/welcome-mobile.png';
import logout from './../../img/logout.png';
import picture from './../../img/picture.png';
import video from './../../img/video.png';

import './style.css';

export default class Welcome extends Component {

    handleLogout() {
        this.props.onLogout();
    }

    render() {
        return (
            <div className="welcome-container">
                <div className="top-nav">
                    <div className="nav-item"><span className="logo-text">COVIDEO</span></div>
                    <div className="nav-item"><img src={logout} className="img-small" alt="logout" /></div>
                </div>
                <div className="column">
                    <div className="col-item">
                        <img className="img-med" src={picture} alt="words" />
                        <span className="col-item-text">Its beeing said that a picture is worth a thousand words.</span>
                    </div>

                    <div className="col-item">
                        <img className="img-med" src={video} alt="video"/>
                        <span className="col-item-text">And that we perceive about 24 images in one second watching a video</span>
                    </div>
                    <div className="col-item">
                        <h2 className="col-item-text">With that in mind, we can help you deliver millions of words in just minutes.</h2>
                    </div>
                </div>
                <div className="column">
                    <img src={mobile} className="column-image" alt="mobile" />
                </div>
            </div >
        );
    }
}

