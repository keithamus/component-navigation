import 'babel-polyfill';
import Navigation from '../src';
import React from 'react';
import chai from 'chai';
import chaiReactElement from 'chai-react-element';
import links from './links';
chai.use(chaiReactElement).should();
// Get data.
import navgiationLinks from '@economist/component-sections-card/context';
/* eslint-disable id-match */
// Force media links to use icon as background.
navgiationLinks.media.forEach((mediaLink) => {
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
describe('A navigation', () => {

  it('is compatible with React.Component', () => {
    Navigation.should.be.a('function').and.respondTo('render');
  });

  it('renders a React element', () => {
    React.isValidElement(
      <Navigation
        className="navigation navigation--registered navigation--sticked"
        links={registered}
        sectionsCardData={context}
        accordionData={accordionContext}
        sharedMenu={sharedMenu}
      />).should.equal(true);
  });

  describe('login/logout button', () => {

    it('links to /user/login?destination={this.props.currentUrl}', () => {
      const instance = new Navigation({
        currentUrl: '/foo/bar',
        sectionsCardData: context,
        accordionData: accordionContext,
        sharedMenu,
      });
      instance.renderLoginLogout()
        .should.include.prop('href', '/user/login?destination=%2Ffoo%2Fbar');
    });

    it('links to /logout?destination={this.props.currentUrl} when user is logged in', () => {
      const instance = new Navigation({
        currentUrl: '/foo/bar',
        userLoggedIn: true,
        sectionsCardData: context,
        accordionData: accordionContext,
        sharedMenu,
      });
      instance.renderLoginLogout()
        .should.include.elementOfType('a')
          .with.prop('href', '/logout?destination=%2Ffoo%2Fbar');
    });

  });

});
