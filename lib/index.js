'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var styles$1 = require('@material-ui/core/styles');
var Button = _interopDefault(require('@material-ui/core/Button'));

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

class MyButton extends React.Component {
  render() {
    const {
      label,
      classes
    } = this.props;
    return React__default.createElement(Button, {
      variant: "contained",
      className: classes.button
    }, label);
  }

}

MyButton.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired
};
var MyButton$1 = styles$1.withStyles(styles)(MyButton);

module.exports = MyButton$1;
