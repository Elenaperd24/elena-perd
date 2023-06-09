import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

//APP IMAGES


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Projects(props) {
    let app = props.app
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };



    return (
        <>

            <Card sx={{ maxWidth: 450 }}>
                <CardHeader
                    /*  avatar={
                         <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                             R
                         </Avatar>
                     } */
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={app.name}
                    /* subheader={`Done: ${app.date}`} */
                    
                />
                <a href={app.link} target={'blank'}>
                    <CardMedia
                        component="img"
                        backgroundSize='cover'
                        height="190"
                        image={process.env.PUBLIC_URL + `/images/${app.name}.jpg`}
                        alt={app.name}
                    />
                </a>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {app.funcionality}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>

                {app.technology.map(tech=>{
                        return(
                            <IconButton aria-label="add to favorites">
                            <Avatar alt={tech} sx={{ width:30, height:30, width:"100%", backgroundSize:"cover"}} src={process.env.PUBLIC_URL + `/images/${tech}.png`} />
                       </IconButton>
                        )
                    })}
                  
                    
               {/* <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton> */}
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Description:</Typography>
                        {/*   <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                        aside for 10 minutes.
                    </Typography> */}
                        <Typography paragraph>
                            {app.description}
                        </Typography>
                        {/*   <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with artichokes and
                        peppers, and cook without stirring, until most of the liquid is absorbed,
                        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                        mussels, tucking them down into the rice, and cook again without
                        stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don&apos;t open.)
                    </Typography> */}
                        {/*    <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography> */}
                    </CardContent>
                </Collapse>
            </Card>




        </>
    );
}
