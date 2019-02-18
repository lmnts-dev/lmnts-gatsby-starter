// Navigation Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Blocks
import InnerStyle from 'blocks/Inner/styles.scss';
import RowStyle from 'blocks/Row/styles.scss';
import ColStyle from 'blocks/Col/styles.scss';

// Begin Styles
//////////////////////////////////////////////////////////////////////

const NavigationStyle = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  ${Theme.Base.Grid.Nav.Fixed
    ? `
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  `
    : `
  position: relative;
  `};
`;

NavigationStyle.Inner = styled(InnerStyle)`
  background-color: ${Theme.Color.Primary};
  height: ${Theme.Base.Grid.Nav.Size.Lg};
  color: ${Theme.Color.Black};
`;

NavigationStyle.Col = styled(ColStyle)`
  align-items: center;
  ul {
    display: flex;
    li {
      padding: 0 ${Base.Size / 4 + 'px'};
      &:last-child {
        padding: 0 0 0 ${Base.Size / 4 + 'px'};
      }
    }
    a {
      color: ${Theme.Color.Black};
    }
  }
`;

NavigationStyle.Row = RowStyle;

export default NavigationStyle;

//////////////////////////////////////////////////////////////////////
// End Styles