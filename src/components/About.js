import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tabletop from 'tabletop';

import becca from '../images/beccas-about.jpeg'
import smiley from '../images/smiling-face.png'
import '../assests/css/font.css'
import '../assests/css/style.css'

export default function MediaCard() {

  return (
    <div className="flex-container">
        <div style={styles.pictureBox}>
            <img style={styles.picture} src={becca} alt="This is Becca" />
        </div>
        <div style={styles.descriptionBox}>
            {/* <div className="comfortaa-name" style={styles.name}>
                Rebecca Dsouza
            </div> */}
            <div className="main-description" style={styles.description}>
            Hi! I’m <strong>Rebecca Dsouza</strong>, a 21-year-old self-taught artist based in Mumbai, India. <br/><br/>
            <small><b>Marianarrt</b> is my creative space dedicated to studying and understanding the art of Oil Painting. 
            I love art in all its forms, but I find myself to be particularly drawn towards <i>classical realism</i>- It is something I hope to master, one day. <br/><br/> 
            The paintings in this space are a combination of my original works, commissions as well as a few studies I’ve made, since 2018. 
            I try my best to <del> divide</del> my time between my profession and my passion- two very different fields; 
            and I hope you stick around with me on my journey!<br></br><br></br>
            To get the latest updates about commission statuses, potential future exhibitions 
            or to just have a chat, consider checking out my Instagram- @marianarrt.</small><sub><img style={styles.smiley} src={smiley}></img></sub> 
            
            </div>
        </div>
    </div>
  )
}

const styles = {
    container:{
        flex:1,
        display:'flex',
        flexDirection:'row',
    
        // backgroundColor:'red'
    },
    pictureBox:{
        flex:1/2,
        // backgroundColor:'pink',
        borderRadius:"2%",
        margin:"2%"
    },
    picture:{
        borderRadius:"2%",
        maxHeight:'80vh',
        maxWidth:'50vh',
    },
    smiley:{
        height:'4vh',
        marginLeft:"1%"
    },
    descriptionBox:{
        flex:1,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'blue',
        margin:"2%",    
    },
    name:{
        fontSize:'5vh'
    },
    description: {
        fontSize:'3vh'
    }
}
