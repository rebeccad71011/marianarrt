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

import '../assests/css/style.css'
import '../assests/css/font.css'

const useStyles = makeStyles({
  root: {
    flex:1,
    maxWidth: '60vw',
    margin:"4%",
    padding:"1%",
    // mintWidth: '50vw',
  },
  media: {
    maxHeight: '50vh',
    maxWidth: '70vw',
  },
});

const FILE_ID_REGEX = /[-\w]{25,}/

export default function MediaCard() {
  const classes = useStyles();
  const [Paintings, setPaintaings] = useState([]);
  useEffect(() => {
    Tabletop.init({
      key: '1LJr7oVnF42z719FE0o7Myu9bkPWNVUa2rQHlvco8iyk',
      callback: googleData => {
        setPaintaings(googleData);
      },
      simpleSheet: true
    })
  }, []); 

  return (
    <div style={styles.container} className="main-background">
        {Paintings.map(Painting => {
            const url = "https://drive.google.com/uc?export=view&id="+FILE_ID_REGEX.exec(Painting.img_url)
              return (
                <Card className={classes.root} raised={true}>
                   
                        <CardMedia
                            component="img"
                            className={classes.media}
                            image={url}
                            title="Sweet Waters"
                        />
                            <CardContent>
                            <Typography style={styles.paintingName}>
                                {Painting.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" style={styles.paintingDimensions}>
                                {Painting.details}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" style={styles.paintingDimensions}>
                                {Painting.dimensions}
                            </Typography>
                        </CardContent>
                </Card>
              )
        })}
    </div>
  );
}

const styles = {
    container:{
        flex:1,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding:"1%",
    },
    paintingName: {
      fontSize:'2vh'
    },
    paintingDimensions: {
      fontSize:'1.4vh'
    }
}
