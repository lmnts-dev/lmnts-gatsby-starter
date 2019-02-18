// Layout Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme } from 'constants/Theme';

// Blocks
import Inner from 'blocks/Inner';

// Begin Styles
//////////////////////////////////////////////////////////////////////

const SiteGrid = styled.main`
  width: 100%;
  background-color: ${Theme.Color.White};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
`;

SiteGrid.Inner = styled(Inner)`
  /* Core styles */
  width: 100%;
  display: flex;
  flex-direction: column;

  /* Gutters */
  padding-top: ${Theme.Base.Grid.Gutter.Lg.Top};
  padding-bottom: ${Theme.Base.Grid.Gutter.Lg.Bottom};
  padding-left: ${Theme.Base.Grid.Gutter.Lg.Left};
  padding-right: ${Theme.Base.Grid.Gutter.Lg.Right};
`;

export default SiteGrid;

//////////////////////////////////////////////////////////////////////
// End Styles
