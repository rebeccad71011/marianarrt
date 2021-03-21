import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import becca from '../images/beccas-profile.jpg'

import '../assests/css/font.css'



const drawerWidth = 220;

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

export default function Navbar()  {
    const classes = useStyles();
        return (
            <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                paper: classes.drawerPaper,
                }}
                anchor="left"
            >
            <div style={styles.profileImgContainer}>
                {/* <img alt="Remy Sharp" style={styles.profileImg} src={becca} className={classes.large}/> */}
                <div className="styled-name" style={styles.name}>
                    Marianarrt
                </div>
                <div className="main-description" style={styles.description}>
                    One Of The Most Talented Person I know
                    (What to write Here??)
                </div>
            </div>
             
            <Divider />
            <List style={styles.linkContainer}>
                <ListItem button key={1}>
                  <NavLink to="/" style={styles.navlink}>My Work</NavLink>
                </ListItem>
                <ListItem button key={2}>
                  <NavLink to="/about" style={styles.navlink}>About Me</NavLink>
                </ListItem>
                <ListItem button key={3}>
                  <NavLink to="/hire-me" style={styles.navlink}>Get In Touch</NavLink>
                </ListItem>
            </List>
          </Drawer>
          </div>
        )
    
}

const styles = {
    profileImgContainer: {
      margin: 8,
    },
    profileImg: {
      height: 80,
      width: 80,
      borderRadius: 40,
    },
    //default flex dir is col
    linkContainer: {
      flex:1, 
    },
    navlink : {
        flex:1,
        color: 'black',
        textDecoration: 'none'
    },
    name :{
        fontSize: 30,
        margin:5
    },
    description: {
        fontSize: 13,
        margin:5
    },
};
