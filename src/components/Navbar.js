import React, {useState,} from "react";
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
import logo from '../images/bitmap.png'

import '../assests/css/font.css'
import '../assests/css/style.css'

const { innerWidth: width, innerHeight: height } = window;
console.log(window);
const drawerWidth = 250;

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
      <div style={styles.container}>
      <div style={styles.nameContainer}>
                
      <img alt="Marianarrt Branding" style={styles.profileImg} src={logo} className={classes.large}/>
               
            </div>
             
            <Divider />
            <List style={styles.linkContainer} className="main-description">
                <NavLink to="/marianarrt" style={styles.navlink}>
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
    container: {
      backgroundColor:'#e0e0e0',
      flex:1,
    },
    nameContainer: {
      flex:1,
      margin: "2%",
      flexDirection:'column'
    },
    profileImg: {
      height: 60,
      borderRadius: 40,
      marginTop:'45'
    },
    //default flex dir is col
    linkContainer: {
      flex:1,
      padding:0,
    },
    navlink : {
        flex:1,
        color: 'black',
        textDecoration: 'none',
        fontSize:13
    },
    rowContainer: {
      flexDirection:'row'
    },
    name :{
        fontSize: 25,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    },
    description: {
        fontSize: 15,
    },
};
