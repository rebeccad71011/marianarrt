import React, {useState} from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { NavLink } from 'react-router-dom'

import becca from '../images/beccas-profile.jpg'

import '../assests/css/font.css'



const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  drawerIcon: {
    position:'absolute',
    top:"1/2%",
    left:"1%"
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
}));

export default function Navbar( props )  {
  const { window } = props;
    const classes = useStyles();
    const container = window !== undefined ? () => window().document.body : undefined;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

    const drawer = (
      <div>
      <div style={styles.profileImgContainer}>
                {/* <img alt="Remy Sharp" style={styles.profileImg} src={becca} className={classes.large}/> */}
                <div className="comfortaa-name" style={styles.name}>
                    Marianarrt
                </div>
                <div className="main-description" style={styles.description}>
                    Rebecca Dsouza 
                </div>
            </div>
             
            <Divider />
            <List style={styles.linkContainer}>
                <NavLink to="/" style={styles.navlink}>
                  <ListItem button key={1}>
                    My Work
                  </ListItem>
                </NavLink>
                <NavLink to="/about" style={styles.navlink}>
                  <ListItem button key={2}>
                    About Me
                  </ListItem>
                </NavLink>
                <NavLink to="/hire-me" style={styles.navlink}>
                  <ListItem button key={3}>
                    Get In Touch
                  </ListItem>
                </NavLink>
            </List>
          </div>
    )

        return (
            <div className={classes.root}>
            
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.drawerIcon}
          >
            <MenuIcon />
          </IconButton>
  
      
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={"left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
          
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
      padding:0
    },
    navlink : {
        flex:1,
        color: 'black',
        textDecoration: 'none',
        padding:0
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
