// Footer Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Blocks
import InnerStyle from 'blocks/Inner/styles.scss';

// Begin Styles

const FooterStyle = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
`;

FooterStyle.Inner = styled(InnerStyle)`
  background-color: ${Theme.Color.Primary};
  padding-top: ${Base.Size / 4 + 'px'};
  padding-bottom: ${Base.Size / 4 + 'px'};
  color: ${Theme.Color.Black};
`;

export default FooterStyle;
//////////////////////////////////////////////////////////////////////
