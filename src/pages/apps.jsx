import React from 'react';
import { AppsComponent } from '../components/apps'
import {
Page,
Navbar
} from 'framework7-react';

const AppsPage = () => {

  const reload = () => {
    location.reload()
  }

  return(
<Page name="apps" ptr onPtrRefresh={reload}>
  <Navbar title="Tweaked Apps" />
  <AppsComponent />
</Page>


);

}
export default AppsPage;