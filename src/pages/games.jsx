import React from 'react';
import { Games } from '../components/games'
import {
Page,
Navbar
} from 'framework7-react';

const GamesPage = () => (
<Page name="games">
  <Navbar title="Hacked Games" />
  <Games />
</Page>


);


export default GamesPage;