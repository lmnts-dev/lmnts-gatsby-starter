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
  border-top: ${Theme.Color.Gray} 1px solid;
  background-color: ${Theme.Color.White};
  padding-top: ${Base.Size / 2 + 'px'};
  padding-bottom: ${Base.Size + 'px'};
  color: ${Theme.Color.Black};
  display: flex;
  flex-direction: column;
`;

export default FooterStyle;
//////////////////////////////////////////////////////////////////////
