import React from 'react';
import { AppsComponent } from '../components/apps'
import { Games } from '../components/games'
import { FeaturedComponent } from '../components/featured'

import {
Page,
Navbar,
Searchbar,
List,
ListItem
} from 'framework7-react';

const SearchPage = () => (
<Page name="search">
  <Navbar title="Search" />
  <Searchbar init={true} searchContainer=".search-list" searchIn=".item-title" disableButtonText="Cancel"
    placeholder="Search in starbox" clearButton={true}></Searchbar>
  <List className="searchbar-not-found">
    <ListItem title="App not found! Dm us to get it added :)"></ListItem>
  </List>
  <AppsComponent />
  <Games />
  <FeaturedComponent />
</Page>


);


export default SearchPage;