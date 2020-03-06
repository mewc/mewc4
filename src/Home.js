import React from 'react';
import logo from './mewc.png';
import './App.css';
import { GitHub, LinkedIn } from '@material-ui/icons'
import { Grid, Tooltip } from '@material-ui/core'
import strings from './strings';

console.log(strings.github);

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h6>
                    Michael Carter
                </h6>
                <p>
                    Drive data, link everything &amp; find tech power-ups
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
                            <div>
                                🇦🇺
                            </div>
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
                </Grid>
            </header>
        </div >
    );
}

export default App;
