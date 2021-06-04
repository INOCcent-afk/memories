import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  bgGreen: {
    background: "green",
    color: "#fff",

    "&:hover": {
      opacity: 0.9,
      background: "green",
      color: "#fff",
    },
  },

  bgRed: {
    background: "red",
    color: "#fff",

    "&:hover": {
      opacity: 0.9,
      background: "red",
      color: "#fff",
    },
  },
}));
