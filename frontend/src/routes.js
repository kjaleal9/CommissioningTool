// @material-ui/icons
import Dashboard from '@mui/icons-material/Dashboard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

// Screens
import DashboardScreen from './screens/Dashboard/DashboardScreen.js';
import ProjectManagerScreen from './screens/ProjectManagerScreen.js';
import TicketScreen from './screens/TicketScreen.js';

const dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: Dashboard,
    component: DashboardScreen,
  },
  {
    path: '/create',
    name: 'Tasks',
    icon: ListAltIcon,
    component: ProjectManagerScreen,
  },
  {
    path: '/tickets',
    name: 'Tickets',
    icon: LocalOfferIcon,
    component: TicketScreen,
  },
];

export default dashboardRoutes;
