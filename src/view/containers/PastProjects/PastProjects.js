import React from 'react';
import { connect } from 'react-redux';
import './PastProjects.css';
import { Grid } from '@material-ui/core'
import { GENERAL } from '../../../assets/strings/constants';
import { appLoading } from '../../../state/ducks/app/operations';
import {
    Link
} from "react-router-dom";


const buildProjectGrid = () => {
    // return GENERAL.projects.map(p => {
    //     return (<Grid item xs={12} key={p.shortname}>
    //         <Tooltip title={p.description} className="tooltip">
    //             <a href={p.link} className={'App-link'}>{p.shortName}</a>
    //         </Tooltip>
    //     </Grid>);
    // })
}



function PastProjects() {
    document.title = `mewc - Past Projects`;



    return (
        <div className="App">
            <header className="App-header">
                <h3>{GENERAL.past_projects_header}</h3>
                <p>{GENERAL.past_projects_description}</p>
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


export default connect(mapStateToProps, mapDispatchToProps)(PastProjects);
