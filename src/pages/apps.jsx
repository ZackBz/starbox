import React from 'react';
import { AppsComponent } from '../components/apps'
import {
Page,
Navbar
} from 'framework7-react';

const AppsPage = () => (
<Page name="apps">
  <Navbar title="Tweaked Apps" />
  <AppsComponent />
</Page>


);


export default AppsPage;