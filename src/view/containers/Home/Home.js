import React from "react";
import { connect } from "react-redux";
import "./Home.css";
import { LinkedIn } from "@material-ui/icons";
// import Medium from '../../../assets/img/medium.svg'
import {
  Grid,
  // SvgIcon
} from "@material-ui/core";
import { GENERAL } from "../../../assets/strings/constants";
import cx from "classnames";

console.debug(GENERAL.github);

function renderHome() {
  return (
    <div className="App">
      <header className="App-header">
        <h6>{GENERAL.mewc_name}</h6>
        <Grid
          container
          spacing={4}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={2}>
            <a
              className="App-link"
              href="https://linkedin.com/in/michael-carter-au"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </a>
          </Grid>
          <Grid item xs={2}>
            <span role="img" aria-label="australia">
              🇦🇺
            </span>
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

const Home = (props) => {
  const { loading } = props;
  const WrapperClass = cx({
    wrapper: true,
  });

  return (
    <div className={WrapperClass}>
      {Object.keys(loading).length > 1 ? "...loading" : renderHome()}
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.app.loading,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    appLoading: (promise) => {
      dispatch(promise);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
