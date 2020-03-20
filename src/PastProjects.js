import React from 'react';
import './App.css';
import { Grid, Tooltip } from '@material-ui/core'
import strings from './strings';
import {
    Link
} from "react-router-dom";


const buildProjectGrid = () => {
    return strings.projects.map(p => {
        return (<Grid item xs={12} key={p.shortName}>
            <Tooltip title={p.description} className="tooltip">
                <a href={p.link} className={'App-link'}>{p.shortName}</a>
            </Tooltip>
        </Grid>);
    })
}



function PastProjects() {
    document.title = `mewc - Past Projects`
    return (
        <div className="App">
            <header className="App-header">
                <h3>{strings.past_projects_header}</h3>
                <p>{strings.past_projects_description}</p>
                <Grid container
                    spacing={4}
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    {buildProjectGrid()}
                    <Grid item xs={4}>
                        <Link to={`/`} className={'link link-button'}>Back</Link>
                    </Grid>
                </Grid>
            </header>
        </div >
    );
}

export default PastProjects;
