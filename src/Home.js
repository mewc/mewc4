import React from 'react';
import logo from './mewc.png';
import './App.css';
import { GitHub, LinkedIn } from '@material-ui/icons'
import { Grid, Tooltip, Button } from '@material-ui/core'
import strings from './strings';
import axios from 'axios';
import {
    Link
} from "react-router-dom";

console.log(strings.github);
const emailCookieName = 'mewc-email-submit'

/* Keep mewc4 very lightweight */

function enterPress(event) {
    const element = event.target;
    const input = element.value;
    if (event.charCode === 13 && input.match(/^[\w-.]+@([\w-]+.)+[\w-]{2,19}$/)) {
        event.preventDefault();
        console.log(input);
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
                element.setAttribute('placeholder', strings.email_placeholder);
                element.setAttribute('disabled', false);
                element.value = input;
            })
    } else if (event.keyCode === 13) {
        console.log('invalid input: ' + input);
    }
}

function setEmailSubmitCookie(input) {
    var CookieDate = new Date();
    CookieDate.setFullYear(CookieDate.getFullYear() + 1);
    document.cookie = `${emailCookieName}=${btoa(input.toString())}; expires=` + CookieDate.toUTCString() + ';';
}

function submitEmail(email) {
    const url = atob(strings.email_endpoint_base64);
    return axios.post(url, { email, origin: window.origin }, { timeout: 3000 })
        .then(r => {
            return r.data;
        })
}

function getEmailInput() {
    if (document.cookie.indexOf('mewc-email-submit') > -1) return;
    return <Grid item xs={12} className={'mewc-input'}>
        <input type="email" id="mewc-email-input" size="30" className={'email-input'}
            onKeyPress={enterPress} placeholder={strings.email_placeholder} required autoComplete="off" />
    </Grid>
}


function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h6>
                    Michael Carter
                </h6>
                <p>
                    Drive data, link everything &amp; mobilise tech power-ups
                </p>
                <Grid container
                    spacing={4}
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={2}>
                        <Tooltip title={strings.github} className="tooltip">
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
                    <Grid item xs={2}>
                        <Tooltip title={strings.australia} className="tooltip" >
                            <span role="img" aria-label="australia">
                                🇦🇺
                            </span>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={2}>
                        <Tooltip title={strings.linkedin} className="tooltip">
                            <a
                                className="App-link"
                                href="https://linkedin.com/in/mewcmewc"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LinkedIn />
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

export default Home;
