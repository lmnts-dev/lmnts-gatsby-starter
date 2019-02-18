// <Row> Styles:
// This is the primary Row style of the site.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme } from 'constants/Theme';

// Begin Styles
export const RowStyle = styled.section`
  width: 100%;
  margin: 0 auto;
  display: flex;
  max-width: ${props => (props.FullWidth ? '100%' : Theme.Base.SiteWidth)};
  justify-content: ${props => (props.Justify ? props.Justify : 'flex-start')};
  flex-direction: ${props => (props.FlexDir ? props.FlexDir : 'row')};
  align-items: ${props => (props.AlignItems ? props.AlignItems : 'flex-start')};
`;

export default RowStyle;
//////////////////////////////////////////////////////////////////////
