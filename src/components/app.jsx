import React, { useState, useEffect } from 'react';

import {
  f7,
  f7ready,
  App,
  Panel,
  Views,
  View,
  Popup,
  Page,
  Navbar,
  Toolbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter
} from 'framework7-react';


import routes from '../js/routes';
import store from '../js/store';

const MyApp = () => {
  // Login screen demo data
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Framework7 Parameters
  const f7params = {
    name: 'starbox', // App name
      theme: 'ios', // Automatic theme detection



      // App store
      store: store,
      // App routes
      routes: routes,
      // Register service worker
      serviceWorker: {
        path: '/service-worker.js',
      },
  };
  const alertLoginData = () => {
    f7.dialog.alert('Username: ' + username + '<br>Password: ' + password, () => {
      f7.loginScreen.close();
    });
  }
  f7ready(() => {


    // Call F7 APIs here
  });

  return (
    <App { ...f7params } themeDark>


        {/* Right panel with reveal effect*/}
        <Panel right reveal themeDark>
          <View>
            <Page>
              <Navbar title="Connect with us!"/>
              <Link href="https://twitter.com/starbox_app" target="_blank" external={true} iconIos="f7:logo_twitter" iconAurora="f7:logo_twitter" text="Follow us on Twitter" />
            </Page>
          </View>
        </Panel>


        {/* Views/Tabs container */}
        <Views tabs className="safe-areas">
          {/* Tabbar for switching views-tabs */}
          <Toolbar tabbar labels bottom>
            <Link tabLink="#view-home" tabLinkActive iconIos="f7:house_fill" iconAurora="f7:house_fill" iconMd="material:home" text="Home" />
            <Link tabLink="#view-games" iconIos="f7:gamecontroller_fill" iconAurora="f7:gamecontroller_fill" iconMd="material:games" text="Games" />
            <Link tabLink="#view-apps" iconIos="f7:layers_fill" iconAurora="f7:layers_fill" iconMd="material:layers" text="Apps" />
            <Link tabLink="#view-search" iconIos="f7:search" iconAurora="f7:search" iconMd="material:search" text="Search" />
          </Toolbar>

          {/* Your main view/tab, should have "view-main" class. It also has "tabActive" prop */}
          <View id="view-home" main tab tabActive url="/" />
          {/* Games View */}
          <View id="view-games" name="games" tab url="/games/" />

          {/* Apps View */}
          <View id="view-apps" name="apps" tab url="/apps/" />

            {/* Apps View */}
            <View id="view-search" name="games" tab url="/search/" />


        </Views>
    </App>
  )
}
export default MyApp;