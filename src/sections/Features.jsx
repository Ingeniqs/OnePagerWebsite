import { Grid } from "@material-ui/core";
import React from "react";
import FeatCard from "../components/FeatCard";
import BlueBack from "../layouts/BlueBack";

export default function Features({ data }) {
  return (
    <BlueBack title="Identidad" idx="identidad">
      <Grid container justifyContent="center" alignItems="center">
        {data.map((dat) => (
          <Grid item xs={12} md={4} lg={3}>
            <FeatCard data={dat} />
          </Grid>
        ))}
      </Grid>
    </BlueBack>
  );
}
