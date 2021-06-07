import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
// import purple from "@material-ui/core/colors/purple";
import deepPurple from "@material-ui/core/colors/deepPurple";
import deepOrange from "@material-ui/core/colors/deepOrange";
import green from "@material-ui/core/colors/green";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    // color: "white",
    [theme.breakpoints.down("sm")]: {
      color: theme.palette.secondary.main,
    },
    [theme.breakpoints.up("md")]: {
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.up("lg")]: {
      color: deepPurple[500],
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: deepOrange,
    action: green,
  },
  typography: {
    fontFamily: ["Montserrat", "cursive"].join(","),
  },
  root: {
    flexGrow: 1,
  },
});

export default theme;
