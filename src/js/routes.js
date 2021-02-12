
import HomePage from '../pages/home.jsx';
import NotFoundPage from '../pages/404.jsx';
import GamesPage from '../pages/games.jsx';
import AppsPage from '../pages/apps.jsx';
import SearchPage from '../pages/search.jsx';


var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/games/',
    component: GamesPage,
  },
  {
    path: '/apps/',
    component: AppsPage,
  },
  {
    path: '/search/',
    component: SearchPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
