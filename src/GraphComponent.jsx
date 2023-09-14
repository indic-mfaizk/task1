import React from "react";
import {
  Box,
  Grid,
  IconButton,
  makeStyles,
  Typography,
  TextField,
} from "@material-ui/core";
import { Line } from "react-chartjs-2";

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
import tronImage from "./assets/hero-tron.png";
import graphHeaderIcon from "./assets/graphHeader.png";
import ChipPerson from "./assets/chipPerson.png";

const useStyle = makeStyles((theme) => ({
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50px",
    padding: "0px 10px",
    gap: "5px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 10px",
    },
  },

  chipsTitle: {
    color: "rgba(255, 255, 255, 0.60)",
    fontFamily: "Roboto Condensed",
    fontWeight: "400",
    fontSize: "12px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  },
  tronImage: {
    height: "25px",
    [theme.breakpoints.down("sm")]: {
      height: "20px",
    },
  },
  chipsSubtitle: {
    fontSize: "12px",
    color: "white",
    fontFamily: "Roboto Condensed",
    fontWeight: "700",
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
    fontFamily: "Roboto Condensed",
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
    fontFamily: "Roboto Condensed",
    fontWeight: "700",
  },
  networksubHeading: {
    fontSize: "10px",
    fontFamily: "Roboto Condensed",
    fontWeight: "400",
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
const GraphComponent = () => {
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
    <>
      {/* <img src="images/graph.png" alt="graph" className="graphImg" /> */}
      <Box className={classes.graphHeader}>
        {/* header-chip-start */}
        <Box className={classes.headerChips}>
          <Typography className={classes.headerChipsText}>1.69x</Typography>
        </Box>
        {/* header-chip-end */}
        {/* header-chip-start */}
        <Box className={classes.headerChips}>
          <Typography className={classes.headerChipsText}>1.69x</Typography>
        </Box>
        {/* header-chip-end */}
        {/* header-chip-start */}
        <Box className={classes.headerChips}>
          <Typography className={classes.headerChipsText}>1.69x</Typography>
        </Box>
        {/* header-chip-end */}
        {/* header-chip-start */}
        <Box className={classes.headerChips}>
          <Typography className={classes.headerChipsText}>1.69x</Typography>
        </Box>
        {/* header-chip-end */}
        {/* header-chip-start */}
        <Box className={classes.headerChips}>
          <Typography className={classes.headerChipsText}>1.69x</Typography>
        </Box>
        {/* header-chip-end */}
        {/* header-chip-start */}
        <Box className={classes.headerChips}>
          <Typography className={classes.headerChipsText}>1.69x</Typography>
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
          <Line data={data} options={options} className={classes.LineChart} />
        </Box>
        <Box className={classes.chipParentContainer}>
          {/* chips-startr */}
          <Box className={classes.ChipsContainer}>
            <Box className={classes.chipIconContainer}>
              <img src={ChipPerson} alt="" />
            </Box>
            <h1 className={classes.chipsTitle}>Hidden</h1>
            <img src={tronImage} alt="" className={classes.tronImage} />
            <h2 className={classes.chipsSubtitle}>287.524525</h2>
          </Box>
          {/* chips-end */}
          {/* chips-startr */}
          <Box className={[classes.ChipsContainer]}>
            <Box className={classes.chipIconContainer}>
              <img src={ChipPerson} alt="" />
            </Box>
            <h1 className={classes.chipsTitle}>Hidden</h1>
            <img src={tronImage} alt="" className={classes.tronImage} />
            <h2 className={classes.chipsSubtitle}>287.123</h2>
          </Box>
          {/* chips-end */}
          {/* chips-startr */}
          <Box className={classes.ChipsContainer}>
            <Box className={classes.chipIconContainer}>
              <img src={ChipPerson} alt="" />
            </Box>
            <h1 className={classes.chipsTitle}>Hidden</h1>
            <img src={tronImage} alt="" className={classes.tronImage} />
            <h2 className={classes.chipsSubtitle}>287.524525</h2>
          </Box>
          {/* chips-end */}
          {/* chips-startr */}
          <Box className={classes.ChipsContainer}>
            <Box className={classes.chipIconContainer}>
              <img src={ChipPerson} alt="" />
            </Box>
            <h1 className={classes.chipsTitle}>Hidden</h1>
            <img src={tronImage} alt="" className={classes.tronImage} />
            <h2 className={classes.chipsSubtitle}>287.52</h2>
          </Box>
          {/* chips-end */}
          {/* chips-startr */}
          <Box className={classes.ChipsContainer}>
            <Box className={classes.chipIconContainer}>
              <img src={ChipPerson} alt="" />
            </Box>
            <h1 className={classes.chipsTitle}>Hidden</h1>
            <img src={tronImage} alt="" className={classes.tronImage} />
            <h2 className={classes.chipsSubtitle}>287.524525</h2>
          </Box>
          {/* chips-end */}
        </Box>
        <Box className={classes.networkStatusContainer}>
          <Typography className={classes.networkHeading}>Total 4s</Typography>
          <Typography className={classes.networksubHeading}>
            Network status{" "}
            <Typography className={classes.networkIndicator}></Typography>
          </Typography>
        </Box>
      </Box>
      {/* chip-start */}
      {/* chips-start */}

      {/* chips-end */}
    </>
  );
};

export default GraphComponent;
