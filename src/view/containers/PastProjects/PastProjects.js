import React from 'react';
import { connect } from 'react-redux';
import './PastProjects.css';
import { Grid, CircularProgress, Table, TableBody, TableHead, TableCell, TableContainer, TableRow, Paper } from '@material-ui/core';
import { GENERAL } from '../../../assets/strings/constants';
import { appLoading } from '../../../state/ducks/app/operations';
import { getProjectData } from '../../../state/ducks/projects/operations';
import {
    Link
} from "react-router-dom";


const buildProjectGrid = (data) => {

    return (
        <TableContainer component={Paper} className={'table-paper'}>
            <Table className={'table'} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={'prj-outline-head'}>Project</TableCell>
                        <TableCell className={'prj-outline-head'} align="left">Outline</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={Object.values(row.shortname)[0]}>
                            <TableCell component="th" scope="row">
                                <a className={'prj-link'} href={Object.values(row.link)[0]}>{Object.values(row.shortname)[0]}</a>
                            </TableCell>
                            <TableCell className={'prj-outline'} align="left">{Object.values(row.description)[0]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}



function PastProjects(props) {
    const { projects, loading } = props;
    document.title = `mewc - Past Projects`;
    console.debug('PP', (!loading && !(projects.length === 0), props));
    if (!loading && projects.length === 0) { props.getProjectData(); }
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
                    <Grid item xs={12}>
                        {(loading && projects.length === 0) ? <CircularProgress /> : buildProjectGrid(projects)}
                    </Grid>
                    <Grid item xs={4}>
                        <Link to={`/`} className={'link link-button'}>Back</Link>
                    </Grid>
                </Grid>
            </header>
        </div >
    );
}


function mapStateToProps(state, ownProps) {
    const l = (Object.keys(state.app.loading).length)

    console.debug(l, l > 0);
    return {
        loading: (Object.keys(state.app.loading).length > 0),
        projects: state.projects.items
    };
}

const mapDispatchToProps = dispatch => {
    return {
        appLoading: (promise) => { dispatch(appLoading(promise)) },
        getProjectData: () => { dispatch(getProjectData()) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PastProjects);
