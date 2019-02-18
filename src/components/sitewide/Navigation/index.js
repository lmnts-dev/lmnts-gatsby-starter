// Navigation Component:
// This is the sitewide Navigation of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Vendor
// import Img from 'gatsby-image';

// Styles
import NavigationStyle from 'components/sitewide/Navigation/styles.scss';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const Navigation = () => (
  <NavigationStyle>
    <NavigationStyle.Inner>
      <NavigationStyle.Row AlignItems="center" JustifyContent="space-between">
        <NavigationStyle.Col>
          <a href={Theme.Site.Url}>
            <img
              src="https://cdn.dribbble.com/users/1826170/avatars/normal/56c47446d104c3768bbd90d907b1f238.jpg?1518642823"
              alt={Theme.Site.Title}
              height="30px"
            />
          </a>
        </NavigationStyle.Col>
        <NavigationStyle.Col>
          <ul>
            <a href="/">
              <li>Work</li>
            </a>
            <a href="/">
              <li>About</li>
            </a>
            <a href="/">
              <li>Contact</li>
            </a>
          </ul>
        </NavigationStyle.Col>
      </NavigationStyle.Row>
    </NavigationStyle.Inner>
  </NavigationStyle>
);

export default Navigation;

//////////////////////////////////////////////////////////////////////
// End Component
