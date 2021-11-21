import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Batman from './images/batman.jpg';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles,ThemeProvider,createMuiTheme} from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const CustomCard = () => {
    const history = useHistory();
    const useStyles = makeStyles({
        card: {
          width: '250px',
          height: '350px',
          cursor: 'default'
        }
      })

    const clickCard = (event) =>{
      history.push('bookDetails');
    }
   const noPointer = {cursor: 'default'};

   const classes = useStyles();
  return (
      <>
    <Card className={classes.card} onClick={(event) => {clickCard(event)}}>          
    <CardMedia
      component="img"
      alt="batman"
      height="250"
      image={Batman}
    />
    <CardContent>
      <div className="h2">
        <label style={{fontWeight: 'bold',fontSize: 20 }}>Batman</label>
      </div>
      <label className="h2" style={{color:'#A9A7A7',fontWeight: 'bold',fontSize: 15,textDecorationLine: 'line-through' }}> THB599.00 </label>
      <label className="h2" style={{ fontWeight: 'bold', fontSize: 20 }}> THB299.00 </label>
      
    </CardContent>
    <CardActions style={noPointer}>
      <Button size="small" >Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
   
 </>
  );
};

export default CustomCard;
