import {
  createMuiTheme,
  makeStyles,
  responsiveFontSizes,
} from "@material-ui/core/styles";
// import purple from "@material-ui/core/colors/purple";
import deepPurple from "@material-ui/core/colors/deepPurple";
import deepOrange from "@material-ui/core/colors/deepOrange";
import cyan from "@material-ui/core/colors/cyan";

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      flexGrow: 1,
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
    },
    title: {
      flexGrow: 1,
      fontWeight: 700,
    },
    menuButton: {
      display: "none",
      visibility: "none",
      [theme.breakpoints.down(800)]: {
        display: "inline-block",
      },
    },
    nav: {
      [theme.breakpoints.down(800)]: {
        display: "flex",
        flexGrow: 1,
        position: "fixed",
        right: 0,
        alignItems: "center",
        justifyContent: "flex-end",
        marginTop: theme.spacing(30),
        padding: theme.spacing(2),
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      },
    },
    list: {
      [theme.breakpoints.up(800)]: {
        display: "inline",
      },
      [theme.breakpoints.down(800)]: {
        display: "none",
        visibility: "hidden",
      },
    },
    visible: {
      [theme.breakpoints.down(800)]: {
        display: "block",
        visibility: "visible",
      },
    },
  }),
  { index: 1 }
);

let theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: deepOrange,
    textPrimary: cyan,
  },
  typography: {
    fontFamily: ["Montserrat", "cursive"].join(","),
  },
  root: {
    flexGrow: 1,
  },
  frontPage: {
    height: 380,
  },
});

let pages = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: deepOrange,
    textPrimary: cyan,
  },
  typography: {
    fontFamily: ["Montserrat", "cursive"].join(","),
  },
  root: {
    flexGrow: 1,
  },
});
let layoutOne = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: deepOrange,
    textPrimary: cyan,
  },
  typography: {
    fontFamily: ["Times New Roman", "serif"].join(","),
  },
  root: {
    flexGrow: 1,
  },
});

let layoutTwo = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: deepOrange,
    textPrimary: cyan,
  },
  typography: {
    fontFamily: ["Merriweather", "serif"].join(","),
  },
  root: {
    flexGrow: 1,
  },
});
pages = responsiveFontSizes(pages);
layoutOne = responsiveFontSizes(layoutOne);
layoutTwo = responsiveFontSizes(layoutTwo);
export { pages, layoutOne, layoutTwo };
theme = responsiveFontSizes(theme);
export default theme;
