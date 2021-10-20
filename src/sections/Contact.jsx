import {
  Grid,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Instagram, Twitter, YouTube } from "@material-ui/icons";
import React from "react";
import BlueBack from "../layouts/BlueBack"

export default function Contact({ data }) {
  return (
    <BlueBack title="Contáctanos" idx="contact">
      <Typography variant="h6" component="h1">
        Síguenos en nuestras redes sociales o mándanos un DM.
      </Typography>
      <Grid container justifyContent="center" alignItems="center">
        <IconButton color="primary" href="https://instagram.com/ingeniqs">
          <Instagram />
        </IconButton>
        <IconButton color="primary" href="https://instagram.com/ingeniqs">
          <Twitter />
        </IconButton>
        <IconButton color="primary" href="https://instagram.com/ingeniqs">
          <YouTube />
        </IconButton>
      </Grid>
    </BlueBack>
  );
}
