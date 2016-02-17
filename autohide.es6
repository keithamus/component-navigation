import React from 'react';

export default class AutoHide extends React.Component {

   static get propTypes() {
     return {
       className: React.PropTypes.string,
       children: React.PropTypes.node.isRequired,
       hiddenClass: React.PropTypes.string,
       throttleTimeout: React.PropTypes.number,
     };
   }

   static get defaultProps() {
     return {
       hiddenClass: 'hidden',
       throttleTimeout: 200,
     };
   }

  componentWillMount() {
    this.state = { hiddenClass: '' };
    this.onScrollHandler = this.throttle(this.props.throttleTimeout, this.scrollManager);
    if (typeof window !== 'undefined') {
      this.wScrollCurrent = 0;
      this.wScrollBefore = 0;
      this.wScrollDiff = 0;
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollHandler);
  }

  throttle(delay, func) {
    let last = null;
    let deferTimer = null;
    return () => {
      const args = arguments;
      const now = Number(new Date());
      if (last && now < last + delay) {
        clearTimeout(deferTimer);
        deferTimer = setTimeout(() => {
          last = now;
          /* eslint-disable prefer-reflect */
          func.apply(this, args);
        }, delay);
      } else {
        last = now;
        func.apply(this, args);
      }
    };
  }

  scrollManager() {
    this.wScrollCurrent	= window.pageYOffset;
    this.wScrollDiff		= this.wScrollBefore - this.wScrollCurrent;

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
  }

  hide() {
    const hideClass = `${this.props.className}-autohide--${this.props.hiddenClass}`;
    this.setState({
      hiddenClass: hideClass,
    });
  }

  show() {
    this.setState({
      hiddenClass: '',
    });
  }

   render() {
     return (<div
       className={`${this.props.className} ${this.props.className}-autohide ${this.state.hiddenClass}`}
             >{this.props.children}</div>);
   }
}
