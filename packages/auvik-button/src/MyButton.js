import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AuvikCard from '_auvik-card';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
})

class MyButton extends Component {
  render () {
    const { label, classes } = this.props
    return (
      <div>
        <AuvikCard />
        <Button variant="contained" className={classes.button}>
          {label}
        </Button>
      </div>
    )
  }
}

MyButton.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
}

export default withStyles(styles)(MyButton)