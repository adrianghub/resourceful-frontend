import { makeStyles } from "@material-ui/core/styles";
import { amber, blueGrey } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  [theme.typography.h2]: {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
    },
  },
  appBar: {
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  heading: {
    color: "#3A4454",
    fontFamily: "'Pangolin', cursive",
    textDecoration: "none",
  },
  image: {
    marginLeft: "15px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "300px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  grey: {
    color: theme.palette.getContrastText(blueGrey[300]),
    backgroundColor: blueGrey[300],
  },
  amber: {
    color: theme.palette.getContrastText(amber[500]),
    backgroundColor: amber[300],
  },
  [theme.breakpoints.down("sm")]: {
    appBar: {
      flexDirection: "column",
    },
  },
  [theme.breakpoints.down("xs")]: {
    heading: {
      display: "none",
    },
  },
}));
