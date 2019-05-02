import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
})

class MyComponent extends Component {
  render () {
    const { label, classes } = this.props
    return (
      <Button variant="contained" className={classes.button}>
        {label}
      </Button>
    )
  }
}

MyComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
}

export default withStyles(styles)(MyComponent)