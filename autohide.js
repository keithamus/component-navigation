'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var AutoHide = (function (_React$Component) {
  _inherits(AutoHide, _React$Component);

  function AutoHide() {
    _classCallCheck(this, AutoHide);

    _React$Component.apply(this, arguments);
  }

  AutoHide.prototype.componentWillMount = function componentWillMount() {
    this.state = { hiddenClass: '' };
    this.onScrollHandler = this.throttle(this.props.throttleTimeout, this.scrollManager);
    if (typeof window !== 'undefined') {
      this.wScrollCurrent = 0;
      this.wScrollBefore = 0;
      this.wScrollDiff = 0;
    }
  };

  AutoHide.prototype.componentDidMount = function componentDidMount() {
    window.addEventListener('scroll', this.onScrollHandler);
  };

  AutoHide.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollHandler);
  };

  AutoHide.prototype.throttle = function throttle(delay, func) {
    var _arguments = arguments,
        _this = this;

    var last = null;
    var deferTimer = null;
    return function () {
      var args = _arguments;
      var now = Number(new Date());
      if (last && now < last + delay) {
        clearTimeout(deferTimer);
        deferTimer = setTimeout(function () {
          last = now;
          /* eslint-disable prefer-reflect */
          func.apply(_this, args);
        }, delay);
      } else {
        last = now;
        func.apply(_this, args);
      }
    };
  };

  AutoHide.prototype.scrollManager = function scrollManager() {
    this.wScrollCurrent = window.pageYOffset;
    this.wScrollDiff = this.wScrollBefore - this.wScrollCurrent;

    // Scrolling up
    if (this.wScrollCurrent >= 0) {
      if (this.wScrollDiff > 20) {
        this.show();
      }
      if (this.wScrollDiff < -20) {
        // Scrolling down
        this.hide();
      }
    }
    this.wScrollBefore = this.wScrollCurrent;
  };

  AutoHide.prototype.hide = function hide() {
    var hideClass = this.props.className + '-autohide--' + this.props.hiddenClass;
    this.setState({
      hiddenClass: hideClass
    });
  };

  AutoHide.prototype.show = function show() {
    this.setState({
      hiddenClass: ''
    });
  };

  AutoHide.prototype.render = function render() {
    return _react2['default'].createElement(
      'div',
      {
        className: this.props.className + ' ' + this.props.className + '-autohide ' + this.state.hiddenClass
      },
      this.props.children
    );
  };

  _createClass(AutoHide, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        className: _react2['default'].PropTypes.string,
        children: _react2['default'].PropTypes.node.isRequired,
        hiddenClass: _react2['default'].PropTypes.string,
        throttleTimeout: _react2['default'].PropTypes.number
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        hiddenClass: 'hidden',
        throttleTimeout: 200
      };
    }
  }]);

  return AutoHide;
})(_react2['default'].Component);

exports['default'] = AutoHide;
module.exports = exports['default'];