import 'babel-polyfill';
import Navigation from './';
import React from 'react';
import navgiationLinks from '@economist/component-sections-card/context';
import svgForEverybody from 'svg4everybody';
/* eslint-disable id-match */
// Force media links to use icon as background.
if (typeof document === 'object') {
  svgForEverybody();
}
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
    children: navgiationLinks.sections,
  },
  {
    title: 'Blogs',
    href: '/blogs',
    children: navgiationLinks.blogs,
  },
  ...navgiationLinks.media,
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
export default (
  <div>
    <div>
        <Navigation className="navigation navigation--registered navigation--sticked"
          svgUri="assets/icons.svg"
          autohide={false}
          sectionsCardData={navgiationLinks}
          accordionData={accordionContext}
          sharedMenu={sharedMenu}
        />
        <p style={{ paddingBottom: '400px' }}>
          Scroll down to experience the thrill of sticky header technology
        </p>
    </div>
    <div>
      <Navigation className="navigation navigation--registered navigation--sticked"
        svgUri="assets/icons.svg"
        userLoggedIn
        autohide={false}
        sectionsCardData={navgiationLinks}
        accordionData={accordionContext}
        sharedMenu={sharedMenu}
      />
      <p style={{ paddingBottom: '400px' }}>
        Scroll down to experience the thrill of sticky header technology
      </p>
    </div>
    <div>
      <Navigation className="navigation navigation--registered navigation--sticked"
        svgUri="assets/icons.svg"
        userLoggedIn
        userIsSubscriber
        autohide={false}
        sectionsCardData={navgiationLinks}
        accordionData={accordionContext}
        sharedMenu={sharedMenu}
      />
      <p style={{ paddingBottom: '400px' }}>
        Scroll down to experience the thrill of sticky header technology
      </p>
    </div>
  </div>
);
