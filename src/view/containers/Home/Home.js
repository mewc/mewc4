import React from 'react';
import { connect } from 'react-redux';
import './Home.css';
import { GitHub, LinkedIn } from '@material-ui/icons'
// import Medium from '../../../assets/img/medium.svg'
import { Grid, Tooltip, 
    // SvgIcon 
} from '@material-ui/core'
import { GENERAL, } from '../../../assets/strings/constants';
import axios from 'axios';
import {
    Link
} from "react-router-dom";
import cx from 'classnames';
import { appLoading } from '../../../state/ducks/app/operations';

import pic1 from '../../../assets/img/mewc1.png';
import pic2 from '../../../assets/img/mewc2.jpg';

console.debug(GENERAL.github);
const emailCookieName = 'mewc-email-submit';

function enterPress(event) {
    const element = event.target;
    const input = element.value;
    if (event.charCode === 13 && input.match(/^[\w-.]+@([\w-]+.)+[\w-]{2,19}$/)) {
        event.preventDefault();
        console.debug(input);
        element.setAttribute('placeholder', 'sending...');
        element.setAttribute('disabled', true);
        element.value = null;
        submitEmail(input)
            .then(r => {
                if (r.status === 'done') {
                    setEmailSubmitCookie(input);
                    element.setAttribute('placeholder', 'Done!');
                    setTimeout(() => { element.parentNode.remove() }, 1500);
                } else {
                    throw new Error({ message: 'API response is not successful', r })
                }
            })
            .catch(err => {
                console.error(err);
                element.setAttribute('placeholder', GENERAL.email_placeholder);
                element.setAttribute('disabled', false);
                element.value = input;
            })
    } else if (event.keyCode === 13) {
        console.debug('invalid input: ' + input);
    }
}

function setEmailSubmitCookie(input) {
    var CookieDate = new Date();
    CookieDate.setFullYear(CookieDate.getFullYear() + 1);
    document.cookie = `${emailCookieName}=${btoa(input.toString())}; expires=` + CookieDate.toUTCString() + ';';
}

function submitEmail(email) {
    const url = atob(GENERAL.email_endpoint_base64);
    return axios.post(url, { email, origin: window.origin }, { timeout: 3000 })
        .then(r => {
            return r.data;
        })
}

function getEmailInput() {
    if (document.cookie.indexOf('mewc-email-submit') > -1) return;
    return <Grid item xs={12} className={'mewc-input'}>
        <input type="email" id="mewc-email-input" size="30" className={'email-input'}
            onKeyPress={enterPress} placeholder={GENERAL.email_placeholder} required autoComplete="off" />
    </Grid>
}


function renderHome() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={(Date.now() % 2?pic1:pic2)} className="App-logo" alt="logo" />
                <h6>
                    {GENERAL.mewc_name}
                </h6>
                <p>
                    {GENERAL.mewc_tagline}
                </p>
                <Grid container
                    spacing={4}
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={2}>
                        <Tooltip title={GENERAL.linkedin} className="tooltip">
                            <a
                                className="App-link"
                                href="https://linkedin.com/in/michael-carter-au"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LinkedIn />
                            </a>
                        </Tooltip>
                    </Grid>
                    {/* <Grid item xs={2}>
                        <Tooltip title={GENERAL.medium} className="tooltip">
                            <a
                                className="App-link"
                                href="https://medium.com/@mewc.dev"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SvgIcon>
                                    <Medium />
                                </SvgIcon>
                            </a>
                        </Tooltip>
                    </Grid> */}
                    <Grid item xs={2}>
                        <Tooltip title={GENERAL.australia} className="tooltip" >
                            <span role="img" aria-label="australia">
                                🇦🇺
                            </span>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={2}>
                        <Tooltip title={GENERAL.github} className="tooltip">
                            <a
                                className="App-link"
                                href="https://github.com/mewc"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <React.Fragment>
                                    <GitHub />
                                </React.Fragment>
                            </a>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={12}>
                        <Link to={`/past-projects`} className={'link'}>Past Projects</Link>
                    </Grid>
                    {getEmailInput()}
                </Grid>
            </header>
        </div >
    );
}

const Home = (props) => {
    const { loading } = props;
    const WrapperClass = cx({
        'wrapper': true
    })

    return (
        <div className={WrapperClass}>
            {(Object.keys(loading).length > 1) ? '...loading' : renderHome()}
        </div >
    );
}

function mapStateToProps(state, ownProps) {
    return {
        loading: state.app.loading
    };
}

const mapDispatchToProps = dispatch => {
    return {
        appLoading: (promise) => { dispatch(appLoading(promise)) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);