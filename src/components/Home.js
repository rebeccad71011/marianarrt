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

const useStyles = makeStyles({
  root: {
    flex:1,
    maxWidth: '60vw',
    color:"red",
    margin:"3%",
    padding:"4%"
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
        // console.log('google sheet data --->', googleData);
        setPaintaings(googleData);
      },
      simpleSheet: true
    })
  }, []); 

  return (
    <div style={styles.container}>
        {Paintings.map(Painting => {
            const url = "https://drive.google.com/uc?export=view&id="+FILE_ID_REGEX.exec(Painting.img_url)
              return (
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            className={classes.media}
                            image={url}
                            title="Sweet Waters"
                        />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {Painting.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {Painting.details}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {Painting.dimensions}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
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
        color:"red",
        padding:"3%",

    }
}
