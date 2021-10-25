import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    color: "white",
    borderRadius: 15,
    border: 0,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 26,
    color: "white",
    fontFamily: "Share Tech",
  },
  pos: {
    marginBottom: 12,
    color: "white",
  },
});

export default function ProjectCard({ data }) {
  const classes = useStyles();

  return (
    <Card
      sx={{ maxWidth: "auto" }}
      className="Masonry-item"
      style={{
        background: data.background,
        color: "white",
        borderRadius: 15,
        margin: 0,
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={data.image} // Add project image
        alt={data.title}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          className={classes.title}
          style={{ fontFamily: "Share Tech" }}
        >
          {data.title}
        </Typography>
        <Typography variant="body1" style={{ fontFamily: "Josefin Sans" }}>
          {data.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <a
            href={data.demo}
            style={{
              textDecoration: "none",
              color: "white",
              fontFamily: "Josefin Sans",
            }}
          >
            Demo Link
          </a>
        </Button>
        <Button size="small">
          <a
            href={data.link}
            style={{
              textDecoration: "none",
              color: "white",
              fontFamily: "Josefin Sans",
            }}
          >
            Learn More
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}
