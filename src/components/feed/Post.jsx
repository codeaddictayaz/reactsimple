import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import Feeds from "./feeds.json"

const Post = () => {
  return (
Feeds.map(feed=>{
  return (
    <Card sx={{ margin: 5 }} key={feed.id}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
         {feed.logo}
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVert />
        </IconButton>
      }
     title={feed.title}
      subheader={feed.sub}
    />
    <CardMedia
      component="img"
      height="20%"
      // image="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="whatEver"
      image={feed.path}
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary" textAlign="justify">
       {feed.typo}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite sx={{ color: "red" }} />}
        />
      </IconButton>
      <IconButton aria-label="share">
        <Share />
      </IconButton>
    </CardActions>
  </Card>
  )
})
   
  
  );
};

export default Post;
