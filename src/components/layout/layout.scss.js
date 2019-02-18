// Layout Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme } from 'constants/Theme';

// Begin Styles
//////////////////////////////////////////////////////////////////////

const SiteGrid = styled.main`
  width: 100%;
  background-color: ${Theme.Color.Secondary};
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;

SiteGrid.Inner = styled.div`
  width: 100%;
  padding-top: ${Theme.Base.Grid.Gutter.Lg.Top};
  padding-bottom: ${Theme.Base.Grid.Gutter.Lg.Bottom};
  padding-left: ${Theme.Base.Grid.Gutter.Lg.Left};
  padding-right: ${Theme.Base.Grid.Gutter.Lg.Right};
  max-width: ${Theme.Base.SiteWidth};
  display: flex;
  flex-direction: column;
`;

export default SiteGrid;

//////////////////////////////////////////////////////////////////////
// End Styles
