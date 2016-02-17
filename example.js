'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

// Get data.

var _economistComponentSectionsCardContext = require('@economist/component-sections-card/context');

var _economistComponentSectionsCardContext2 = _interopRequireDefault(_economistComponentSectionsCardContext);

/* eslint-disable id-match */
// Force media links to use icon as background.
if (typeof document === 'object') {
  require('svg4everybody')();
}

_economistComponentSectionsCardContext2['default'].media.forEach(function (mediaLink) {
  mediaLink.icon = {
    useBackground: true,
    color: 'chicago',
    icon: mediaLink.meta
  };
  return mediaLink;
});
var sharedMenu = {
  topic: {
    title: 'Topics',
    href: '/sections'
  },
  more: {
    title: 'More',
    href: '/digital'
  },
  subscribe: {
    title: 'Subscribe',
    href: 'https://subscriptions.economist.com/'
  }
};
var accordionContext = [{
  title: sharedMenu.topic.title,
  href: sharedMenu.topic.href,
  children: _economistComponentSectionsCardContext2['default'].sections
}, {
  title: 'Blogs',
  href: '/blogs',
  children: _economistComponentSectionsCardContext2['default'].blogs
}].concat(_economistComponentSectionsCardContext2['default'].media, [{
  title: 'Print Edition',
  href: '/printedition'
}, {
  title: sharedMenu.more.title,
  href: sharedMenu.more.href
}, {
  title: sharedMenu.subscribe.title,
  href: sharedMenu.subscribe.href,
  target: '_blank',
  unstyled: false,
  i13nModel: {
    action: 'click',
    element: 'subscribe'
  }
}]);
exports['default'] = _react2['default'].createElement(
  'div',
  null,
  _react2['default'].createElement(
    'div',
    null,
    _react2['default'].createElement(_index2['default'], { className: 'navigation navigation--registered navigation--sticked',
      svgUri: 'assets/icons.svg',
      autohide: false,
      sectionsCardData: _economistComponentSectionsCardContext2['default'],
      accordionData: accordionContext,
      sharedMenu: sharedMenu
    }),
    _react2['default'].createElement(
      'p',
      { style: { paddingBottom: '400px' } },
      'Scroll down to experience the thrill of sticky header technology'
    )
  ),
  _react2['default'].createElement(
    'div',
    null,
    _react2['default'].createElement(_index2['default'], { className: 'navigation navigation--registered navigation--sticked',
      svgUri: 'assets/icons.svg',
      userLoggedIn: true,
      autohide: false,
      sectionsCardData: _economistComponentSectionsCardContext2['default'],
      accordionData: accordionContext,
      sharedMenu: sharedMenu
    }),
    _react2['default'].createElement(
      'p',
      { style: { paddingBottom: '400px' } },
      'Scroll down to experience the thrill of sticky header technology'
    )
  ),
  _react2['default'].createElement(
    'div',
    null,
    _react2['default'].createElement(_index2['default'], { className: 'navigation navigation--registered navigation--sticked',
      svgUri: 'assets/icons.svg',
      userLoggedIn: true,
      userIsSubscriber: true,
      autohide: false,
      sectionsCardData: _economistComponentSectionsCardContext2['default'],
      accordionData: accordionContext,
      sharedMenu: sharedMenu
    }),
    _react2['default'].createElement(
      'p',
      { style: { paddingBottom: '400px' } },
      'Scroll down to experience the thrill of sticky header technology'
    )
  )
);
module.exports = exports['default'];