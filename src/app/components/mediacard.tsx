import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    padding: 5,
  },
  media: {
    height: 200,
    width: 200,
  },
});

type Props = {
  imageUrl?: string;
  title?: string;
  name?: string;
  age?: number;
};

export default function MediaCard({ imageUrl, title, age }: Props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea style={{ height: "25rem", width: "5rem" }}>
        <CardMedia className={classes.media} image={imageUrl} />
        <CardContent>
          <div>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
          </div>
          <div>
            <Typography>{age}</Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
