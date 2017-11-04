import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = theme => ({
  root: {
    width: '100%'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

class Header extends Component {
  renderLinks() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div>
            <Button
              component={({ ...props }) => <Link to="/login" {...props} />}
              color="inherit"
            >
              Login
            </Button>
            <Button
              component={({ ...props }) => <Link to="/register" {...props} />}
              color="inherit"
            >
              Register
            </Button>
          </div>
        );
      default:
        // Logout using anchor tag to force refresh which also will update auth state.
        return (
          <div>
            <Button
              component={({ ...props }) => <Link to="/dashboard" {...props} />}
              color="inherit"
            >
              My Favorites
            </Button>
            <Button href="/api/logout" color="inherit">
              Logout
            </Button>
          </div>
        );
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              type="display1"
              color="inherit"
              className={classes.flex}
            >
              Wanderful
            </Typography>
            {this.renderLinks()}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(withStyles(styles)(Header));
