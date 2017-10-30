import React, { Component } from 'react';
import _ from 'lodash';
import paperInformation from './paperInformation';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
    marginRight: 50,
    marginLeft: 50
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%'
  },
  media: {
    height: 450
  },
  paperIcons: {
    height: 70,
    width: 70,
    display: 'block',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 15
  }
});

class Landing extends Component {
  renderPapers() {
    const classes = this.props.classes;
    return _.map(paperInformation, ({ description, Icon }) => {
      return (
        <Grid item xs={12} sm={6} md={3} key={Icon}>
          <Paper className={classes.paper}>
            <Icon />
            {description}
          </Paper>
        </Grid>
      );
    });
  }

  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="https://source.unsplash.com/IE_sifhay7o"
                title="Welcome to ChinguTravels"
              />
              <CardContent>
                <Typography type="display2" component="h2">
                  Welcome
                </Typography>
                <Typography component="p">
                  Discover new locations to visit. Click 'Generate Destinations'
                  below to start your journey!
                </Typography>
              </CardContent>
              <CardActions>
                <Button raised color="primary">
                  Generate Destinations
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {this.renderPapers()}
        </Grid>
      </div>
    );
  }
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Landing);
