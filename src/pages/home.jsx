import React from 'react';
import  Icon  from '../static/app-icon.png'
import {
Page,
Navbar,
NavTitle,
NavTitleLarge,
Link,
Block
} from 'framework7-react';

const HomePage = () => (
<Page name="home">
  {/* Top Navbar */}
  <Navbar large sliding={false}>
    <NavTitle sliding>starbox</NavTitle>
    <NavTitleLarge>Home</NavTitleLarge>
  </Navbar>

  {/* Page content */}
  <Block strong>
    <div className="text-align-center">
      <div className="icon-wrapper">
        <img className="app-icon" src={Icon} alt="" />
      </div>
      <p>Apple's least favorite store but actaully this time.</p>
      <Link href="https://twitter.com/starbox_app" target="_blank" external={true} iconIos="f7:logo_twitter" iconAurora="f7:logo_twitter" text="Follow us on Twitter!" />
    </div>

  </Block>
</Page>
);
export default HomePage;