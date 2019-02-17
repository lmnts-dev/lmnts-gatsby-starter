import React, { PureComponent } from 'react';
import posed, { PoseGroup } from 'react-pose';
import { timeout } from 'constants/transition';

class Transition extends PureComponent {
  render() {
    const { children, location } = this.props;

    const RoutesContainer = posed.div({
      enter: { opacity: 1, delay: timeout, delayChildren: timeout },
      exit: { opacity: 0 },
    });

    // To enable page transitions on mount / initial load,
    // use the prop `animateOnMount={true}` on `PoseGroup`.
    return (
      <PoseGroup>
        <RoutesContainer key={location.pathname}>{children}</RoutesContainer>
      </PoseGroup>
    );
  }
}

export default Transition;
