import { Container, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  divider: {
    maxWidth: "5vw",
    height: 5,
    background: "linear-gradient(45deg, #FF8A3D 30%, #FFA727 90%)",
  },
});

export default function ColorDivider({ color }) {
  const classes = useStyles();

  return (
    <Container
      className={classes.divider}
      style={{ backgroundColor: `${color}` }}
    />
  );
}
