import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Pages from '../pages/Pages';
import Reservation from '../pages/Reservation';
import Blog from '../pages/Blog';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/menu', component: Menu },
    { path: '/pages', component: Pages },
    { path: '/blog', component: Blog },
    { path: '/reservation', component: Reservation },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
