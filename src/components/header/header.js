import React from 'react';
import { Link } from 'gatsby';
import posed from 'react-pose';
import { Container } from './header.css';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = ({ title }) => (
  <AnimatedContainer>
    <Container>
      <Link to="/">
        <h1>It me</h1>
      </Link>
    </Container>
  </AnimatedContainer>
);

export default Header;
