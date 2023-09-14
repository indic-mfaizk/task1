import {
  Box,
  Grid,
  IconButton,
  makeStyles,
  Typography,
  TextField,
} from "@material-ui/core";
import React from "react";
import GraphComponent from "./GraphComponent";
// import HomeLeftSideComponent from "../../component/HomeLeftSideComponent";
// import Leaderboard from "../../component/Leaderboard";

const useStyle = makeStyles((theme) => ({
  mainBox: {
    background: "#26272B",
    backdropFilter: "blur(51.8363151550293px)",
    padding: "10px",
    borderRadius: "5px",
    height: "96%",
    "& .graphImg": {
      width: "auto",
      maxWidth: "100%",
    },
    "& .settinginnerBox": {
      borderRadius: "5px",
      background: "#26272B",
      marginTop: "8px",
    },
  },
  LeaderBoardBox: {
    borderRadius: "5px",
    background: "#26272B",
    marginTop: "8px",
    padding: "10px",
    marginBottom: "10px",
    "& .interleaderText": {
      background: "#1D1F23",
      padding: "6px",
      borderRadius: "6px",
    },
    "& .MuiInputBase-input": {
      color: "#fff",
    },
    "& .MuiInput-underline::before ": {
      borderBottom: "none",
    },
  },
}));

export default function HomePageCompoent() {
  const classes = useStyle();

  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item lg={3} md={3} sm={4} xs={12}>
          <Box className={classes.mainBox}>
            {/* <HomeLeftSideComponent /> */}
          </Box>
        </Grid>
        <Grid item lg={9} md={9} sm={8} xs={12}>
          <Box className={classes.mainBox}>
            <GraphComponent />
          </Box>
        </Grid>
      </Grid>
      <Box className={classes.settingBox}>
        <Box
          mt={1}
          mb={1}
          className="displaySpacebetween settinginnerBox"
          style={{
            borderRadius: "5px",
            background: "#26272B",
          }}
        >
          <Box className="displayStart">
            <IconButton className="settionIcon">
              <img src="images/setting.svg" alt="fair" />
            </IconButton>
            <IconButton className="settionIcon">
              <img src="images/rec.png" alt="fair" />
            </IconButton>
            <IconButton className="settionIcon">
              <img src="images/chatline.svg" alt="fair" />
            </IconButton>
          </Box>
          <Box className="displayStart" mr={2}>
            <IconButton>
              <img src="images/fair.svg" alt="fair" />
            </IconButton>
            <Typography variant="body1">Fairness</Typography>
          </Box>
        </Box>
      </Box>

      <Box className={classes.LeaderBoardBox}>
        {/* <Leaderboard /> */}
        <Box className="interleaderText displaySpacebetween" align="left">
          <TextField placeholder=" You must be logged in to chat" />

          <IconButton className="settionIcon" style={{ padding: "10px" }}>
            <img src="images/send.svg" alt="fair" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
