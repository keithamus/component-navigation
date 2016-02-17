import Navigation from '../index.es6';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import links from '../links';
// Get data.
import context from '@economist/component-sections-card/context';
/* eslint-disable id-match */
// Force media links to use icon as background.
context.media.forEach((mediaLink) => {
  mediaLink.icon = {
    useBackground: true,
    color: 'chicago',
    icon: mediaLink.meta,
  };
  return mediaLink;
});

const sharedMenu = {
  topic: {
    title: 'Topics',
    href: '/sections',
  },
  more: {
    title: 'More',
    href: '/digital',
  },
  subscribe: {
    title: 'Subscribe',
    href: 'https://subscriptions.economist.com/',
  },
};
const accordionContext = [
  {
    title: sharedMenu.topic.title,
    href: sharedMenu.topic.href,
    children: context.sections,
  },
  {
    title: 'Blogs',
    href: '/blogs',
    children: context.blogs,
  },
  ...context.media,
  {
    title: 'Print Edition',
    href: '/printedition',
  },
  {
    title: sharedMenu.more.title,
    href: sharedMenu.more.href,
  },
  {
    title: sharedMenu.subscribe.title,
    href: sharedMenu.subscribe.href,
    target: '_blank',
    unstyled: false,
    i13nModel: {
      action: 'click',
      element: 'subscribe',
    },
  },
];
const registered = [ links.subscribe, links.myeconomist, links.logout ];
describe(`A navigation`, () => {
  describe(`it's a React component`, () => {
    it('is compatible with React.Component', () => {
      Navigation.should.be.a('function').and.respondTo('render');
    });
    it(`it's renders a React element`, () => {
      React.isValidElement(
        <Navigation
          className="navigation navigation--registered navigation--sticked"
          links={registered}
          sectionsCardData={context}
          accordionData={accordionContext}
          sharedMenu={sharedMenu}
        />).should.equal(true);
    });
  });
  describe('login/logout button', () => {
    it('is a link to /user/login?destination={this.props.currentUrl}', () => {
      const instance = new Navigation({
        currentUrl: '/foo/bar',
        sectionsCardData: context,
        accordionData: accordionContext,
        sharedMenu,
      });
      const loginLogoutButton = TestUtils.renderIntoDocument(
        instance.renderLoginLogout()
      );
      const linkButton = TestUtils.findRenderedDOMComponentWithClass(
        loginLogoutButton,
        'navigation__user-menu-link'
      );
      linkButton.href.should.contain('/user/login?destination=%2Ffoo%2Fbar');
    });
    it('When the user is logged in it\'s a link to /logout?destination={this.props.currentUrl}', () => {
      const instance = new Navigation({
        currentUrl: '/foo/bar',
        userLoggedIn: true,
        sectionsCardData: context,
        accordionData: accordionContext,
        sharedMenu,
      });
      instance.renderLoginLogout()
        .props.href.should.equal('/logout?destination=%2Ffoo%2Fbar');
    });
  });
});
