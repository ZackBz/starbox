import React from 'react';
import { Games } from '../components/games'
import {
Page,
Navbar
} from 'framework7-react';

const GamesPage = () => {
const reload = () => {
  location.reload()
}
  return(
<Page name="games" ptr onPtrRefresh={reload}>
  <Navbar title="Hacked Games" />
<Games />
</Page>


);
}

export default GamesPage;