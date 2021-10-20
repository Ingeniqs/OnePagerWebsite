import {
  useTheme,
  makeStyles,
  Typography,
  Card,
  Box,
  CardContent,
  Paper,
  Icon,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      backgroundColor: "#fefefe",
    },
    avatar: {
      width: 200,
    },
    circle: {
      width: 150,
      height: 150,
      background: "white",
      borderRadius: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      "&:hover": {
        backgroundColor: "#FF8A3D",
      },
    },
    icon: {
      fontSize: 70,
      color: "#00D0FF",
    },
  };
});

export default function FeatCard({ data }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box>
      <Card elevation={0} style={{ backgroundColor: "transparent", color: "white" }}>
        <CardContent>
          <Paper className={classes.circle} alignItems="center" elevation={3}>
            <Icon className={classes.icon}>{data.icon}</Icon>
          </Paper>
          <Box mt={2} mb={1}>
            <Typography variant="h4" component="h3" align="center" style={{fontFamily: "Share Tech"}}>
              {data.title}
            </Typography>
          </Box>
          <Box mt={0} mb={1}>
            <Typography variant="h6" component="body1" align="center">
              {data.content}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
