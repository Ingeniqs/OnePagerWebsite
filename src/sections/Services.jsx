import { Grid } from "@material-ui/core";
import React from "react";
import ServiceCard from "../components/ServiceCard";
import WhiteBack from "../layouts/WhiteBack";

export default function Services({ data }) {
  return (
    <WhiteBack title="Servicios" idx="servicios">
      <Grid container justifyContent="center" alignItems="flex-start">
        {data.map((dat) => (
          <Grid item xs={12} md={4}>
            <ServiceCard data={dat} />
          </Grid>
        ))}
      </Grid>
    </WhiteBack>
  );
}
