import { Box, Typography, makeStyles, useTheme } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => {
  return {
    textboxLeft: {
        left: "4em",
        maxWidth: "40vw",
        backgroundColor: "grey",
        borderRadius: 10
    }
  };
});

export default function CharCard({ concept, image, color, or }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="start"
        alignItems="center"
        maxWidth="50vw"
        position="relative"
      >
        <div
          className="image-box"
          style={{
            position: "relative",
            height: 300,
            width: "30vw",
            backgroundColor: "red",
          }}
        ></div>
        <Box
          p={3}
          borderRadius="10"
          position="absolute"
          alignItems="center"
          className={classes.textboxLeft}
        >
          <Typography paragraph align="left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur laborum officiis atque soluta quisquam, expedita tenetur
            fuga eligendi cumque laudantium enim consequuntur est ipsam. Ea
            doloribus consequatur minima incidunt illum!
          </Typography>
        </Box>
      </Box>
  );
}
