/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from '@mui/icons-material/Dashboard'

// core components/views for Admin layout
import DashboardPage from './screens/HomeScreen.js'
import ProjectManagerScreen from './screens/ProjectManagerScreen.js'

// core components/views for RTL layout

const dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: Dashboard,
    component: DashboardPage,
  },
  {
    path: '/create',
    name: 'Tasks',
    icon: Dashboard,
    component: ProjectManagerScreen,
  },
]

export default dashboardRoutes
