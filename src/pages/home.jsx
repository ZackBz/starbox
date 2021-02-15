import React from "react";
import Icon from "../static/app-icon.png";
import { FeaturedComponent } from "../components/featured";

import {
  Page,
  PageContent,
  Navbar,
  NavTitle,
  NavTitleLarge,
  Link,
  Block,
} from "framework7-react";

const HomePage = () => (
  <>
    <Page name="home">
      {/* Top Navbar */}
      <Navbar large sliding>
        <NavTitle sliding>starbox</NavTitle>
        <NavTitleLarge sliding={false}>Home</NavTitleLarge>
      </Navbar>

      <Block strong>
        <div className="text-align-center">
          <div className="icon-wrapper">
            <img className="app-icon" src={Icon} alt="starbox app icon" />
          </div>
          <p>Apple's least favorite store but actaully this time.</p>
          <Link
            href="https://twitter.com/starbox_app"
            target="_blank"
            external={true}
            iconIos="f7:logo_twitter"
            iconAurora="f7:logo_twitter"
            text="Follow us on Twitter!"
          />
        </div>
      </Block>

      <PageContent>
        <Navbar>
        <NavTitle>Featured</NavTitle>
        </Navbar>
        <div>
          <FeaturedComponent />
        </div>
      </PageContent>
    </Page>
  </>
);
export default HomePage;
