import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    display:'flex',
    maxWidth: 800,
    justifyContent:'center',
    alignItems:'center',
    color:"red",
    margin:"3%"
  },
  media: {
    alignSelf:'center',
    width:'100vw',
    height: '70vh',
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div style={styles.container}>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Sweet Waters"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Sweet Waters
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Details of the painting
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>

        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Sweet Waters"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Sweet Waters
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Details of the painting
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
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
