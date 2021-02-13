import React from 'react';
import  Icon  from '../static/app-icon.png'
import {
Page,
Navbar,
NavTitle,
NavTitleLarge,
NavRight,
Link,
Block
} from 'framework7-react';

const HomePage = () => (
<Page name="home">
  {/* Top Navbar */}
  <Navbar large sliding={false}>
    <NavTitle sliding>starbox</NavTitle>
    <NavRight>
      <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="right" />
    </NavRight>
    <NavTitleLarge>Home</NavTitleLarge>
  </Navbar>

  {/* Page content */}
  <Block strong>
    <div className="text-align-center">
      <div className="icon-wrapper">
        <img className="app-icon" src={Icon} alt="" />
      </div>
      <p>Apple's least favorite store but actaully this time.</p>
    </div>

  </Block>
</Page>
);
export default HomePage;