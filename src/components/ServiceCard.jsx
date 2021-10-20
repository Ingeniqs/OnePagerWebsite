import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ServiceModal from "./ServiceModal";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 10,
    color: "white",
    borderRadius: 25,
    border: 0
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

export default function ServiceCard({ data }) {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      variant="outlined"
      style={{ background: `${data.color}` }}
    >
      <CardContent>
        <Typography
          className={classes.title}
          color="textPrimary"
          gutterBottom
          variant="h4"
          component="h4"
        >
          {data.title}
        </Typography>
        <Typography variant="h5" component="h2"></Typography>
        <Typography className={classes.pos} color="textSecondary">
          Servicio
        </Typography>
        <Divider variant="middle" style={{ backgroundColor: "white" }} />
        <br />
        <Typography variant="body2" component="p">
          {data.content}
          <br />
        </Typography>
        <Typography variant="h2" component="h4">
          <Typography variant="h6" component="p">
            <br />
            desde
            <br />
          </Typography>
          {data.price}
        </Typography>
      </CardContent>
      <CardActions>
        <ServiceModal />
      </CardActions>
    </Card>
  );
}
