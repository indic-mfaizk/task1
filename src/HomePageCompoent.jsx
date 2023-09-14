import {
  Box,
  Grid,
  IconButton,
  makeStyles,
  Typography,
  TextField,
} from "@material-ui/core";
import React from "react";
import tronImage from "./assets/hero-tron.png";
import graphHeaderIcon from "./assets/graphHeader.png";
// import HomeLeftSideComponent from "../../component/HomeLeftSideComponent";
// import Leaderboard from "../../component/Leaderboard";
import { Line } from "react-chartjs-2";
import { BsFillPersonFill } from "react-icons/bs";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);
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
  graphContainer: {
    height: "90%",
    // width: "70%",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      // width: "45%",
      // height: "100%",
    },
  },
  lineChartContainer: {
    height: "100%",
    width: "85%",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("md")]: {
      width: "70%",
      height: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "45%",
      height: "100%",
    },
  },
  chipParentContainer: {
    height: "100%",
    // backgroundColor: "green",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "flex-end",
    justifyContent: "center",
    width: "180px",
    [theme.breakpoints.down("sm")]: {
      height: "50%",
      width: "180px",
      marginTop: "50px",
    },
  },
  ChipsContainer: {
    backgroundColor: "#44454A",
    height: "30px",
    padding: "5px 15px",
    borderRadius: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "4px",
    width: "180px",

    [theme.breakpoints.down("sm")]: {
      height: "40px",
      padding: "0px 10px",
      width: "150px",
    },
  },
  ChipsContainerVariant: {
    backgroundColor: "#44454A",
    height: "30px",
    padding: "5px 1px",
    borderRadius: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "4px",
    width: "170px",
    [theme.breakpoints.down("sm")]: {
      height: "40px",
      padding: "0px 2px",
    },
  },
  chipsTitle: {
    color: "rgba(255, 255, 255, 0.60)",

    fontSize: "12px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  },
  tronImage: {
    height: "30px",
    [theme.breakpoints.down("sm")]: {
      height: "20px",
    },
  },
  chipsSubtitle: {
    fontSize: "12px",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  },
  chipIconContainer: {
    height: "15px",
    width: "15px",
  },
  networkStatusContainer: {
    height: "50px",
    // backgroundColor: "magenta",
    position: "absolute",
    right: "50px",
    bottom: "20px",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      right: "100px",
      bottom: "0px",
    },
  },
  networkHeading: {
    fontSize: "12px",
  },
  networksubHeading: {
    fontSize: "10px",
  },
  networkIndicator: {
    height: "10px",
    width: "10px",
    borderRadius: "100%",
    display: "inline-block",
    backgroundColor: "green",
  },
  graphHeader: {
    height: "50px",
    // backgroundColor: "blue",
    width: "auto",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "10px",
  },
  headerChips: {
    backgroundColor: "#2F3034",
    width: "70px",
    height: "38px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50px",
    [theme.breakpoints.down("sm")]: {
      width: "100px",
      height: "25px",
      borderRadius: "10px",
    },
  },
  headerChipsText: {
    color: "white",
    fontSize: "14px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  },
  headerChipsVariant: {
    backgroundColor: "#25262a",
    width: "70px",
    height: "38px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50px",
  },
}));

export default function HomePageCompoent() {
  const classes = useStyle();

  const options = {
    responsive: true,
    tension: 0.5,
    // linetension: 0.8,
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 0,
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white",
          borderWidth: 10,
          borderColor: "blue",
        },
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, ticks) {
            return value + "x";
          },
        },
      },
    },
  };

  const labels = ["1s", "2s", "3s", "4s", "5s", "6s"];

  const data = {
    labels,
    datasets: [
      {
        data: [0, 0.7, 2, 4],
        // data: [1.0, 1.2, 1.3, 1.5, 1.7, 1.8],
        borderColor: "white",
        backgroundColor: "#25262a",
        fill: {
          target: "origin", // 3. Set the fill options
          above: "#eb7d2d",
        },
        pointRadius: (ctx) => {
          const pointsLength = ctx.chart.data.labels.length - 1;

          const pointsArray = [];
          for (let i = 0; i <= pointsLength; i++) {
            if (i === pointsLength) {
              pointsArray.push(10);
            } else {
              pointsArray.push(0);
            }
          }
          console.log(pointsArray);
          return pointsArray;
        },
      },
    ],
  };

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
            {/* <img src="images/graph.png" alt="graph" className="graphImg" /> */}
            <Box className={classes.graphHeader}>
              {/* header-chip-start */}
              <Box className={classes.headerChips}>
                <Typography className={classes.headerChipsText}>
                  1.69x
                </Typography>
              </Box>
              {/* header-chip-end */}
              {/* header-chip-start */}
              <Box className={classes.headerChips}>
                <Typography className={classes.headerChipsText}>
                  1.69x
                </Typography>
              </Box>
              {/* header-chip-end */}
              {/* header-chip-start */}
              <Box className={classes.headerChips}>
                <Typography className={classes.headerChipsText}>
                  1.69x
                </Typography>
              </Box>
              {/* header-chip-end */}
              {/* header-chip-start */}
              <Box className={classes.headerChips}>
                <Typography className={classes.headerChipsText}>
                  1.69x
                </Typography>
              </Box>
              {/* header-chip-end */}
              {/* header-chip-start */}
              <Box className={classes.headerChips}>
                <Typography className={classes.headerChipsText}>
                  1.69x
                </Typography>
              </Box>
              {/* header-chip-end */}
              {/* header-chip-start */}
              <Box className={classes.headerChips}>
                <Typography className={classes.headerChipsText}>
                  1.69x
                </Typography>
              </Box>
              {/* header-chip-end */}
              {/* header-chip-start */}
              <Box className={classes.headerChipsVariant}>
                <img src={graphHeaderIcon} alt="" />
              </Box>
              {/* header-chip-end */}
            </Box>
            <Box className={classes.graphContainer}>
              <Box className={classes.lineChartContainer}>
                <Line
                  data={data}
                  options={options}
                  className={classes.LineChart}
                />
              </Box>
              <Box className={classes.chipParentContainer}>
                {/* chips-startr */}
                <Box className={classes.ChipsContainer}>
                  <Box className={classes.chipIconContainer}>
                    <BsFillPersonFill fill="white" />
                  </Box>
                  <h1 className={classes.chipsTitle}>Hidden</h1>
                  <img src={tronImage} alt="" className={classes.tronImage} />
                  <h2 className={classes.chipsSubtitle}>287.524525</h2>
                </Box>
                {/* chips-end */}
                {/* chips-startr */}
                <Box className={[classes.ChipsContainerVariant]}>
                  <BsFillPersonFill height={"10px"} fill="white" />
                  <h1 className={classes.chipsTitle}>Hidden</h1>
                  <img src={tronImage} alt="" className={classes.tronImage} />
                  <h2 className={classes.chipsSubtitle}>287.123</h2>
                </Box>
                {/* chips-end */}
                {/* chips-startr */}
                <Box className={classes.ChipsContainer}>
                  <BsFillPersonFill height={"10px"} fill="white" />
                  <h1 className={classes.chipsTitle}>Hidden</h1>
                  <img src={tronImage} alt="" className={classes.tronImage} />
                  <h2 className={classes.chipsSubtitle}>287.524525</h2>
                </Box>
                {/* chips-end */}
                {/* chips-startr */}
                <Box className={classes.ChipsContainerVariant}>
                  <BsFillPersonFill height={"10px"} fill="white" />
                  <h1 className={classes.chipsTitle}>Hidden</h1>
                  <img src={tronImage} alt="" className={classes.tronImage} />
                  <h2 className={classes.chipsSubtitle}>287.52</h2>
                </Box>
                {/* chips-end */}
                {/* chips-startr */}
                <Box className={classes.ChipsContainer}>
                  <BsFillPersonFill height={"10px"} fill="white" />
                  <h1 className={classes.chipsTitle}>Hidden</h1>
                  <img src={tronImage} alt="" className={classes.tronImage} />
                  <h2 className={classes.chipsSubtitle}>287.524525</h2>
                </Box>
                {/* chips-end */}
              </Box>
              <Box className={classes.networkStatusContainer}>
                <Typography className={classes.networkHeading}>
                  Total 4s
                </Typography>
                <Typography className={classes.networksubHeading}>
                  Network status{" "}
                  <Typography className={classes.networkIndicator}></Typography>
                </Typography>
              </Box>
            </Box>
            {/* chip-start */}
            {/* chips-start */}

            {/* chips-end */}
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
