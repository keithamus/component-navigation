'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _economistComponentIcon = require('@economist/component-icon');

var _economistComponentIcon2 = _interopRequireDefault(_economistComponentIcon);

var _reactStickyPosition = require('react-sticky-position');

var _reactStickyPosition2 = _interopRequireDefault(_reactStickyPosition);

var _autohide = require('./autohide');

var _autohide2 = _interopRequireDefault(_autohide);

var _economistComponentLinkButton = require('@economist/component-link-button');

var _economistComponentLinkButton2 = _interopRequireDefault(_economistComponentLinkButton);

var _economistComponentGoogleSearch = require('@economist/component-google-search');

var _economistComponentGoogleSearch2 = _interopRequireDefault(_economistComponentGoogleSearch);

var _economistComponentBalloon = require('@economist/component-balloon');

var _economistComponentBalloon2 = _interopRequireDefault(_economistComponentBalloon);

var _economistComponentSectionsCard = require('@economist/component-sections-card');

var _economistComponentSectionsCard2 = _interopRequireDefault(_economistComponentSectionsCard);

var _economistComponentAccordion = require('@economist/component-accordion');

var _economistComponentAccordion2 = _interopRequireDefault(_economistComponentAccordion);

var Navigation = (function (_React$Component) {
  _inherits(Navigation, _React$Component);

  function Navigation() {
    _classCallCheck(this, Navigation);

    _React$Component.apply(this, arguments);
  }

  Navigation.prototype.renderLoginLogout = function renderLoginLogout() {
    var _props = this.props;
    var currentUrl = _props.currentUrl;
    var userLoggedIn = _props.userLoggedIn;
    var userIsSubscriber = _props.userIsSubscriber;
    var penName = _props.penName;
    var logoutDestination = _props.logoutDestination;

    var destinationParameter = currentUrl ? '?destination=' + encodeURIComponent(currentUrl) : '';
    var buttonUrl = userLoggedIn ? '/logout' + destinationParameter : '/user/login' + destinationParameter;
    var buttonClassSuffix = userLoggedIn ? 'login' : 'logout';
    var buttonText = userLoggedIn ? 'My Account' : 'Log in';
    var registerUrl = '/user/register' + destinationParameter;
    var userMenuBalloonTrigger = _react2['default'].createElement(
      _economistComponentLinkButton2['default'],
      {
        href: buttonUrl,
        className: 'navigation__user-menu-link navigation__user-menu-link--' + buttonClassSuffix,
        icon: { icon: 'user', size: '28px' },
        unstyled: true
      },
      buttonText
    );
    if (userLoggedIn && userIsSubscriber) {
      return _react2['default'].createElement(
        _economistComponentBalloon2['default'],
        { showOnHover: true, trigger: userMenuBalloonTrigger, className: 'navigation__user-menu-popup--subscriber' },
        _react2['default'].createElement(
          'ul',
          { className: 'navigation__user-menu-linklist' },
          _react2['default'].createElement(
            'li',
            { className: 'navigation__user-menu-linklist-item' },
            _react2['default'].createElement(
              'a',
              { className: 'navigation__user-menu-linklist-link', href: '/user' },
              'My account'
            )
          ),
          _react2['default'].createElement(
            'li',
            { className: 'navigation__user-menu-linklist-item' },
            _react2['default'].createElement(
              'a',
              { className: 'navigation__user-menu-linklist-link', href: 'https://subscriptions.economist.com' },
              'Manage my subscription'
            )
          ),
          _react2['default'].createElement(
            'li',
            { className: 'navigation__user-menu-linklist-item' },
            _react2['default'].createElement(
              'a',
              { className: 'navigation__user-menu-linklist-link', href: '/subscriptions/renew' },
              'Renew my subscription'
            )
          ),
          _react2['default'].createElement(
            'li',
            { className: 'navigation__user-menu-linklist-item' },
            _react2['default'].createElement(
              'a',
              { className: 'navigation__user-menu-linklist-link', href: 'https://subscriptions.economist.com' },
              'Buy a gift subscription'
            )
          ),
          _react2['default'].createElement(
            'li',
            { className: 'navigation__user-menu-linklist-item' },
            _react2['default'].createElement(
              'a',
              { className: 'navigation__user-menu-linklist-link', href: '/users/' + penName + '/newsletters' },
              'Newsletters'
            )
          ),
          _react2['default'].createElement(
            'li',
            { className: 'navigation__user-menu-linklist-item' },
            _react2['default'].createElement(
              'a',
              { className: 'navigation__user-menu-linklist-link', href: '/users/' + penName + '/comments' },
              'My comments'
            )
          ),
          _react2['default'].createElement(
            'li',
            { className: 'navigation__user-menu-linklist-item' },
            _react2['default'].createElement(
              'a',
              {
                className: 'navigation__user-menu-linklist-link--cta',
                href: '/logout?destination=' + logoutDestination
              },
              'Log out'
            )
          )
        )
      );
    }
    if (userLoggedIn) {
      return _react2['default'].createElement(
        _economistComponentBalloon2['default'],
        { showOnHover: true, trigger: userMenuBalloonTrigger, className: 'navigation__user-menu-popup--registered' },
        _react2['default'].createElement(
          'ul',
          { className: 'navigation__user-menu-linklist' },
          _react2['default'].createElement(
            'li',
            { className: 'navigation__user-menu-linklist-item' },
            _react2['default'].createElement(
              'a',
              { className: 'navigation__user-menu-linklist-link', href: '/user' },
              'My account'
            )
          ),
          _react2['default'].createElement(
            'li',
            { className: 'navigation__user-menu-linklist-item' },
            _react2['default'].createElement(
              'a',
              { className: 'navigation__user-menu-linklist-link', href: 'https://subscriptions.economist.com' },
              'Subscribe to The Economist'
            )
          ),
          _react2['default'].createElement(
            'li',
            { className: 'navigation__user-menu-linklist-item' },
            _react2['default'].createElement(
              'a',
              { className: 'navigation__user-menu-linklist-link', href: '/subscriptions/activation' },
              'Activate my digital subscription'
            )
          ),
          _react2['default'].createElement(
            'li',
            { className: 'navigation__user-menu-linklist-item' },
            _react2['default'].createElement(
              'a',
              { className: 'navigation__user-menu-linklist-link', href: 'https://subscriptions.economist.com' },
              'Buy a gift subscription'
            )
          ),
          _react2['default'].createElement(
            'li',
            { className: 'navigation__user-menu-linklist-item' },
            _react2['default'].createElement(
              'a',
              { className: 'navigation__user-menu-linklist-link', href: '/users/' + penName + '/newsletters' },
              'Newsletters'
            )
          ),
          _react2['default'].createElement(
            'li',
            { className: 'navigation__user-menu-linklist-item' },
            _react2['default'].createElement(
              'a',
              { className: 'navigation__user-menu-linklist-link', href: '/users/' + penName + '/comments' },
              'My comments'
            )
          ),
          _react2['default'].createElement(
            'li',
            { className: 'navigation__user-menu-linklist-item' },
            _react2['default'].createElement(
              'a',
              {
                className: 'navigation__user-menu-linklist-link--cta',
                href: '/logout?destination=' + logoutDestination
              },
              'Log out'
            )
          )
        )
      );
    }
    return _react2['default'].createElement(
      _economistComponentBalloon2['default'],
      { showOnHover: true, trigger: userMenuBalloonTrigger, className: 'navigation__user-menu-popup--anonymous' },
      _react2['default'].createElement(
        _economistComponentLinkButton2['default'],
        { href: buttonUrl, className: 'navigation__user-menu-log-in-button' },
        'Log in to ',
        _react2['default'].createElement(
          'span',
          { className: 'navigation__user-menu-the-economist-name' },
          'The Economist'
        )
      ),
      _react2['default'].createElement(
        'ul',
        { className: 'navigation__user-menu-linklist' },
        _react2['default'].createElement(
          'li',
          { className: 'navigation__user-menu-linklist-item' },
          'New to ',
          _react2['default'].createElement(
            'span',
            { className: 'navigation__user-menu-the-economist-name' },
            'The Economist'
          ),
          '? ',
          _react2['default'].createElement(
            'a',
            { className: 'navigation__user-menu-linklist-link--cta', href: registerUrl },
            'Register now'
          )
        ),
        _react2['default'].createElement(
          'li',
          { className: 'navigation__user-menu-linklist-item' },
          _react2['default'].createElement(
            'a',
            { className: 'navigation__user-menu-linklist-link--cta', href: '/user' },
            'Manage my subscription'
          )
        )
      )
    );
  };

  Navigation.prototype.render = function render() {
    var svgUri = { uri: this.props.svgUri } || {};
    var menuAccordionTrigger = _react2['default'].createElement(
      'a',
      { href: '/Sections', className: 'navigation__sections-link' },
      _react2['default'].createElement(_economistComponentIcon2['default'], { icon: 'hamburger', size: '28px', color: 'white' }),
      _react2['default'].createElement(_economistComponentIcon2['default'], { icon: 'close', size: '28px', color: 'white' })
    );
    var menuSectionsTrigger = _react2['default'].createElement(
      'a',
      { href: this.props.sharedMenu.topic.href, className: 'navigation__sections-link' },
      this.props.sharedMenu.topic.title
    );
    var primaryNavigation = _react2['default'].createElement(
      'div',
      { className: 'navigation__primary', key: 'primary-navigation' },
      _react2['default'].createElement(
        'div',
        { className: 'navigation__primary-inner' },
        _react2['default'].createElement(
          'a',
          { href: 'http://www.economist.com', className: 'navigation__link-logo' },
          _react2['default'].createElement(_economistComponentIcon2['default'], _extends({ icon: 'economist', size: '64px' }, svgUri)),
          _react2['default'].createElement('div', { className: 'navigation__link-empty-logo' })
        ),
        _react2['default'].createElement(
          _economistComponentBalloon2['default'],
          {
            className: 'navigation__main-navigation-link navigation__mobile-accordion',
            trigger: menuAccordionTrigger
          },
          _react2['default'].createElement(_economistComponentAccordion2['default'], { list: this.props.accordionData })
        ),
        _react2['default'].createElement(
          _economistComponentBalloon2['default'],
          {
            className: 'navigation__main-navigation-link navigation__main-sections-card',
            showOnHover: true,
            trigger: menuSectionsTrigger
          },
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(_economistComponentSectionsCard2['default'], { data: this.props.sectionsCardData })
          )
        ),
        _react2['default'].createElement(
          'a',
          { href: '/printedition', className: 'navigation__main-navigation-link' },
          'Print edition'
        ),
        _react2['default'].createElement(
          'a',
          { href: this.props.sharedMenu.more.href, className: 'navigation__main-navigation-link' },
          this.props.sharedMenu.more.title
        ),
        _react2['default'].createElement('div', { className: 'navigation__primary-expander' }),
        _react2['default'].createElement(
          _economistComponentLinkButton2['default'],
          { href: this.props.sharedMenu.subscribe.href,
            className: 'navigation__main-navigation-link navigation__main-navigation-link-subscribe',
            target: '_blank',
            i13nModel: {
              action: 'click',
              element: 'subscribe'
            },
            unstyled: true
          },
          this.props.sharedMenu.subscribe.title
        ),
        _react2['default'].createElement(
          'div',
          { className: 'navigation__user-menu' },
          this.renderLoginLogout()
        ),
        _react2['default'].createElement(
          'div',
          { className: 'navigation__search' },
          _react2['default'].createElement(_economistComponentGoogleSearch2['default'], null)
        )
      )
    );
    var children = [primaryNavigation];
    var autohide = '';
    var bottomBar = '';
    if (this.props.autohide) {
      autohide = ' navigation--autohide';
      bottomBar = _react2['default'].createElement(
        _autohide2['default'],
        { className: 'navigation__secondary', key: 'secondary-autohide' },
        this.props.children
      );
    } else {
      bottomBar = _react2['default'].createElement(
        'div',
        { className: 'navigation__secondary', key: 'secondary' },
        this.props.children
      );
    }
    children.push(bottomBar);
    return _react2['default'].createElement(
      _reactStickyPosition2['default'],
      { className: this.props.className + ' ' + autohide },
      children
    );
  };

  _createClass(Navigation, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        className: _react2['default'].PropTypes.string,
        children: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.element), _react2['default'].PropTypes.element]),
        links: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.object),
        penName: _react2['default'].PropTypes.string,
        logoutDestination: _react2['default'].PropTypes.string,
        autohide: _react2['default'].PropTypes.bool,
        svgUri: _react2['default'].PropTypes.string,
        userLoggedIn: _react2['default'].PropTypes.bool,
        userIsSubscriber: _react2['default'].PropTypes.bool,
        currentUrl: _react2['default'].PropTypes.string,
        sharedMenu: _react2['default'].PropTypes.object.isRequired,
        sectionsCardData: _react2['default'].PropTypes.object.isRequired,
        accordionData: _react2['default'].PropTypes.array.isRequired
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        autohide: true,
        penName: 'guest-olejses',
        logoutDestination: ''
      };
    }
  }]);

  return Navigation;
})(_react2['default'].Component);

exports['default'] = Navigation;
module.exports = exports['default'];