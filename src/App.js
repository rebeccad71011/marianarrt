import React, {Component, Fragment, useEffect} from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Tabletop from 'tabletop';

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Hire from './components/Hire'
import Project from './components/Project'
import projects from './db.json'

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,

}));


// export default class App extends Component {
//     render() {
//         return (
//             <Router>
//                 <Fragment>
//                     <Navbar />
//                     <Route exact path='/' component={ Home }>Home</Route>
//                     <Route path='/about' component={ About }>About</Route>
//                     <Route path='/hire-me' component={ Hire }>Hire Me</Route>
//                     <Route exact path='/portfolio' render={ routerProps => {
//                         return  <Portfolio {...routerProps} projects={projects} /> }
//                     }>Portfolio</Route>
//                     <Route path={`/portfolio/:id`} render={ routerProps=> {
//                         return <Project {...routerProps} projects={projects} /> }
//                     } />
//                 </Fragment>
//             </Router>
//         )
//     }
// }

export default function App() {
  const classes = useStyles();
  useEffect(() => {
    Tabletop.init({
      key: '1LJr7oVnF42z719FE0o7Myu9bkPWNVUa2rQHlvco8iyk',
      callback: googleData => {
        console.log('google sheet data --->', googleData)
      },
      simpleSheet: true
    })
  }, []); 
  return (
    <Router>
    <div className={classes.root}>
      <CssBaseline />
      <Navbar/>
      <Route exact path='/' component={ Home } />
      <Route path='/about' component={ About } />
      <Route path='/hire-me' component={ Hire } />
    </div>
    </Router>
  );
}
