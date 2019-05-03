'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var styles$2 = require('@material-ui/core/styles');
var Button = _interopDefault(require('@material-ui/core/Button'));
var Card = _interopDefault(require('@material-ui/core/Card'));
var CardActions = _interopDefault(require('@material-ui/core/CardActions'));
var CardContent = _interopDefault(require('@material-ui/core/CardContent'));
var Typography = _interopDefault(require('@material-ui/core/Typography'));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var styles = function styles(theme) {
  return {
    button: {
      margin: theme.spacing.unit
    }
  };
};

var MyButton =
/*#__PURE__*/
function (_Component) {
  _inherits(MyButton, _Component);

  function MyButton() {
    _classCallCheck(this, MyButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyButton).apply(this, arguments));
  }

  _createClass(MyButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          classes = _this$props.classes;
      return React__default.createElement(Button, {
        variant: "contained",
        className: classes.button
      }, label);
    }
  }]);

  return MyButton;
}(React.Component);

MyButton.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired
};
styles$2.withStyles(styles)(MyButton);

var styles$1 = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

var TheCard =
/*#__PURE__*/
function (_Component) {
  _inherits(TheCard, _Component);

  function TheCard() {
    _classCallCheck(this, TheCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(TheCard).apply(this, arguments));
  }

  _createClass(TheCard, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var bull = React__default.createElement("span", {
        className: classes.bullet
      }, "\u2022");
      return React__default.createElement(Card, {
        className: classes.card
      }, React__default.createElement(CardContent, null, React__default.createElement(Typography, {
        className: classes.title,
        color: "textSecondary",
        gutterBottom: true
      }, "Word of the Day"), React__default.createElement(Typography, {
        variant: "h5",
        component: "h2"
      }, "be", bull, "nev", bull, "o", bull, "lent"), React__default.createElement(Typography, {
        className: classes.pos,
        color: "textSecondary"
      }, "adjective"), React__default.createElement(Typography, {
        component: "p"
      }, "well meaning and kindly.", React__default.createElement("br", null), '"a benevolent smile"')), React__default.createElement(CardActions, null, React__default.createElement(Button, {
        size: "small"
      }, "Learn More")));
    }
  }]);

  return TheCard;
}(React.Component);

TheCard.propTypes = {
  classes: PropTypes.object.isRequired
};
styles$2.withStyles(styles$1)(TheCard);
